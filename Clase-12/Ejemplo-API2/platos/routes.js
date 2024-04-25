const express=require("express");
const router =express.Router();
const{funcionPlatos,}= require("./controllers")

router.get("/",funcionPlatos);



module.exports=router;
