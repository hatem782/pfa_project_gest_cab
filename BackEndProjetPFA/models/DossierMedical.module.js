const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DossierMedical = new Schema(
  {
    patient: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("dossierMedical", DossierMedical);
