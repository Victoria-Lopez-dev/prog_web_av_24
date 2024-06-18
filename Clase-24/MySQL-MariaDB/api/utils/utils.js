import db from '../config/db.js';

 const buscarATodos=(res)=>{
    db.query("SELECT * FROM alumnos",(err,data)=>{
        if(err){
            console.log(err.sqlMessage)
            res.status(500).json({mensaje:"Error interno, no se logro ubicar la informacion"})
        }else{
            console.log(data)//info recibida de la DB en forma de lista
              res.status(200).json({mensaje:"alumno encontrado","info":data})
        }
    });
}

const buscarATodos2=async()=>{
    const[data,_info]= await db.query("SELECT * FROM alumnos")

    return data
}

const cargaDeAlumno=(alumno,res)=>{
    //lenguaje SQL :
    //INSERT INTO alumnos (nombre,dni)VALUES()
    db.query("INSERT INTO alumnos (nombre,dni) VALUES(?,?)",[alumno.nombre,alumno.dni],(err,data)=>{
        err?            res.status(500).json({mensaje:"Error interno, no se logro ubicar la informacion"})
:     res.status(201).json({message:"alumno registrado"})

    })
}

const cargaDeAlumno2=async()=>{
    const[data,_info]= await db.query("INSERT INTO alumnos (nombre,dni) VALUES(?,?)",[alumno.nombre,alumno.dni])

    return data  
}

const cargaDeAlumnoPass=(alumno,res)=>{
    db.query("INSERT INTO alumnos (nombre,dni) VALUES(?,?)",[alumno[1],alumno[2]],(err,data)=>{
        err?            res.status(500).json({mensaje:"Error interno, no se logro ubicar la informacion"})
:     res.status(201).json({message:"alumno registrado"})

    })
}
export {buscarATodos,buscarATodos2,cargaDeAlumno,cargaDeAlumno2,cargaDeAlumnoPass}