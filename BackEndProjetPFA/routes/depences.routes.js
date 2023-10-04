const express = require("express");
const router = express.Router();

const depenseController = require("../controllers/Depences.controller");
const {
  validateCreateDepence,
  validateUpdateDepence,
} = require("../validations/depences.validation");

router.get("/depenses", depenseController.getAllDepenses);

router.post(
  "/depenses",
  validateCreateDepence,
  depenseController.createDepense
);

router.put(
  "/depenses/:id",
  validateUpdateDepence,
  depenseController.updateDepense
);

router.delete("/depenses/:id", depenseController.deleteDepense);

module.exports = router;
