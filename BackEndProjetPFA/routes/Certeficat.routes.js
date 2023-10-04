const express = require("express");
const router = express.Router();
const certeficatController = require("../controllers/Certeficats.controller");

const {
  VerifAccess,
  SUPERADMIN,
  SECRETAIRE,
  DENTISTE,
} = require("../middlewares/VerifToken");

// Create a new certeficat (dispense)
router.post(
  "/create_dispense",
  VerifAccess([SUPERADMIN, DENTISTE]),
  certeficatController.createCerteficatDispense
);

// Create a new certeficat (apti)
router.post(
  "/create_apti",
  VerifAccess([SUPERADMIN, DENTISTE]),
  certeficatController.createCerteficatApti
);

// Get all certeficats
router.get(
  "/get_all",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  certeficatController.getAllCerteficats
);

// Get all certeficats by consultation ID
router.get(
  "/get_by_consult/:id",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  certeficatController.getAllCerteficatsByConsult
);

// Get all ordenances
router.get(
  "/get_all_bypat/:id",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  certeficatController.getAllCerteficatsByPatient
);

// Get a single certeficat by ID
router.get(
  "/get_one/:id",
  VerifAccess([SUPERADMIN, DENTISTE]),
  certeficatController.getCerteficatById
);

// Update a certeficat (dispense)
router.put(
  "/update_dispense/:id",
  VerifAccess([SUPERADMIN, DENTISTE]),
  certeficatController.updateCerteficatDispense
);

// Update a certeficat (apti)
router.put(
  "/update_apti/:id",
  VerifAccess([SUPERADMIN, DENTISTE]),
  certeficatController.updateCerteficatApti
);

// Delete a certeficat
router.delete(
  "/delete/:id",
  VerifAccess([SUPERADMIN, DENTISTE]),
  certeficatController.deleteCerteficat
);

module.exports = router;
