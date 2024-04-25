
let platos={
    nombrePlato: "ensalada mixta",
      precio: 2000,
      stock: 20,
      categoria: "ensaladas"
    }

const funcion1=(req,res)=>{

    res.send("Ingreso por endpoint /info")
};
const mostrarPlato=(req,res)=>{
    let parametro=req.params.data;

    if(parametro === "ensalada"){
        res.status(201).json({
            "nombrePlato": "ensalada mixta",
              "precio": 2000,
              "stock": 20,
              "categoria": "ensaladas"
            })
    }else{
        res.send(platos)
    }
}

const info2Params=(req,res)=>{//endpoint /api  y tiene  informacion que la vamos a llamar "data" en este caso que le estamos indicando que se encuentra despuest de "/api"
    //req.params -> utilizamos esto para obtener la informacion del head ( objeto)
     console.log(req.params)
     let info= req.params.data;
     if(info =="ensalada"){
         res.send("platos")
     }else{
         res.send("HOLA")
     }
 }
 const funcionPost=(req,res)=>{
    console.log(req.body)//informacion que viaja en el body
    let infoBody=req.body;
    if(infoBody.tipo =="perro"){
        res.send("Se recibio info de un perro")
    }else{
        res.send("Ingreso por endpoint / metodo POST")
    }
    
}
const funcionPost2=(req,res)=>{
    res.status(204).json({'message':"probando distintas respuestas..."})
}


const actualizar=(req,res)=>{
    let filtro=req.params.id;
    let infoNueva=req.body;
    //aca haremos cosas con la DB...
    res.send("actualizacion ok!")
};

module.exports={funcion1,mostrarPlato,info2Params,funcionPost,funcionPost2,actualizar};