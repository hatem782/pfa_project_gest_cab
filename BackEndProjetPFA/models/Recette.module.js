const mongoose = require("mongoose");

const RecetteSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  tarif_consultation: {
    type: Number,
    required: true,
  },
  modePaiement: {
    type: String,
    required: true,
  },
  consultation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "consultation",
    required: true,
  },
  nom_prenom_patient: { type: String, required: true },
  images: [{ type: String, required: false }],

  estPaye: {
    type: Boolean,
    default: true,
  },
  dateEcheance: { type: Date },
});

const Recette = mongoose.model("Recette", RecetteSchema);

module.exports = Recette;
