const funcionColaboradores=(req,res)=>{
     console.log(req.params)
    console.log(req.query)// viene despues del signo de pregunta y debo ingresar tanto una referencia como el valor.
    res.send("lista de colaboradores...")
};

const funcionColaborador2=(req,res)=>{
    if(req.params.id == 1){
        res.status(200).json({"mensaje":"colaborador ya ingresado anteriormente"})
    }else{
        console.log(req.body);
        res.status(201).json({"mensaje":"colaborador creado"})
    }
    
}

module.exports={funcionColaboradores,funcionColaborador2}