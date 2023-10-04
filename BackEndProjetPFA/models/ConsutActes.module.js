const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConsultActesSchema = new Schema(
  {
    consultation: {
      type: Schema.Types.ObjectId,
      ref: "consultation",
      required: true,
    },
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

module.exports = mongoose.model("consult_actes", ConsultActesSchema);
