const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema(
  {
    // ################ GENERAL FIELDS #######################
    cin: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: Date, required: true },
    birthPlace: { type: String, required: true },
    adress: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, unique: true },
    sex: {
      type: String,
      required: true,
      default: "MEN",
      enum: ["MEN", "WOMEN"],
    },
    role: {
      type: String,
      default: "PATIENT",
      enum: ["SUPERADMIN", "DENTISTE", "SECRETAIRE", "STAGIAIRE", "PATIENT"],
    },
    // ################ PAT FIELDS (fiche pat) #######################
    id_dossier: { type: String },
    profession: { type: String },
    code_apci: { type: String },
    etat_civil: {
      type: String,
      enum: ["Célibataire", "Marié", "Divorcé"],
    },
    code_cnam: { type: String },
    date_expire: { type: Date },
    // ################ MED + SEC #######################
    login: { type: String },
    password: { type: String },
    // ################ MED FIELDS #######################
    speciality: { type: String },
    // ################### ADMIN FIELDS ######################
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserModel);
