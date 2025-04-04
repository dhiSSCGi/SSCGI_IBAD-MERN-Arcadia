import Event from "../models/EventModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";

export const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);

    await fs.unlink(req.file.path);
    console.log(response.secure_url);
    event.image = response.secure_url;
    event.imageId = response.public_id;
    event.save();
  }

  res.status(StatusCodes.CREATED).json({ event });
};

export const getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.status(StatusCodes.OK).json({ events });
};
