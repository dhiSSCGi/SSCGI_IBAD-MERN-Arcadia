import Event from "../models/EventModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";
import XLSX from "xlsx";
export const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      eventDate,
      location,
      capacity,
      price,
      type,
      organizer,
      registrationStart,
      registrationEnd,
      registrationLink,
      eventDataLink,
      categories,
    } = req.body;

    const parsedCategories = JSON.parse(categories);

    const event = await Event.create({
      title,
      description,
      eventDate,
      location,
      capacity,
      price,
      type,
      organizer,
      registrationStart,
      registrationEnd,
      registrationLink,
      eventDataLink,
      category: parsedCategories,
    });

    if (req.file) {
      const response = await cloudinary.v2.uploader.upload(req.file.path);
      await fs.unlink(req.file.path);
      event.image = response.secure_url;
      event.imageId = response.public_id;
      await event.save();
    }

    res.status(StatusCodes.CREATED).json({ event });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Error creating event" });
  }
};

export const getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.status(StatusCodes.OK).json({ events });
};

export const uploadXLSXorCSV = async (req, res, next) => {
  try {
    const event = await Event.findById(req.body.eventId);
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    let jsonData = [];

    if (!req.file || !req.file.path) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded or file path is undefined",
      });
    }

    let path = req.file.path;
    let workbook;

    if (path.endsWith(".csv")) {
      const fileContent = await fs.readFile(path, "utf-8");
      workbook = XLSX.read(fileContent, { type: "string" });
    } else {
      workbook = XLSX.readFile(path);
    }

    var sheet_name_list = workbook.SheetNames;
    jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    if (jsonData.length === 0) {
      return res.status(400).json({
        success: false,
        message: "The file has no data",
      });
    }
    event.participants = jsonData.length;
    await event.save();

    await fs.unlink(path);

    return res.status(201).json({
      success: true,
      message: jsonData.length + " rows added to the database",
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ success: false, message: err.message });
  }
};
export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const event = await Event.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (req.file) {
      if (event.imageId) {
        await cloudinary.v2.uploader.destroy(event.imageId);
      }
      const response = await cloudinary.v2.uploader.upload(req.file.path);
      await fs.unlink(req.file.path);
      event.image = response.secure_url;
      event.imageId = response.public_id;
      await event.save();
    }

    res.status(StatusCodes.OK).json({ event });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ message: "Error updating event" });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.imageId) {
      await cloudinary.v2.uploader.destroy(event.imageId);
    }

    res.status(StatusCodes.OK).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Error deleting event" });
  }
};
