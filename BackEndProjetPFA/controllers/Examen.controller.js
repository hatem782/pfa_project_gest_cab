const Examen = require("../models/Exams.module");

// Create a new examen
exports.createExamenSimple = async (req, res) => {
  try {
    const {
      consultation,
      description,

      taille_pat,
      poid_pat,
      tens_pat,
      perim_pat,
      temp_pat,
    } = req.body;
    const newExamen = await Examen.create({
      consultation,
      description,
      type: "simple",
      taille_pat,
      poid_pat,
      tens_pat,
      perim_pat,
      temp_pat,
    });
    res.status(201).json(newExamen);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new examen" });
  }
};

// Create a new examen
exports.createExamenComplet = async (req, res) => {
  try {
    const {
      consultation,
      description,
      taille_pat,
      poid_pat,
      tens_pat,
      perim_pat,
      temp_pat,
      images,
      files,
    } = req.body;
    const newExamen = await Examen.create({
      consultation,
      description,
      type: "complet",
      taille_pat,
      poid_pat,
      tens_pat,
      perim_pat,
      temp_pat,
      images,
      files,
    });
    res.status(201).json(newExamen);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new examen" });
  }
};

// Get all examens
exports.getAllExamens = async (req, res) => {
  try {
    const examens = await Examen.find().populate("consultation");
    res.json(examens);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch examens" });
  }
};

// Get all examens
exports.getAllExamensByConsult = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const examens = await Examen.find({ consultation: id }).populate(
      "consultation"
    );
    console.log(examens);
    res.json(examens);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch examens" });
  }
};

// Get a single examen by ID
exports.getExamenById = async (req, res) => {
  try {
    const { id } = req.params;
    const examen = await Examen.findById(id).populate("consultation");
    if (!examen) {
      return res.status(404).json({ error: "Examen not found" });
    }
    res.json(examen);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the examen" });
  }
};

// Update an examen
exports.updateExamenComplet = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      consultation,
      description,
      taille_pat,
      poid_pat,
      tens_pat,
      perim_pat,
      temp_pat,
      images,
      files,
    } = req.body;
    const updatedExamen = await Examen.findByIdAndUpdate(
      id,
      {
        consultation,
        description,
        taille_pat,
        poid_pat,
        tens_pat,
        perim_pat,
        temp_pat,
        images,
        files,
      },
      { new: true }
    );
    if (!updatedExamen) {
      return res.status(404).json({ error: "Examen not found" });
    }
    res.json(updatedExamen);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the examen" });
  }
};

// Update an examen
exports.updateExamenSimple = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      consultation,
      description,
      taille_pat,
      poid_pat,
      tens_pat,
      perim_pat,
      temp_pat,
    } = req.body;
    const updatedExamen = await Examen.findByIdAndUpdate(
      id,
      {
        consultation,
        description,
        taille_pat,
        poid_pat,
        tens_pat,
        perim_pat,
        temp_pat,
      },
      { new: true }
    );
    if (!updatedExamen) {
      return res.status(404).json({ error: "Examen not found" });
    }
    res.json(updatedExamen);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the examen" });
  }
};

// Delete an examen
exports.deleteExamen = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExamen = await Examen.findByIdAndRemove(id);
    if (!deletedExamen) {
      return res.status(404).json({ error: "Examen not found" });
    }
    res.json(deletedExamen);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the examen" });
  }
};
