import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    eventDate: { type: Date, required: true },
    location: { type: String, required: true },
    participants: { type: Number, required: true, default: 0 },
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
    registrationLink: { type: String, required: true },
    category: { type: [String], required: true },
    eventDataLink: { type: String },
    image: { type: String },
    imageId: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Event", EventSchema);
