import { User } from "../model/user.js";

//register new user
export const createUser = (req, res, next) => {
  const { fullName, userName, email, password } = req.body;
  const newUser = new User({ fullName, userName, email, password });
  newUser
    .save()
    .then((info) => {
      console.log(info);
      res.status(200).json({ message: "New user successfully created." });
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
};

export const getAllUsers = async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({ users });
};
export const throwError = (req, res, next) => {
  let error = new Error();
  error.status = 403;
  error.message = "Vengo de Jamaica";
  return next(error);
};
