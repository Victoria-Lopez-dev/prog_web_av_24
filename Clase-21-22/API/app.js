import "dotenv";
import express from "express";
import cors from 'cors';
import {router} from "./routes/routesAlumnos.js"

import {db} from'./config/db.js'
const app= express();
const port=process.env.PORT|| 4000;

db.connect((error)=>{
    if(error){
      
            console.log(error)
        
    }else{
        console.log("Coneccion con DB MySQL exitosa")
    }
  });

//middlewares
app.use(cors());//cruze de dominios
//middlewares - funciones intermedias entre peticiones y respuestas
app.use(express.json());//permitir interpretar json

app.use(express.urlencoded({extended:true}));//nos permite recibir informacion de un formulario en formato objeto
app.use('/imagen',express.static('/images'));//poder hacer una peticion y obtener la imagen

app.use("/user",router)

app.listen(port,(err)=>{
    if(err){
        console.log("Error al correr el server "+err)
    }else{
        console.log("Server corriendo en puerto "+port)
    }
    
});

