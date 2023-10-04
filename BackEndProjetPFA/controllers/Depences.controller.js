const Depense = require("../models/Depense.module");

const getAllDepenses = async (req, res) => {
  try {
    const depenses = await Depense.find();
    res.json(depenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createDepense = async (req, res) => {
  try {
    const { date, montant, type, pieceJustificative } = req.body;

    const depense = new Depense({
      date,
      montant,
      type,
      pieceJustificative,
    });

    await depense.save();
    res.status(201).json(depense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteDepense = async (req, res) => {
  try {
    const depense = await Depense.findById(req.params.id);

    if (!depense) {
      return res.status(404).json({ message: "Dépense introuvable" });
    }

    await depense.remove();
    res.json({ message: "Dépense supprimée avec succès" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateDepense = async (req, res) => {
  try {
    const { date, montant, type, pieceJustificative } = req.body;
    const depense = await Depense.findById(req.params.id);

    if (!depense) {
      return res.status(404).json({ message: "Dépense introuvable" });
    }

    depense.date = date;
    depense.montant = montant;
    depense.type = type;
    depense.pieceJustificative = pieceJustificative;

    await depense.save();
    res.json(depense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllDepenses,
  createDepense,
  deleteDepense,
  updateDepense,
};
