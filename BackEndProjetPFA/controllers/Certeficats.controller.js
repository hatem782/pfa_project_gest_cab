const Certeficat = require("../models/Certeficat.module");
const ConsultationModel = require("../models/Consultation.module");
const DossierMedicalModel = require("../models/DossierMedical.module");

// Create a new certeficat
exports.createCerteficatDispense = async (req, res) => {
  try {
    const {
      consultation,
      description,
      fullname_med,
      fullname_pat,
      cin_pat,
      nais_date_pat,
      nais_place_pat,
      nb_jour_disp,
      date_deb_disp,
    } = req.body;
    const newCerteficat = await Certeficat.create({
      consultation,
      description,
      fullname_med,
      fullname_pat,
      cin_pat,
      nais_date_pat,
      nais_place_pat,
      type: "dispense",
      nb_jour_disp,
      date_deb_disp,
    });
    res.status(201).json(newCerteficat);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create a new certeficat" });
  }
};

exports.createCerteficatApti = async (req, res) => {
  try {
    const {
      consultation,
      description,
      fullname_med,
      fullname_pat,
      cin_pat,
      nais_date_pat,
      nais_place_pat,
      nb_jour_disp,
      date_deb_disp,
      etat_pat,
      prof_pat,
    } = req.body;
    const newCerteficat = await Certeficat.create({
      consultation,
      description,
      fullname_med,
      fullname_pat,
      cin_pat,
      nais_date_pat,
      nais_place_pat,
      nb_jour_disp,
      date_deb_disp,
      type: "apti",
      etat_pat,
      prof_pat,
    });
    res.status(201).json(newCerteficat);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create a new certeficat" });
  }
};

// Get all certeficats
exports.getAllCerteficats = async (req, res) => {
  try {
    const certeficats = await Certeficat.find().populate("consultation");
    res.json(certeficats);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch certeficats" });
  }
};

// Get all certeficats
exports.getAllCerteficatsByConsult = async (req, res) => {
  try {
    const { id } = req.params;
    const certeficats = await Certeficat.find({ consultation: id }).populate(
      "consultation"
    );
    res.json(certeficats);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch certeficats" });
  }
};

// Get all ordenance
exports.getAllCerteficatsByPatient = async (req, res) => {
  try {
    const { id } = req.params;
    let data = [];
    const dossier = await DossierMedicalModel.findOne({ patient: id });
    const consultations = await ConsultationModel.find({
      dossier: dossier._id,
    });
    for (let i = 0; i < consultations.length; i++) {
      const consultation = consultations[i];
      const certifs = await Certeficat.find({
        consultation: consultation._id,
      }).populate("consultation");
      data = [...data, ...certifs];
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch certifs" });
  }
};

// Get a single certeficat by ID
exports.getCerteficatById = async (req, res) => {
  try {
    const { id } = req.params;
    const certeficat = await Certeficat.findById(id).populate("consultation");
    if (!certeficat) {
      return res.status(404).json({ error: "Certeficat not found" });
    }
    res.json(certeficat);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the certeficat" });
  }
};

// Update a certeficat
exports.updateCerteficatDispense = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      consultation,
      description,
      fullname_med,
      fullname_pat,
      cin_pat,
      nais_date_pat,
      nais_place_pat,
      nb_jour_disp,
      date_deb_disp,
    } = req.body;
    const updatedCerteficat = await Certeficat.findByIdAndUpdate(
      id,
      {
        consultation,
        description,
        fullname_med,
        fullname_pat,
        cin_pat,
        nais_date_pat,
        nais_place_pat,
        nb_jour_disp,
        date_deb_disp,
      },
      { new: true }
    );
    if (!updatedCerteficat) {
      return res.status(404).json({ error: "Certeficat not found" });
    }
    res.json(updatedCerteficat);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update the certeficat" });
  }
};

// Update a certeficat
exports.updateCerteficatApti = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      consultation,
      description,
      fullname_med,
      fullname_pat,
      cin_pat,
      nais_date_pat,
      nais_place_pat,
      nb_jour_disp,
      date_deb_disp,
      etat_pat,
      prof_pat,
    } = req.body;
    const updatedCerteficat = await Certeficat.findByIdAndUpdate(
      id,
      {
        consultation,
        description,
        fullname_med,
        fullname_pat,
        cin_pat,
        nais_date_pat,
        nais_place_pat,
        nb_jour_disp,
        date_deb_disp,
        etat_pat,
        prof_pat,
      },
      { new: true }
    );
    if (!updatedCerteficat) {
      return res.status(404).json({ error: "Certeficat not found" });
    }
    res.json(updatedCerteficat);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update the certeficat" });
  }
};

exports.deleteCerteficat = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCerteficat = await Certeficat.findByIdAndRemove(id);
    if (!deletedCerteficat) {
      return res.status(404).json({ error: "Certeficat not found" });
    }
    res.json(deletedCerteficat);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the certeficat" });
  }
};
