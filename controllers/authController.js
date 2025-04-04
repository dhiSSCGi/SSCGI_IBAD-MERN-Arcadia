import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { hashPassword, comparePassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "organizer";
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "User Created" });
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    console.log("User found:", user);

    if (!user) {
      console.log("No user found with this email");
      throw new UnauthenticatedError("Invalid email or password");
    }

    const isValidUser = await comparePassword(password, user.password);

    if (!isValidUser) {
      console.log("Password mismatch");
      throw new UnauthenticatedError("Invalid email or password");
    }

    const token = createJWT({ userId: user._id, role: user.role });
    const oneDay = 1000 * 60 * 60 * 24;

    user.loginToken = token;
    await user.save();

    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === "development",
    });

    res.status(200).json({ msg: "Login successful", token, user });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res) => {
  if (req.user && req.user.userId) {
    const user = await User.findById(req.user.userId);
    if (user) {
      user.loginToken = null;
      await user.save();
    }
  }

  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};

export const getCurrentUser = async (req, res) => {
  if (!req.user || !req.user.userId) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Unauthorized access" });
  }

  const user = await User.findOne({ _id: req.user.userId }).select("-password");
  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: "User not found" });
  }

  res.status(StatusCodes.OK).json({ user });
};
