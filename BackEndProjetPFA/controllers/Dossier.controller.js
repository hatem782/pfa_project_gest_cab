const DossierMedical = require("../models/DossierMedical.module");

// Get a dossier médical by patient
exports.getDossierMedicalByPatient = async (req, res) => {
  try {
    const { patientId } = req.params;
    const dossierMedical = await DossierMedical.findOne({
      patient: patientId,
    }).populate("patient");
    if (!dossierMedical) {
      return res
        .status(404)
        .json({ error: "Dossier médical not found for the given patient" });
    }
    res.json(dossierMedical);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the dossier médical" });
  }
};

// Create a new dossier médical
exports.createDossierMedical = async (req, res) => {
  try {
    const { patient } = req.body;
    const newDossierMedical = await DossierMedical.create({ patient });
    res.status(201).json(newDossierMedical);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new dossier médical" });
  }
};

// Get all dossiers médicaux
exports.getAllDossiersMedicaux = async (req, res) => {
  try {
    const dossiersMedicaux = await DossierMedical.find().populate("patient");
    res.json(dossiersMedicaux);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch dossiers médicaux" });
  }
};

// Get a single dossier médical by ID
exports.getDossierMedicalById = async (req, res) => {
  try {
    const { id } = req.params;
    const dossierMedical = await DossierMedical.findById(id).populate(
      "patient"
    );
    if (!dossierMedical) {
      return res.status(404).json({ error: "Dossier médical not found" });
    }
    res.json(dossierMedical);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the dossier médical" });
  }
};

// Update a dossier médical
exports.updateDossierMedical = async (req, res) => {
  try {
    const { id } = req.params;
    const { patient } = req.body;
    const updatedDossierMedical = await DossierMedical.findByIdAndUpdate(
      id,
      { patient },
      { new: true }
    );
    if (!updatedDossierMedical) {
      return res.status(404).json({ error: "Dossier médical not found" });
    }
    res.json(updatedDossierMedical);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the dossier médical" });
  }
};

// Delete a dossier médical
exports.deleteDossierMedical = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDossierMedical = await DossierMedical.findByIdAndRemove(id);
    if (!deletedDossierMedical) {
      return res.status(404).json({ error: "Dossier médical not found" });
    }
    res.json(deletedDossierMedical);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the dossier médical" });
  }
};
