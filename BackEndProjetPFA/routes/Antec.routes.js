const express = require("express");
const router = express.Router();
const AntecedController = require("../controllers/Anteced.controller");
const {
  VerifAccess,
  SUPERADMIN,
  DENTISTE,
} = require("../middlewares/VerifToken");

router.post(
  "/create",
  VerifAccess([SUPERADMIN, DENTISTE]),
  AntecedController.createAntecendent
);

router.get(
  "/get_all",
  VerifAccess([SUPERADMIN, DENTISTE]),
  AntecedController.getAllAntecedents
);

router.get(
  "/get_one/:id",
  VerifAccess([SUPERADMIN, DENTISTE]),
  AntecedController.getAntecendentById
);

router.put(
  "/update/:id",
  VerifAccess([SUPERADMIN, DENTISTE]),
  AntecedController.updateAntecendent
);

router.delete(
  "/delete/:id",
  VerifAccess([SUPERADMIN, DENTISTE]),
  AntecedController.deleteAntecendent
);

router.get(
  "/get_all_by_pat/:id",
  VerifAccess([SUPERADMIN, DENTISTE]),
  AntecedController.getAntecedentsByDossier
);

module.exports = router;
