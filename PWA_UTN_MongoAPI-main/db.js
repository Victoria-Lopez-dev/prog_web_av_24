import { connect } from "mongoose";
const DB_URI = process.env.DB_URI;

connect(DB_URI, {})
  .then(() => console.log(`MongoDB connected`))
  .catch((err) => console.error(err.message));
