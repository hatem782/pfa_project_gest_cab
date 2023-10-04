const Ordenance = require("../models/Ordenance.module");
const ConsultationModel = require("../models/Consultation.module");
const DossierMedicalModel = require("../models/DossierMedical.module");

// Create a new ordenance
exports.createOrdenance = async (req, res) => {
  try {
    const {
      consultation,
      date,
      fullname_med,
      quality,
      speciality,
      fullname_pat,
      description,
      medic,
    } = req.body;
    const newOrdenance = await Ordenance.create({
      consultation,
      date,
      fullname_med,
      quality,
      speciality,
      fullname_pat,
      description,
      medic,
    });
    res.status(201).json(newOrdenance);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new ordenance" });
  }
};

// Get all ordenance
exports.getAllOrdenances = async (req, res) => {
  try {
    const ordenances = await Ordenance.find({ ...req.query }).populate(
      "consultation"
    );
    res.json(ordenances);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch ordenance" });
  }
};

// Get all ordenance
exports.getAllOrdenancesByPatient = async (req, res) => {
  try {
    const { id } = req.params;
    let data = [];
    const dossier = await DossierMedicalModel.findOne({ patient: id });
    const consultations = await ConsultationModel.find({
      dossier: dossier._id,
    });
    for (let i = 0; i < consultations.length; i++) {
      const consultation = consultations[i];
      const ordenances = await Ordenance.find({
        consultation: consultation._id,
      }).populate("consultation");
      data = [...data, ...ordenances];
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch ordenance" });
  }
};

// Get a single ordenance by ID
exports.getOrdenanceById = async (req, res) => {
  try {
    const { id } = req.params;
    const ordenance = await Ordenance.findById(id).populate("consultation");
    if (!ordenance) {
      return res.status(404).json({ error: "Ordenance not found" });
    }
    res.json(ordenance);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the ordenance" });
  }
};

// Update an ordenance
exports.updateOrdenance = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      consultation,
      date,
      fullname_med,
      quality,
      speciality,
      fullname_pat,
      description,
      medic,
    } = req.body;
    const updatedOrdenance = await Ordenance.findByIdAndUpdate(
      id,
      {
        consultation,
        date,
        fullname_med,
        quality,
        speciality,
        fullname_pat,
        description,
        medic,
      },
      { new: true }
    );
    if (!updatedOrdenance) {
      return res.status(404).json({ error: "Ordenance not found" });
    }
    res.json(updatedOrdenance);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the ordenance" });
  }
};

// Delete an ordenance
exports.deleteOrdenance = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrdenance = await Ordenance.findByIdAndRemove(id);
    if (!deletedOrdenance) {
      return res.status(404).json({ error: "Ordenance not found" });
    }
    res.json(deletedOrdenance);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the ordenance" });
  }
};
