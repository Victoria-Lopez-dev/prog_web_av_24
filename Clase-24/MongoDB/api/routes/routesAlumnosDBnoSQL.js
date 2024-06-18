import express from "express";

import {
    buscarAlumno,
    cargarAlumno,
   
} from "../controlers/alumnosControlersNoSQL.js";//armarmos en un archivo externo para mas comodidad

const router= express.Router();

router.get("/buscar/:nombre",buscarAlumno);


router.post("/cargar",cargarAlumno);



export {router}