import { Fragment ,useEffect,useState} from 'react';

import Nav from './Nav';//me traigo el componente
import Tarjeta from './Tarjeta';

import './App.css';

export default function App() {
  //comportamiento - seccion JS 

  const nombre="un nombre";
  let [estado,setEstado]=useState("Juan");//nos devuelve un array ,de ese array solamente tomamos los primeros dos indices: el 1ero que es el estado en si, y el 2do que es su setter(funcion para actualizar);

  //estado + setter(funcion donde le coloco el nuevo valor y se encarga de "actualizar" el componente )
  const saludar=()=>{
    alert("HOLAAA"+ nombre);
    setEstado("Marta")
  };

  useEffect(()=>{
    console.log("Se produjo un cambio en estado")
  },[estado]);

  useEffect(()=>{
    console.log("funcion que se ejecuta apenas de renderiza el componente App")
  },[])

  //muestre - seccion HTML
  return (
    <Fragment>
      <Nav dato={estado} info="una info x..."/>
      <h1>HOLAAA!</h1>
      <h2>{estado}</h2>
      {estado === "Marta"?<h3>Ahora es Marta</h3>:<h3>El nombre es Juan...</h3>}
        <button onClick={saludar}>recibir saludo</button>
    <Tarjeta titulo="tarjeta 1" data="info tarjeta 1...."/>
    <Tarjeta titulo="tarjeta 2" data="info tarjeta 2...."/>
    <Tarjeta titulo="tarjeta 3" data="info tarjeta 3...."/>
    </Fragment>
  );
  //otra alternativa para que me tome el componente pero no me genere etiquetas de "mas"
  // return (
  //   <>
  //     <Nav/>
  //     <h1>HOLAAA!</h1>
  //   </>
  // );
}

//POO -> class para crear clases

//hooks -> funciones o metodos que manipulan el estado 
// su nombre inicia con use




