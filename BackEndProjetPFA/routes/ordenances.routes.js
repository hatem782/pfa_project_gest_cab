const express = require("express");
const router = express.Router();
const ordenanceController = require("../controllers/Ordenance.controller");

// Create a new ordenance
router.post("/create", ordenanceController.createOrdenance);

// Get all ordenances
router.get("/get_all", ordenanceController.getAllOrdenances);

// Get all ordenances
router.get("/get_all_bypat/:id", ordenanceController.getAllOrdenancesByPatient);

// Get a single ordenance by ID
router.get("/get_one/:id", ordenanceController.getOrdenanceById);

// Update an ordenance
router.put("/update/:id", ordenanceController.updateOrdenance);

// Delete an ordenance
router.delete("/delete/:id", ordenanceController.deleteOrdenance);

module.exports = router;
