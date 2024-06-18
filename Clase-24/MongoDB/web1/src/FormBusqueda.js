export default function FormBusqueda() {

    const handlerSearch=(event)=>{
        event.preventDefault();//manipular el envio 
        fetch("https://clase-24.onrender.com/buscar/"+event.target[0].value)
        .then((resp)=>{return resp.json()})
        .then((info)=>{console.log(info.data)})
        .catch(err=>console.log(err))
    };

    return (
        <form onSubmit={(event)=>handlerSearch(event)}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" aria-describedby="nombre alumno"/>
            </div>

            <button type="submit" className="btn btn-primary">Buscar</button>
        </form>
    )
}