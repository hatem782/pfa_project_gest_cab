const express = require("express");
const router = express.Router();
const ExamenController = require("../controllers/Examen.controller");
const {
  VerifAccess,
  SUPERADMIN,
  DENTISTE,
} = require("../middlewares/VerifToken");

// Create a new examen
router.post(
  "/create_full",
  VerifAccess([SUPERADMIN, DENTISTE]),
  ExamenController.createExamenComplet
);

// Create a new examen
router.post(
  "/create_simple",
  VerifAccess([SUPERADMIN, DENTISTE]),
  ExamenController.createExamenSimple
);

// Get all examens
router.get(
  "/get_all",
  VerifAccess([SUPERADMIN, DENTISTE]),
  ExamenController.getAllExamens
);

// Get examens by consult
router.get(
  "/get_by_consult/:id",
  VerifAccess([SUPERADMIN, DENTISTE]),
  ExamenController.getAllExamensByConsult
);

// Get a single examen by ID
router.get(
  "/get_one/:id",
  VerifAccess([SUPERADMIN, DENTISTE]),
  ExamenController.getExamenById
);

// Update a examen
router.put(
  "/update_simple/:id",
  VerifAccess([SUPERADMIN, DENTISTE]),
  ExamenController.updateExamenSimple
);

// Update a examen
router.put(
  "/update_complet/:id",
  VerifAccess([SUPERADMIN, DENTISTE]),
  ExamenController.updateExamenComplet
);

// Delete a examen
router.delete(
  "/delete/:id",
  VerifAccess([SUPERADMIN, DENTISTE]),
  ExamenController.deleteExamen
);

module.exports = router;
