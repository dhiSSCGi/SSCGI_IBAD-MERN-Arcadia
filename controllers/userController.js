import User from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";

export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(StatusCodes.OK).json({ users });
};

export const getAllOrganizers = async (req, res) => {
  const users = await User.find({ role: "organizer" });
  res.status(StatusCodes.OK).json({ users });
};

export const getCurrentUser = async (req, res) => {
  console.log(req.body);

  res.status(StatusCodes.OK).json({ token });
};
