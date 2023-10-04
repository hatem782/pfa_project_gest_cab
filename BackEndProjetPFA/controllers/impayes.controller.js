const Impaye = require('../models/Impayes.module');

const getAllImpayes = async (req, res) => {
  try {
    const impayes = await Impaye.find();
    res.json(impayes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createImpaye = async (req, res) => {
  try {
    const { patient, montant, dateEcheance } = req.body;

    const impaye = new Impaye({
      patient,
      montant,
      dateEcheance,
    });

    await impaye.save();
    res.status(201).json(impaye);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateImpayeById = async (req, res) => {
  try {
    const { montant, dateEcheance, estPaye } = req.body;

    const impaye = await Impaye.findById(req.params.id);
    if (!impaye) {
      return res.status(404).json({ message: 'Impayé non trouvé' });
    }

    impaye.montant = montant || impaye.montant;
    impaye.dateEcheance = dateEcheance || impaye.dateEcheance;
    impaye.estPaye = estPaye || impaye.estPaye;

    await impaye.save();
    res.json(impaye);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteImpayeById = async (req, res) => {
  try {
    const impaye = await Impaye.findByIdAndDelete(req.params.id);
    if (!impaye) {
      return res.status(404).json({ message: 'Impayé non trouvé' });
    }
    res.json({ message: 'Impayé supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllImpayes,
  createImpaye,
  updateImpayeById,
  deleteImpayeById,
};
