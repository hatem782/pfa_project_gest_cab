const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    Code_acte: { type: String, required: true },
    prix: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("acte", ActeSchema);
