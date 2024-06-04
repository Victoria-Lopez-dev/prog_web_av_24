import express from "express";
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
import "../db.js";
import { router as UsersRouter } from "./routes/usersRT.js";

app.listen(PORT, (err) => {
  err
    ? console.error(`Server not mounted: ${err.message}`)
    : console.log(`Server running: http://localhost:${PORT}`);
});

app.use("/users", UsersRouter);

// catch all
app.use((req, res, next) => {
  let error = new Error("Resource not found");
  error.status = 404;
  next(error);
});

//Error handler
app.use((error, req, res, next) => {
  if (!error.status) {
    error.status = 500;
    error.message = "Internal Server Error";
  }
  res
    .status(error.status)
    .json({ status: error.status, message: error.message });
});
