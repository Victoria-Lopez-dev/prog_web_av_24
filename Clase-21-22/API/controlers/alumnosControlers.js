 import {hash,compare} from "bcrypt";
import {db} from "../config/db.js"

 const mensajeOk=(req,res)=>{
    //hacemos todo el proceso 
    res.status(200).json({message:"ok",data:"Una oracion traida desde la API"})
};
 const respuestaB=(req,res)=>{
    console.log(req.file)
    console.log(req.body)
    res.json({info:"imagen cargada Exitosamente"})
};
const respuestaC=(req,res)=>{
    console.log(req.params)
    res.status(200).json({"message":"todo OK","info":{"dato":11}})
};

const respuestaPost=(req,res)=>{

    console.log(req.body)
    res.status(201).json({message:"info recibida"})
}

const buscarAlumno=(req,res)=>{
    console.log(req.params.dni)//req.params -> objeto

    //simulamos la info traida desde una DB
    const alumnoA={
        nombre:"Juan",
        apellido:"Perez"
    };
   
        res.json({alumnoA})
    
}

const encriptandoData=async(req,res)=>{
    //obtenemos info de la request
    let {info,data}=req.body;

    //encriptamos por medio de bcrypt dicha info
    let dataEnc=await hash(info,10)

    db.query("INSERT INTO `datos`(`info`, `nombre`) VALUES (?,?)",[dataEnc,data],(err,data)=>{
        if(data){
            res.json({message:'info ingresada ok'})
        }else{
            res.json({message:'error:'+err})
        }
    });






}

const verificacionEncrip= async(req,res)=>{
 console.log(infoEnc)
    //obtenemos info de la peticion
    let {dato}=req.params;

    // //comparar dicha info con la que tenemos encriptada utilizando bcrypt
   let resultadoComparacion= await compare(dato,infoEnc);

     resultadoComparacion? res.json({"message":"info ingresada es correcta"}): res.json({"message":"info ingresada no coincide con la almacenada"})

    

}

export {mensajeOk,respuestaB,respuestaPost,respuestaC,buscarAlumno, encriptandoData,verificacionEncrip}



