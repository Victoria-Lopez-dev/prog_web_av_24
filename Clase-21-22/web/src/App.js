
import { useEffect ,useState} from 'react';//hook

import FormImag from './FormImag.js';
import FormPostJson from './FormPostJson.js';
import FormParams from './FormParams.js';
import './App.css';

function App() {
  //JSX variables,funciones..
  const[info,setInfo]=useState('');
  const[data,setData]=useState('hola');
  const[mensaje,setMensaje]=useState(false)

  const traerData=async()=>{
   let infoRecibida= await fetch("http://localhost:4000/")//por defecto fetch hace peticiones de tipo get
    .then((resp)=>{return resp.json()})//transformamos la informacion
    .then((respuesta)=> setInfo(respuesta.data))//cambiamos el valor del estado "info"
    .catch((err)=>{ console.log("no se logro obtener la info: "+ err)})
    setData(infoRecibida)
  }
  const cambiarTexto=()=>{
    setInfo("Otro texto modificando el estado info")
  }


  const traerDataParms=()=>{
  
    // podemos sino tambien utilizar template literals `http://localhost:4000/info/${data}`
    fetch("http://localhost:4000/info/"+data)
    .then((info)=>{return info.json()})
    .catch(err =>console.log(err))
   
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

        <button className='btn btn-warning ' onClick={cambiarTexto}>Cambiar texto</button>

        <button className='btn btn-danger ' onClick={traerDataParms}>Pedir info con parametros</button>
    
        <FormParams/>{// formulario que permite enviar info por medio de parametros en el header
          }

{        // <form action='http://localhost:4000/' method='POST' className='mx-5' >
  //esto nos muestra la respuesta de la API tal cual se envia
}
{  mensaje === false?  
    <FormPostJson setMensaje={setMensaje}/> :
    <p className='alert alert-success'> Data enviada exitosamente!!</p>
    
  }

        <div className='my-5 bg-warning p-2'>
          <FormImag />
        </div>
    </div>
  );
}

//para colocar JS dentro del return utilizamos {} , atributo:
// class -> className
//for -> htmlFor
export default App;

//metodos PUT - PATCH - DELETE -POST : enviar informacion header o por el body.
//configuracion del fetch para post -> me sirve tambien para los otros metodos
//solo modificar el valor de "method" y el body dependiendo de lo que envie