const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConsultationSchema = new Schema(
  {
    dossier: {
      type: Schema.Types.ObjectId,
      ref: "dossierMedical",
      required: true,
    },
    jour: { type: Date, required: true },
    temp_deb: { type: String, required: true },
    duree: { type: Number, required: true }, // in minutes
    type: {
      type: String,
      required: true,
      default: "Consultation de routine",
      enum: [
        "Consultation de routine",
        "Consultation d'urgence",
        "Consultation de diagnostic",
        "Consultation d'orthodontie",
        "Consultation de chirurgie dentaire",
        "Consultation de parodontie",
      ],
    },
    description: { type: String, required: false },
    images: [{ type: String, required: false }],
    actes: [
      {
        type: Schema.Types.ObjectId,
        ref: "acte",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("consultation", ConsultationSchema);
