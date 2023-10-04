const Consultation = require("../models/Consultation.module");

// Create a new consultation
exports.createConsultation = async (req, res) => {
  try {
    const { dossier, jour, temp_deb, duree, type, description, images, actes } =
      req.body;
    const newConsultation = await Consultation.create({
      dossier,
      jour,
      temp_deb,
      duree,
      type,
      description,
      images,
      actes,
    });
    res.status(201).json(newConsultation);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create a new consultation" });
  }
};

// Get all consultations
exports.getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().populate({
      path: "dossier",
      populate: {
        path: "patient",
        model: "User",
      },
    });
    res.json(consultations);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch consultations" });
  }
};

// Get a single consultation by ID
exports.getConsultationById = async (req, res) => {
  try {
    const { id } = req.params;
    const consultation = await Consultation.findById(id).populate({
      path: "dossier",
      populate: {
        path: "patient",
        model: "User",
      },
    });
    if (!consultation) {
      return res.status(404).json({ error: "Consultation not found" });
    }
    res.json(consultation);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the consultation" });
  }
};

// Update a consultation
exports.updateConsultation = async (req, res) => {
  try {
    const { id } = req.params;
    const { dossier, jour, temp_deb, duree, type, description, images, actes } =
      req.body;
    const updatedConsultation = await Consultation.findByIdAndUpdate(
      id,
      {
        dossier,
        jour,
        temp_deb,
        duree,
        type,
        description,
        images,
        actes,
      },
      { new: true }
    );
    if (!updatedConsultation) {
      return res.status(404).json({ error: "Consultation not found" });
    }
    res.json(updatedConsultation);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the consultation" });
  }
};

// Delete a consultation
exports.deleteConsultation = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedConsultation = await Consultation.findByIdAndRemove(id);
    if (!deletedConsultation) {
      return res.status(404).json({ error: "Consultation not found" });
    }
    res.json(deletedConsultation);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the consultation" });
  }
};

// Get consultations by dossier
exports.getConsultationsByDossier = async (req, res) => {
  try {
    const { dossierId } = req.params;
    const consultations = await Consultation.find({
      dossier: dossierId,
    }).populate({
      path: "dossier",
      populate: {
        path: "patient",
        model: "User",
      },
    });
    res.json(consultations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch consultations by dossier" });
  }
};
