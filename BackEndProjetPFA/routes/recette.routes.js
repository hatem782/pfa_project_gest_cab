const express = require("express");
const router = express.Router();

const recetteController = require("../controllers/recette.controller");

router.get("/get_all_all", recetteController.getAllAll);

router.get("/get_all/:id", recetteController.getAllRecettes);

router.get("/recettes/:id", recetteController.getRecetteById);

router.post("/create", recetteController.createRecette);

router.put("/update/:id", recetteController.updateRecetteById);

router.delete("/delete/:id", recetteController.deleteRecetteById);

module.exports = router;
