const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CnamSchema = new mongoose.Schema({
  consultation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "consultation",
    required: true,
  },
  patient: { type: Schema.Types.ObjectId, ref: "User", required: true },
  actes: [
    {
      type: Schema.Types.ObjectId,
      ref: "acte",
      required: true,
    },
  ],
  tarif_consultation: {
    type: Number,
    required: true,
  },
  montant_cnam: {
    type: Number,
    required: true,
  },

  code_cnam: { type: String, required: false },
  description: { type: String, required: false },
  sended: { type: Boolean, default: false, required: false },

  date: {
    type: Date,
    required: true,
  },
});

const Cnam = mongoose.model("cnam", CnamSchema);

module.exports = Cnam;
