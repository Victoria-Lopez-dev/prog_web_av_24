import express from "express";

import {
    buscarAlumno,
    cargarAlumno,
    cargarAlumnoPass
} from "../controlers/alumnosControlers.js";//armarmos en un archivo externo para mas comodidad

const router= express.Router();

router.get("/buscar",buscarAlumno);


router.post("/cargar",cargarAlumno);

router.post("/cargarPassword",cargarAlumnoPass);


export {router}

