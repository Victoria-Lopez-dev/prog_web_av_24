const express=require("express");
const router =express.Router();
const{funcion1,mostrarPlato,info2Params,funcionPost,funcionPost2,actualizar}= require("../controllers/controllersClase12")

router.get("/info",funcion1);

router.get("/api/:data",mostrarPlato)

router.get("/api/:data/:otroParam",info2Params);

router.post("/",funcionPost);

router.post("/info",funcionPost2);

router.put("/info/:id",actualizar)

router.delete()
module.exports=router;

// creamos el archivo
// importamos express y su metoro Router()
//generamos las rutas y las exportamos para poder vincularlas en el archivo app.js

//API REST -> estado de codigo correspondiente -> usa el metodo correspondiente a cada peticion que hace el front