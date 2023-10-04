const Actes = require("../models/Acte.module");
const ConsultActes = require("../models/ConsutActes.module");

// Create a new acte
exports.createActes = async (req, res) => {
  try {
    const { title, description, Code_acte, prix } = req.body;
    const newActes = await Actes.create({
      title,
      description,
      Code_acte,
      prix,
    });
    res.status(201).json(newActes);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new acte" });
  }
};

// Create a new acte
exports.CreateConsultActes = async (req, res) => {
  try {
    const { consultation, actes } = req.body;
    const newActes = await ConsultActes.create({
      consultation,
      actes,
    });
    res.status(201).json(newActes);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new acte" });
  }
};
// Get all actes
exports.getAllActes = async (req, res) => {
  try {
    const actes = await Actes.find();
    res.json(actes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch actes" });
  }
};

// Get a single acte by ID
exports.getActesById = async (req, res) => {
  try {
    const { id } = req.params;
    const Actes = await Actes.findById(id);
    if (!Actes) {
      return res.status(404).json({ error: "acte not found" });
    }
    res.json(Actes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the actes" });
  }
};

// Get a single acte by ID
exports.getActesByConsult = async (req, res) => {
  try {
    const { id } = req.params;
    const list_ids = await ConsultActes.find({ consultation: id });
    let data = [];
    for (let i = 0; i < list_ids.length; i++) {
      const one_id = list_ids[i];
      const act = await Actes.findById(one_id);
      data.push(act);
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the actes" });
  }
};

// Update an acte
exports.updateActes = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, Code_acte, prix } = req.body;
    const updatedActes = await Actes.findByIdAndUpdate(
      id,
      { title, description, Code_acte, prix },
      { new: true }
    );
    if (!updatedActes) {
      return res.status(404).json({ error: "acte not found" });
    }
    res.json(updatedActes);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the acte" });
  }
};

// Update an acte
exports.updateConsultActes = async (req, res) => {
  try {
    const { id } = req.params;
    const { consultation, actes } = req.body;
    const updatedActes = await ConsultActes.findByIdAndUpdate(
      id,
      { consultation, actes },
      { new: true }
    );
    if (!updatedActes) {
      return res.status(404).json({ error: "acte not found" });
    }
    res.json(updatedActes);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the acte" });
  }
};

// Delete an acte
exports.deleteActes = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedActes = await Actes.findByIdAndRemove(id);
    if (!deletedActes) {
      return res.status(404).json({ error: "acte not found" });
    }
    res.json(deletedActes);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the acte" });
  }
};
