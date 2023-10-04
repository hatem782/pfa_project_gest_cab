const express = require("express");
const router = express.Router();
const appoint = require("../controllers/Appoint.controller");

const {
  VerifAccess,
  SUPERADMIN,
  SECRETAIRE,
  DENTISTE,
} = require("../middlewares/VerifToken");

router.post(
  "/create_rdv",
  VerifAccess([SUPERADMIN, SECRETAIRE]),
  appoint.CreateAppoint
);

router.post(
  "/create_vcc",
  VerifAccess([SUPERADMIN, SECRETAIRE]),
  appoint.CreateVacanse
);

router.get(
  "/get_all",
  VerifAccess([SUPERADMIN, SECRETAIRE, DENTISTE]),
  appoint.GetAllDates
);

router.get(
  "/get_Rdvs",
  VerifAccess([SUPERADMIN, SECRETAIRE, DENTISTE]),
  appoint.GetAllRdvs
);

router.get(
  "/get_vccs",
  VerifAccess([SUPERADMIN, SECRETAIRE, DENTISTE]),
  appoint.GetAllVccs
);

router.put(
  "/update/:_id",
  VerifAccess([SUPERADMIN, SECRETAIRE]),
  appoint.UpdateDate
);

router.put(
  "/came_in_time/:_id",
  VerifAccess([SUPERADMIN, SECRETAIRE]),
  appoint.CameInTime
);

router.delete(
  "/delete/:_id",
  VerifAccess([SUPERADMIN, SECRETAIRE]),
  appoint.DeleteDate
);

module.exports = router;
