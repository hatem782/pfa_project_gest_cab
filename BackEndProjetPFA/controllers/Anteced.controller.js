const Antecendent = require("../models/Antecendent.module");
const DossierMedicalModel = require("../models/DossierMedical.module");

// Create a new antécédent
exports.createAntecendent = async (req, res) => {
  try {
    const { patient, title, description, date, images } = req.body;

    const dossier = await DossierMedicalModel.findOne({ patient });

    const newAntecendent = await Antecendent.create({
      dossier,
      title,
      description,
      date,
      images,
    });
    res.status(201).json(newAntecendent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create a new antécédent" });
  }
};

// Get all antécédents
exports.getAllAntecedents = async (req, res) => {
  try {
    const antecedents = await Antecendent.find()
      .populate("dossier")
      .populate("patient");
    res.json(antecedents);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch antécédents" });
  }
};

// Get a single antécédent by ID
exports.getAntecendentById = async (req, res) => {
  try {
    const { id } = req.params;
    const antecendent = await Antecendent.findById(id)
      .populate("dossier")
      .populate("patient");
    if (!antecendent) {
      return res.status(404).json({ error: "Antécédent not found" });
    }
    res.json(antecendent);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the antécédent" });
  }
};

// Update an antécédent
exports.updateAntecendent = async (req, res) => {
  try {
    const { id } = req.params;
    const { dossier, title, description, date, images } = req.body;
    const updatedAntecendent = await Antecendent.findByIdAndUpdate(
      id,
      { dossier, title, description, date, images },
      { new: true }
    );
    if (!updatedAntecendent) {
      return res.status(404).json({ error: "Antécédent not found" });
    }
    res.json(updatedAntecendent);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the antécédent" });
  }
};

// Delete an antécédent
exports.deleteAntecendent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAntecendent = await Antecendent.findByIdAndRemove(id);
    if (!deletedAntecendent) {
      return res.status(404).json({ error: "Antécédent not found" });
    }
    res.json(deletedAntecendent);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the antécédent" });
  }
};

// Get antécédents by dossier
exports.getAntecedentsByDossier = async (req, res) => {
  try {
    const { id } = req.params;
    const dossier = await DossierMedicalModel.findOne({ patient: id });
    const antecedents = await Antecendent.find({ dossier: dossier._id });
    res.json(antecedents);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch antécédents by dossier" });
  }
};
