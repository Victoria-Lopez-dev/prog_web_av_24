import "./Tarjeta.css"

export default function Tarjeta({titulo,data}) {

    return(
        <div className="tarjeta">
            <h3>{titulo}</h3>
            <p>{data}</p>
        </div>
    )
}