const Cnam = require("../models/Cnam.module");
const ConsultationModel = require("../models/Consultation.module");
const DossierMedicalModel = require("../models/DossierMedical.module");
const mail = require("../mails/Mail_Sender");

const getAllCnams = async (req, res) => {
  try {
    const { id } = req.params;
    let data = [];
    const dossier = await DossierMedicalModel.findOne({ patient: id });
    const consultations = await ConsultationModel.find({
      dossier: dossier._id,
    });
    for (let i = 0; i < consultations.length; i++) {
      const consultation = consultations[i];
      const recet = await Cnam.find({
        consultation: consultation._id,
      })
        .populate("consultation")
        .populate("patient")
        .populate("actes");
      data = [...data, ...recet];
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllAll = async (req, res) => {
  try {
    const Cnams = await Cnam.find({ ...req.query })
      .populate("consultation")
      .populate("patient")
      .populate("actes");
    res.json(Cnams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const SendMailToCnam = async (req, res) => {
  try {
    const cnam = await Cnam.findById(req.params.id)
      .populate("consultation")
      .populate("patient")
      .populate("actes");
    if (cnam === null) {
      return res.status(404).json({ message: "Cnam introuvable" });
    }
    const {
      patient,
      actes,
      tarif_consultation,
      montant_cnam,
      code_cnam,
      date,
    } = cnam;
    const html = `
    Le patient ${patient.firstName} ${
      patient.lastName
    },son code cnam est ${code_cnam} et de cin ${patient.cin} 
    a effectué un traitement le ${date} avec un tarif de ${tarif_consultation} et tarif cnam ${montant_cnam}.
    les actes effectuées sont : ${actes
      .map((act) => `${act.title}-${act.prix}`)
      .join(", ")}

    Patient mail : ${patient.email}
    Patient telephone : ${patient.phone}
    `;

    const result = await mail.Mail_Sender(
      "hatembenechikh100@gmail.com",
      html,
      "Cnam Remboursement"
    );

    const updatedCnam = await Cnam.findByIdAndUpdate(
      req.params.id,
      { sended: true },
      { new: true }
    );

    res.json(updatedCnam);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const getCnamById = async (req, res) => {
  try {
    const cnam = await Cnam.findById(req.params.id);
    if (cnam === null) {
      return res.status(404).json({ message: "Cnam introuvable" });
    }
    res.json(cnam);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createCnam = async (req, res) => {
  console.log(req.body);
  const cnam = new Cnam({ ...req.body });

  try {
    const newCnam = await cnam.save();
    res.status(201).json(newCnam);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateCnamById = async (req, res) => {
  try {
    const cnam = await Cnam.findById(req.params.id);
    if (cnam == null) {
      return res.status(404).json({ message: "Cnam introuvable" });
    }

    const updatedCnam = await Cnam.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.json(updatedCnam);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteCnamById = async (req, res) => {
  try {
    const result = await Cnam.deleteOne({ _id: req.params.id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Cnam introuvable" });
    }

    res.json({ message: "Cnam supprimée avec succès !" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllCnams,
  getCnamById,
  getAllAll,
  createCnam,
  updateCnamById,
  deleteCnamById,
  SendMailToCnam,
};
