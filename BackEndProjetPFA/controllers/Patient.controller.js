const UserModel = require("../models/user.module");
const DossierModel = require("../models/DossierMedical.module");

const CreatePat = async (req, res) => {
  try {
    const { cin } = req.body;
    const exisPat = await UserModel.findOne({
      $or: [{ cin }],
    });
    if (exisPat)
      return res.status(409).json({
        Message: "Pat already exists with that cin",
        Success: false,
      });

    const newPat = new UserModel({
      ...req.body,
      role: "PATIENT",
    });

    const dossier = new DossierModel({ patient: newPat._id });
    await dossier.save();

    newPat.id_dossier = dossier._id;

    const createdPat = await newPat.save();

    return res.status(200).json({
      Message: "PATIENT created suucessfully",
      Success: true,
      data: createdPat,
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const GetAllPats = async (req, res) => {
  try {
    const pats = await UserModel.find({ role: "PATIENT", ...req.query });
    return res.status(200).json({
      Message: `all PATIENTS`,
      Success: true,
      data: pats,
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const GetOnePat = async (req, res) => {
  try {
    const { pat_id } = req.params;
    const pat = await UserModel.findById(pat_id);
    return res.status(200).json({
      Message: `One Pat`,
      Success: true,
      data: pat,
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const UpdatePat = async (req, res) => {
  try {
    const { pat_id } = req.params;
    const updatedPat = await UserModel.findOneAndUpdate(
      { _id: pat_id },
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!updatedPat) {
      return res.status(400).json({
        Message: "Failed to update",
        Success: false,
      });
    }
    return res
      .status(200)
      .json({ Message: "Pat updated Successfully", data: updatedPat });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const DeletePat = async (req, res) => {
  try {
    const { pat_id } = req.params;
    const removedPat = await UserModel.deleteOne({ _id: pat_id });
    if (!removedPat) {
      return res.status(400).json({ Message: "Failed to delete pat" });
    }
    return res.status(200).json({ Message: "pat deleted successfully" });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

module.exports = {
  CreatePat,
  GetAllPats,
  GetOnePat,
  UpdatePat,
  DeletePat,
};
