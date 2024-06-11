import express from "express";
//const express= require
import {mensajeOk,respuestaB,respuestaPost} from "../controlers/alumnosControlers.js";
import{funcionMiddleware,funcionBMid} from "../utils/middleware.js";
import {upload} from "../cargaImg.js";

const router= express.Router();

router.get("/",mensajeOk);

router.get("/info/:nombre",funcionMiddleware,funcionBMid,respuestaB);

router.post("/",respuestaPost)
router.post("/nuevaImagen",upload.single("imagen"),respuestaB);



export {router}

