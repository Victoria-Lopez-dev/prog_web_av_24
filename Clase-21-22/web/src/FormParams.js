
export default function FormParams() {
    const traerDataAlumno=(e)=>{
        e.preventDefault()
    
        fetch("http://localhost:4000/infoAlumno/"+e.target[0].value)
        .then((info)=>{return info.json()})
        .then(data=> console.log(data))
        .catch(err =>console.log(err))
      }

    return(

        <form className='bg-success my-2 p-4' onSubmit={(event)=>traerDataAlumno(event)}>
          <label htmlFor='dni' className="form-label">Ingrese DNI</label>
            <input type='text' name='dni' id="dni" className="form-control"/>

          <input type='submit' value="enviar" className='btn btn-primary'/>

        </form>
    )
}