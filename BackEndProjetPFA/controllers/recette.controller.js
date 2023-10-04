const Recette = require("../models/Recette.module");
const ConsultationModel = require("../models/Consultation.module");
const DossierMedicalModel = require("../models/DossierMedical.module");

const getAllRecettes = async (req, res) => {
  try {
    const { id } = req.params;
    let data = [];
    const dossier = await DossierMedicalModel.findOne({ patient: id });
    const consultations = await ConsultationModel.find({
      dossier: dossier._id,
    });
    for (let i = 0; i < consultations.length; i++) {
      const consultation = consultations[i];
      const recet = await Recette.find({
        consultation: consultation._id,
      }).populate("consultation");
      data = [...data, ...recet];
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllAll = async (req, res) => {
  try {
    const recettes = await Recette.find({ ...req.query });
    res.json(recettes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getRecetteById = async (req, res) => {
  try {
    const recette = await Recette.findById(req.params.id);
    if (recette === null) {
      return res.status(404).json({ message: "Recette introuvable" });
    }
    res.json(recette);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createRecette = async (req, res) => {
  const recette = new Recette({ ...req.body });

  try {
    const newRecette = await recette.save();
    res.status(201).json(newRecette);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateRecetteById = async (req, res) => {
  try {
    const recette = await Recette.findById(req.params.id);
    if (recette == null) {
      return res.status(404).json({ message: "Recette introuvable" });
    }

    const updatedRecette = await Recette.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.json(updatedRecette);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteRecetteById = async (req, res) => {
  try {
    const result = await Recette.deleteOne({ _id: req.params.id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Recette introuvable" });
    }

    res.json({ message: "Recette supprimée avec succès !" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllRecettes,
  getRecetteById,
  getAllAll,
  createRecette,
  updateRecetteById,
  deleteRecetteById,
};
