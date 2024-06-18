import {alumno} from "../scheme/alumnosShcema.js";
 const buscarAlumno=async(req,res)=>{
    const nombre=req.params.nombre
    //comando mongoDB find() - para buscar algo en particular find({filtro})

    let resultado=await alumno.find({nombre:nombre});
 
    if(resultado){
       
        res.status(200).json({mensaje:"OK",data:resultado})
    }else{
        res.json({mensaje:"Erro"})
    }
    
};

const cargarAlumno=async(req,res)=>{
    //obtenemos info de la request

    let{nombreAl,dniAl}=req.body

    //armar el molde del alumno
    let nuevoAlumno= new alumno({
        nombre:nombreAl,
        dni:dniAl
    })
  
  //cargarlo a la DB MongoDB
  let resultado=await alumno.collection.insertOne(nuevoAlumno);
 
  if(resultado){
      console.log(resultado);
      res.json({mensaje:"alumno cargado exitosamente"})
  }else{
      res.json({mensaje:"Error"})
  }
}



export {buscarAlumno,cargarAlumno}



