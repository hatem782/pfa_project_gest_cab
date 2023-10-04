const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AntecendentSchema = new Schema(
  {
    dossier: {
      type: Schema.Types.ObjectId,
      ref: "DossierMedical",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    images: [{ type: String, required: true }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("antecendent", AntecendentSchema);
