 const mensajeOk=(req,res)=>{
    //hacemos todo el proceso 
    res.status(200).json({message:"ok",data:"Una oracion traida desde la API"})
};
 const respuestaB=(req,res)=>{
    console.log(req.file)
    res.send("imagen cargada Exitosamente")
};

const respuestaPost=(req,res)=>{
    console.log(req.body)
    res.status(201).json({message:"info recibida"})
}

export {mensajeOk,respuestaB,respuestaPost}