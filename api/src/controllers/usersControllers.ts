import { Request, Response } from "express";
import { User } from "../models/user.schema";

const postUsers = async (req: Request, res: Response) => {
  const { email, userName, password } = req.body;
  try {
    const newUser = await User.create({
      email,
      userName,
      password,
    });

    return res.send({
      status: "Pass",
      msg: "Usuario registrado correctamente",
      payload: newUser,
    });
  } catch (error) {
    return res.send({ status: "Error", msg: error });
  }
};

const getUsers = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.send({
        status: "Error",
        msg: "Email y/o contraseña incorrectos",
      });
    }

    return res.send({
      status: "Pass",
      msg: "Inicio de sesion satifastorio",
      payload: user,
    });
  } catch (error) {
    return res.send({ status: "Error", msg: error });
  }
};

const putUsers = async (req: Request, res: Response) => {
  try {
    return res.send({ status: "Pass", msg: "Users put" });
  } catch (error) {
    return res.send({ status: "Error", msg: error });
  }
};

const deleteUsers = async (req: Request, res: Response) => {
  try {
    return res.send({ status: "Pass", msg: "Users delete" });
  } catch (error) {
    return res.send({ status: "Error", msg: error });
  }
};

export { postUsers, getUsers, putUsers, deleteUsers };
