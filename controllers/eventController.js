import Event from "../models/EventModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";

export const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.status(StatusCodes.CREATED).json({ event });
};

export const getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.status(StatusCodes.OK).json({ events });
};
