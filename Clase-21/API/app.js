import express from "express";
import cors from 'cors';
import {router} from "./routes/routesAlumnos.js"

const app= express();
const port=process.env.PORT|| 4000;

//middlewares - funciones intermedias entre peticiones y respuestas
app.use(express.json());//permitir interpretar json
app.use(cors());//cruze de dominios
app.use(express.urlencoded({extended:true}))//nos permite recibir informacion de un formulario en formato objeto

app.use("",router)

app.listen(port,(err)=>{
    if(err){
        console.log("Error al correr el server "+err)
    }else{
        console.log("Server corriendo en puerto "+port)
    }
    
});

