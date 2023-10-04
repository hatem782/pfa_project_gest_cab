const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdenanceSchema = new Schema(
  {
    consultation: {
      type: Schema.Types.ObjectId,
      ref: "consultation",
      required: true,
    },
    date: { type: Date, required: true },
    fullname_med: { type: String, required: true },
    quality: { type: String, required: true },
    speciality: { type: String, required: true },
    fullname_pat: { type: String, required: true },
    description: { type: String, required: true },

    medic: [
      {
        title: { type: String, required: true },
        nb_in_day: { type: Number, required: true },
        nb_use_days: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ordenance", OrdenanceSchema);
