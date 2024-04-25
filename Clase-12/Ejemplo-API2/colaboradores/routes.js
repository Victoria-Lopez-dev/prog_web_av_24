const express=require("express");
const router =express.Router();
const{funcionColaboradores,funcionColaborador2}= require("./controllers")

router.get("/lista",funcionColaboradores);
//endpoint completo "/colaboradores/lista"

router.get("/lista/:nombreColaborador",funcionColaboradores);

router.post("/lista/:id",funcionColaborador2);

module.exports=router;
