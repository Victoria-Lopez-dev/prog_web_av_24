
export default function FormImg() {


    const handlerSubmitImg=(event)=>{
        event.preventDefault();
        let info= new FormData(event.target);// la info a enviar
        //FormData -> metodo append()
        fetch("http://localhost:4000/nuevaImagen",{
            method:"post",
            body:info,

        })
        .then((resp)=>{return resp.json()})
        .then(data =>console.log(data))
        .then(data =>event.target.reset())
        .catch(error =>console.log(error))
    }
    return(
        <form className='text-dark py-4' onSubmit={(event)=>handlerSubmitImg(event)}>
            <label htmlFor='dato'>nombre dato</label>
            <input name="dato" id="dato" type='text'/>

            <label htmlFor='imagen'> archivo de imagen</label>
            <input  name="imagen" id="imagen" type='file'/>

            <button className="btn btn-dark">Enviar</button>
        </form>
    )
}