
import { useEffect ,useState} from 'react';//hook
import './App.css';

function App() {
  //JSX variables,funciones..
  const[info,setInfo]=useState('');
  const[mensaje,setMensaje]=useState(false)

  const traerData=async()=>{
    await fetch("http://localhost:4000/")//por defecto fetch hace peticiones de tipo get
    .then((resp)=>{return resp.json()})//transformamos la informacion
    .then((respuesta)=> setInfo(respuesta.data))//cambiamos el valor del estado "info"
    .catch((err)=>{ console.log("no se logro obtener la info: "+ err)})
    
  }
  const cambiarTexto=()=>{
    setInfo("Otro texto modificando el estado info")
  }

  const handlerForm=(e)=>{
    e.preventDefault();

    const formInfo= {info1:e.target[0].value,info2:e.target[1].value}
    fetch("http://localhost:4000",{
      method:'post',
      body:JSON.stringify(formInfo),
      headers:{
        "Content-Type":"application/json" //configurar 
      }
    })
    .then((resp)=> {return resp.json()})
    .then((data)=> {
      data.message==="info recibida"? setMensaje(true):setMensaje(false);
    setTimeout(()=>{setMensaje(false)},3000)
  })
    .catch(err=> console.log("no se logro enviar la info: "+ err)
    )
  }

  useEffect(()=>{
    traerData()
  },[])

  //fetch() 
  //axio
  return (
    <div className="App bg-dark text-white vh-100 container-fluid">
      <h1>Vinculando API con web</h1>
        <p>{info}</p>

        <button className='btn btn-warning' onClick={cambiarTexto}>Cambiar texto</button>

{        // <form action='http://localhost:4000/' method='POST' className='mx-5' >
  //esto nos muestra la respuesta de la API tal cual se envia
}
{  mensaje ==false?  <form className='mx-5' onSubmit={(event)=>handlerForm(event)}>
      <label className='form-label' htmlFor='nombre'>nombre</label>
        <input type='text' name='nombre' id="nombre" className='form-control col-md-6'/>

        <label className='form-label' htmlFor='apellido'>apellido</label>
        <input className='form-control' type='text' name='apellido' id="apellido"/>
        <input type='submit' value="enviar" className='btn btn-primary'/>
    </form>:
    <p className='alert alert-success'> Data enviada exitosamente!!</p>
  }

        
    </div>
  );
}

//para colocar JS dentro del return utilizamos {} , atributo:
// class -> className
//for -> htmlFor
export default App;
