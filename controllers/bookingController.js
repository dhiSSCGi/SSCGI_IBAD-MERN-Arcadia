import Booking from "../models/BookingModel.js";
import User from "../models/UserModel.js";
import { hashPassword, comparePassword } from "../utils/passwordUtils.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";

export const createBooking = async (req, res) => {
  try {
    const isFirstAccount = (await User.countDocuments()) === 0;
    req.body.role = isFirstAccount ? "admin" : "user";
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;
    const user = await User.create(req.body);

    const booking = await Booking.create({
      userId: user._id,
      eventId: req.body.eventId,
      bookingDate: day().toISOString(),
    });

    res.status(StatusCodes.CREATED).json({ msg: "User and Booking Created" });
  } catch (error) {
    console.error("Error creating booking:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Error creating booking" });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("userId", "firstName lastName email")
      .populate("eventId", "title location eventDate capacity type");

    res.status(StatusCodes.OK).json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong" });
  }
};
