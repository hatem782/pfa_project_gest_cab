const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointementSchema = new Schema(
  {
    // ################### Event Fields ######################
    title: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    backgroundColor: { type: String, required: true },
    borderColor: { type: String, required: true },
    textColor: { type: String, required: true },
    editable: { type: Boolean, default: false },
    presence: { type: Boolean, default: false },
    appoint_type: {
      type: String,
      default: "Rdv",
      enum: ["Rdv", "vacances"],
    },
    // ################### User Fields ######################
    cin: { type: Number, required: false },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    phone: { type: String, required: false },
    description: { type: String, required: false },
    /*id_dossier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "dossier",
    },*/
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("appointement", AppointementSchema);
