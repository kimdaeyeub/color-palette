import { Schema, model, models } from "mongoose";

const PaletteSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  likes: {
    type: Number,
    default: 0,
  },
  colors: {
    type: [String],
    required: true,
  },
  grid: {
    type: Number,
    default: 3,
    required: true,
  },
  theme: {
    type: String || null,
  },
});

const Palette = models.Palette || model("Palette", PaletteSchema);

export default Palette;
