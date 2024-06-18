import { useState } from 'react';

import FormBusqueda from './FormBusqueda';
import FormCarga from './FormCarga';
import './App.css';

function App() {
  const[showForm1,setShowForm1]=useState(false)
  const[showForm2,setShowForm2]=useState(false)

  return (
    <div className="App bg-dark">
        <h1 className='text-light p-5 text-center'>Busqueda y Carga de Alumnos</h1>

      <section className='py-5 d-flex flex-column aling-items-center justify-content-center px-3 bg-success my-5 mx-2'>
        <h2 className='text-center'>Busqueda </h2>
        <button className='btn btn-lg btn-danger  ' onClick={()=>{setShowForm1(!showForm1)}}>
          Buscar Alumno 
          <i class="bi bi-arrow-down-short"></i></button>
          {showForm1?
            <FormBusqueda/>   
          :
          ""
          }
          
      </section>

      <section className='py-5 d-flex flex-column aling-items-center px-3 bg-info my-5 mx-2'>
        <h2 className='text-center'>Carga </h2>
        <button className='btn btn-lg btn-warning' onClick={()=>{setShowForm2(!showForm2)}}>
          Cargar Alumno 
          <i class="bi bi-arrow-down-short"></i></button>
          {showForm2?
            <FormCarga/>  
            :""
          }
         
      </section>
      <section className='my-5 p-5'>
          <h2 className='text-light p-2 text-center'>Alumnos</h2>
      </section>
    </div>
  );
}

export default App;
