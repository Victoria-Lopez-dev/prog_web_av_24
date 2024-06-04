import { createUser, getAllUsers, throwError } from "../controller/usersCT.js";
import { Router } from "express";
export const router = Router();
router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/error", throwError);
