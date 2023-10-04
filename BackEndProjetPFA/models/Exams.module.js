const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Examen = new Schema(
  {
    consultation: {
      type: Schema.Types.ObjectId,
      ref: "consultation",
      required: true,
    },
    description: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: ["simple", "complet"],
      default: "simple",
    },
    // simple + complet
    taille_pat: { type: Number, required: false }, // in cm
    poid_pat: { type: Number, required: false }, // in kg
    tens_pat: { type: Number, required: false },
    perim_pat: { type: Number, required: false },
    temp_pat: { type: Number, required: false },
    // complet
    images: [{ type: String, required: false }],
    files: [{ type: String, required: false }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("examen", Examen);
