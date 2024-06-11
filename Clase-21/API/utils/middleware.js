 const funcionMiddleware=(req,res,next)=>{
    const data=req.params.nombre
    if(data ==="juana"){
        next();
    }else{
        res.send("No es JUana asi que no puede continuar..")
    }
    
}

 const funcionBMid=(req,res,next)=>{

    console.log("otro middleware mas...")
    next();
}

export{funcionMiddleware,funcionBMid}