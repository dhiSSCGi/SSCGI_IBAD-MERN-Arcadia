import mongoose from "mongoose";

const SolutionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },

    image: { type: String },
    imageId: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Solution", SolutionSchema);
