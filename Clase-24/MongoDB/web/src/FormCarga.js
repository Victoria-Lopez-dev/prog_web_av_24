export default function FormCarga() {

    const handlerCreate=()=>{

    };

    return (
        <form onSubmit={handlerCreate}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" aria-describedby="nombre alumno"/>
            </div>
            <div className="mb-3">
                <label htmlFor="dni" className="form-label">dni</label>
                <input type="text" className="form-control" id="dni" maxLength={8}/>
            </div>

            <button type="submit" className="btn btn-primary">Cargar</button>
        </form>
    )
}