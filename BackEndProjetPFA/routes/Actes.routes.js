const express = require("express");
const router = express.Router();
const Actes = require("../controllers/Actes.controller");
const {
  VerifAccess,
  SUPERADMIN,
  DENTISTE,
  SECRETAIRE,
} = require("../middlewares/VerifToken");

router.post(
  "/create",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  Actes.createActes
);

router.post(
  "/create_c_acts",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  Actes.CreateConsultActes
);

router.get(
  "/get_all",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  Actes.getAllActes
);

router.get(
  "/get_all_c_acts/:id",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  Actes.getActesByConsult
);

router.get(
  "/get_one/:id",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  Actes.getActesById
);

router.put(
  "/update/:id",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  Actes.updateActes
);

router.put(
  "/update_c_acts/:id",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  Actes.updateConsultActes
);

router.delete(
  "/delete/:id",
  VerifAccess([SUPERADMIN, DENTISTE, SECRETAIRE]),
  Actes.deleteActes
);

module.exports = router;
