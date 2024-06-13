import express from "express";
//const express= require
import {mensajeOk,respuestaB,respuestaPost,respuestaC,buscarAlumno,encriptandoData,verificacionEncrip} from "../controlers/alumnosControlers.js";
import{funcionMiddleware,funcionBMid} from "../utils/middleware.js";
import {upload} from "../cargaImg.js";

const router= express.Router();

router.get("/",mensajeOk);

router.get("/info/:nombre",funcionMiddleware,funcionBMid,respuestaC);

router.get("/infoAlumno/:dni",buscarAlumno)

router.post("/",respuestaPost)

//peticiones carga imagen/archivos
router.post("/nuevaImagen",upload.single("imagen"),respuestaB);

//peticiones con encriptacion
router.post("/datoEncriptado",encriptandoData)

router.get("/confirmarDato/:dato",verificacionEncrip)


export {router}

