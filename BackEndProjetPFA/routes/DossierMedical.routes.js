const express = require("express");
const router = express.Router();
const dossierMedicalController = require("../controllers/Dossier.controller");
const {
  VerifAccess,
  SUPERADMIN,
  SECRETAIRE,
  DENTISTE,
} = require("../middlewares/VerifToken");

router.post(
  "/create",
  VerifAccess([SUPERADMIN, SECRETAIRE, DENTISTE]),
  dossierMedicalController.createDossierMedical
);

router.get(
  "/get_all",
  VerifAccess([SUPERADMIN, SECRETAIRE, DENTISTE]),
  dossierMedicalController.getAllDossiersMedicaux
);

router.get(
  "/get_one/:id",
  VerifAccess([SUPERADMIN, SECRETAIRE, DENTISTE]),
  dossierMedicalController.getDossierMedicalById
);

router.put(
  "/update/:id",
  VerifAccess([SUPERADMIN, SECRETAIRE, DENTISTE]),
  dossierMedicalController.updateDossierMedical
);

router.delete(
  "/delete/:id",
  VerifAccess([SUPERADMIN, SECRETAIRE, DENTISTE]),
  dossierMedicalController.deleteDossierMedical
);

router.get(
  "/get_by_pat/:patientId",
  dossierMedicalController.getDossierMedicalByPatient
);

module.exports = router;
