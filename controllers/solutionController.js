import Solution from "../models/SolutionModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";
import XLSX from "xlsx";
export const createSolution = async (req, res) => {
  try {
    const solution = await Solution.create(req.body);

    if (req.file) {
      const response = await cloudinary.v2.uploader.upload(req.file.path);
      await fs.unlink(req.file.path);
      solution.image = response.secure_url;
      solution.imageId = response.public_id;
      await solution.save();
    }

    res.status(StatusCodes.CREATED).json({ solution });
  } catch (error) {
    console.error("Error creating solution:", error);
    res.status(500).json({ message: "Error creating solution" });
  }
};

export const getAllSolutions = async (req, res) => {
  const solutions = await Solution.find();
  res.status(StatusCodes.OK).json({ solutions });
};

export const updateSolution = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const solution = await Solution.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!solution) {
      return res.status(404).json({ message: "Solution not found" });
    }

    if (req.file) {
      if (solution.imageId) {
        await cloudinary.v2.uploader.destroy(solution.imageId);
      }
      const response = await cloudinary.v2.uploader.upload(req.file.path);
      await fs.unlink(req.file.path);
      solution.image = response.secure_url;
      solution.imageId = response.public_id;
      await solution.save();
    }

    res.status(StatusCodes.OK).json({ solution });
  } catch (error) {
    console.error("Error updating solution:", error);
    res.status(500).json({ message: "Error updating solution" });
  }
};

export const deleteSolution = async (req, res) => {
  try {
    const { id } = req.params;

    const solution = await Solution.findByIdAndDelete(id);

    if (!solution) {
      return res.status(404).json({ message: "Solution not found" });
    }

    if (solution.imageId) {
      await cloudinary.v2.uploader.destroy(solution.imageId);
    }

    res
      .status(StatusCodes.OK)
      .json({ message: "Solution deleted successfully" });
  } catch (error) {
    console.error("Error deleting solution:", error);
    res.status(500).json({ message: "Error deleting solution" });
  }
};
