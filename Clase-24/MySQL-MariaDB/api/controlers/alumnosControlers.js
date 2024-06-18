import {buscarATodos,buscarATodos2,cargaDeAlumno,cargaDeAlumnoPass} from "../utils/utils.js"
import {hash} from 'bcrypt';
import db from '../config/db.js';

 const buscarAlumno=async(req,res)=>{
    //hacemos todo el proceso 
    //SQL -> "SELECT * FROM `alumnos`" paquete mysql2 -> metodo query

    //una manera (no necesitamos el async-await por que utilizamos callback)
    //si la descontracturo creandola en un archivo aparte buscarATodos(res)
    //o lo escribo directamente en la funcion
    
    db.query("SELECT * FROM alumnos",(err,data)=>{
        if(err){
            console.log(err.sqlMessage)
            res.status(500).json({mensaje:"Error interno, no se logro ubicar la informacion"})
        }else{
            console.log(data)//info recibida de la DB en forma de lista
              res.status(200).json({mensaje:"alumno encontrado","info":data})
        }
    });

    //otra manera
    //const [data, _info] = await db.query("comandoSQL a enviar")
    
//    const info=await buscarATodos2()

//    if(info === null){
//     res.status(200).json({mensaje:"no hay alumno con dicho dato"})

//    }else{
//     res.status(500).json({mensaje:"Error interno, no se logro ubicar la informacion"})

//    }

};

const cargarAlumno=(req,res)=>{

    cargaDeAlumno(req.body,res)
}


const cargarAlumnoPass=(req,res)=>{
    //primero encriptamos
    let{password,nombre,id}=req.body
    let passwordEncriptada=hash(password,10)
    
    //despues cargamos 
    cargaDeAlumnoPass([passwordEncriptada,nombre,id],res)

}

export {buscarAlumno,cargarAlumno,cargarAlumnoPass}



