import User from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";

export const createUser = async (req, res) => {
  const user = await User.create(req.body);

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    user.avatar = response.secure_url;
    user.avatarPublicId = response.public_id;
    await user.save();
  }
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

export const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Invalid user ID" });
  }

  const updatedData = req.body;

  // Find and update the user
  const user = await User.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "User not found" });
  }

  // Debug: Check if file is received
  console.log(req.file);

  if (req.file) {
    try {
      // If the user has an existing avatar, delete it from Cloudinary
      if (user.avatarPublicId) {
        await cloudinary.v2.uploader.destroy(user.avatarPublicId);
      }

      // Upload the new file to Cloudinary
      const response = await cloudinary.v2.uploader.upload(req.file.path);
      console.log("Cloudinary response:", response); // Debugging the Cloudinary upload

      // Remove the file from the server after uploading to Cloudinary
      await fs.unlink(req.file.path);

      // Update the user with the new avatar URL and public ID
      user.avatar = response.secure_url;
      user.avatarPublicId = response.public_id;

      // Save the updated user document
      await user.save();

      // Debug: Confirm that the avatar has been updated
      console.log("User avatar updated:", user.avatar);
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error uploading avatar image",
      });
    }
  }

  // Send the updated user in the response
  res.status(StatusCodes.OK).json({ user: user });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Invalid user ID" });
  }

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "User not found" });
  }

  res.status(StatusCodes.OK).json({ message: "User deleted successfully" });
};
