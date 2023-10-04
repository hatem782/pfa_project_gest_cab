const express = require("express");
const router = express.Router();
const consultationController = require("../controllers/Consult.controller");
const {
  VerifAccess,
  SUPERADMIN,
  SECRETAIRE,
  DENTISTE,
} = require("../middlewares/VerifToken");

// Create a new consultation
router.post(
  "/create",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  consultationController.createConsultation
);

// Get all consultations
router.get(
  "/get_all",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  consultationController.getAllConsultations
);

// Get a single consultation by ID
router.get(
  "/get_one/:id",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  consultationController.getConsultationById
);

// Update a consultation
router.put(
  "/update/:id",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  consultationController.updateConsultation
);

// Delete a consultation
router.delete(
  "/delete/:id",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  consultationController.deleteConsultation
);

// Get consultations by dossier
router.get(
  "/get_by_doc/:dossierId",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  consultationController.getConsultationsByDossier
);

module.exports = router;
