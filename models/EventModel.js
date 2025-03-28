import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    eventDate: { type: Date, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    registrationStart: { type: Date, required: true },
    registrationEnd: { type: Date, required: true },
    category: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Event", EventSchema);
