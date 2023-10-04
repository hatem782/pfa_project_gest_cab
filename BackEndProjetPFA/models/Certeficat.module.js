const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const certeficat = new Schema(
  {
    consultation: {
      type: Schema.Types.ObjectId,
      ref: "consultation",
      required: true,
    },

    description: { type: String, required: true },
    fullname_med: { type: String, required: true },
    fullname_pat: { type: String, required: true },
    cin_pat: { type: String, required: true },
    nais_date_pat: { type: Date, required: true },
    nais_place_pat: { type: String, required: true },

    type: {
      type: String,
      required: true,
      enum: ["dispense", "apti"],
      default: "dispense",
    },
    // dispense
    nb_jour_disp: { type: Number, required: false },
    date_deb_disp: { type: Date, required: false },

    // apti
    etat_pat: { type: String, required: false },
    prof_pat: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("certeficat", certeficat);
