//conectarnos con una base de datos MongoDB -> API paquete mongoose que nos permite la comunicacion entre la API y la DB

import mongoose from "mongoose";

const host="localhost:27017";//"127.0.0.1:27017"
const database="db_alumnos"

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

   mongoose.connect(`mongodb://${host}/${database}`)
  .then(() => console.log("coneccion exitosa a la DB MongoDB"))
  .catch((err) =>  console.log("No se logro coneccion.Error: "+err));

