import {config}from "dotenv";
import express from "express";
import cors from 'cors';

//teniendo una DB MySQL
//import {router} from "./routes/routesAlumnos.js"//ruteo de las peticiones este aparte para mas comodidad.
//import './config/db.js' //traemos la configuracion de la coneccion con la DB

//teniendo una DB MongoDB
import './config/dbMongo.js'//en caso de utilizar db MongoDB
import { router } from "./routes/routesAlumnosDBnoSQL.js";


config();
const app= express();
const port=process.env.PORT || 4100;


//middlewares
app.use(cors());//cruze de dominios
//middlewares - funciones intermedias entre peticiones y respuestas
app.use(express.json());//permitir interpretar json

app.use(express.urlencoded({extended:true}));//nos permite recibir informacion de un formulario en formato objeto

app.use("",router)

app.listen(port,(err)=>{
    if(err){
        console.log("Error al correr el server "+err)
    }else{
        console.log("Server corriendo en puerto "+port)
    }
    
});

