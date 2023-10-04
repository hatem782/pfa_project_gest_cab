const express = require("express");
const router = express.Router();
const pat_cont = require("../controllers/Patient.controller");
const valid = require("../validations/Patient.validation");
const {
  VerifAccess,
  SUPERADMIN,
  SECRETAIRE,
  DENTISTE,
} = require("../middlewares/VerifToken");

router.post(
  "/create",
  VerifAccess([SUPERADMIN, SECRETAIRE]),
  valid.createPatMV,
  pat_cont.CreatePat
);

router.get(
  "/get_all",
  VerifAccess([SUPERADMIN, SECRETAIRE, DENTISTE]),
  pat_cont.GetAllPats
);

router.get(
  "/get_one/:pat_id",
  VerifAccess([SUPERADMIN, SECRETAIRE, DENTISTE]),
  pat_cont.GetOnePat
);

router.put(
  "/update/:pat_id",
  VerifAccess([SUPERADMIN, SECRETAIRE, DENTISTE]),
  valid.createPatMV,
  pat_cont.UpdatePat
);

router.delete(
  "/delete/:pat_id",
  VerifAccess([SUPERADMIN, SECRETAIRE]),
  pat_cont.DeletePat
);

module.exports = router;
