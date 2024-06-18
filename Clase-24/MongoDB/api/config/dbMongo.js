//conectarnos con una base de datos MongoDB -> API paquete mongoose que nos permite la comunicacion entre la API y la DB
import {config} from 'dotenv';
import mongoose from "mongoose";

config();
const host=process.env.DB_USER;//"127.0.0.1:27017"
const password=process.env.DB_PASSWORD;
const database=process.env.DB_DATABASE;

//tratando de conectar a la API con la DB MongoDB (no relacional)
// export const db=async()=>{
//     try{
//         await mongoose.connect(`mongodb//${host}/${database}`);
//         console.log("coneccion exitosa a la DB MongoDB")
//     }catch(err){
//         console.log("No se logro coneccion.Error: "+err)
//     }
//     }


    //alternativa
   
   mongoose.connect(`mongodb+srv://${host}:${password}@cluster0.2lowwwk.mongodb.net/${database}?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log("coneccion exitosa a la DB MongoDB"))
  .catch((err) =>  console.log("No se logro coneccion.Error: "+err));

