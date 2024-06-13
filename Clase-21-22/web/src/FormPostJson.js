
export default function FormPostJson({setMensaje}) {
    const handlerForm=(e)=>{
        e.preventDefault();
    
        // let formInfo=new FormData(e.target)
        let formInfo={
          nombre:e.target[0].value,
          apellido:e.target[0].value}
      
    //como por defecto fecht ->GET , tenemos que cambiar la configuracion
    
        fetch("http://localhost:4000/",{
          method:'post',
          body:JSON.stringify(formInfo),//info en formato JSON
          headers:{
            "Content-Type":"application/json" //configurar 
          }
        })
        .then((resp)=> {return resp.json()})
        .then((data)=> {
          data.message ==="info recibida"? setMensaje(true):setMensaje(false);
        setTimeout(()=>{setMensaje(false)},3000)})
        .catch(err=> console.log("no se logro enviar la info: "+ err)
        )
      }
    
    return(
        <form className='mx-5' onSubmit={(event)=>handlerForm(event)}>
            <label className='form-label' htmlFor='nombre'>nombre</label>
            <input type='text' name='nombre' id="nombre" className='form-control col-md-6'/>

            <label className='form-label' htmlFor='apellido'>apellido</label>
            <input className='form-control' type='text' name='apellido' id="apellido"/>

            <input type='submit' value="enviar" className='btn btn-primary'/>
        </form>
     
    )
}