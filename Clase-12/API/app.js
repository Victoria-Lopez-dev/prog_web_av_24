const express = require("express");
const app= express();
const puerto=4000;

const ruteos=require("./routes/routesClase12.js");// traemos los ruteos del archivo "routesClase12.js"

app.use(express.json());//definir que se va a estar transmitiendo informacion en formato JSON


//peticiones que interpreta el server

app.use("",ruteos);// le indicamos que apenas se realice alguna peticion, utilice los ruteos del archivo "routesClase12"


app.listen(puerto,()=>{
    console.log(`Server corriendo por el puerto ${puerto}`)
});

//configurar por medio de que puerto vamos a estar comunicandonos 


//POSTMAN/ INSOMNIA-> programa que simula peticiones - nos sirve para evitar tener que crear un front para probar la API
//nos permite probar las peticiones y las respuestas



