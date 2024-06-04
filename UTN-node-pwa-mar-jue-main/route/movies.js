import { Router } from "express";
export const router = Router();
import { MovieController } from "../controller/movies.js";

// list all movies
router.get("/", MovieController.getAllMovies);

// Create a new resource (movie)
router.post("/", MovieController.createMovie);

// update a resource by its id
router.patch("/:movieId", MovieController.updateById);

//search movies by its genre
router.get("/search", MovieController.searchByGenre);

//get a movie by its id
router.get("/:movieId", MovieController.getById);
router.delete("/:movieId", MovieController.deleteById);
