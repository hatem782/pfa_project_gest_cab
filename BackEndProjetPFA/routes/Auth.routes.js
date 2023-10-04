const express = require("express");
const router = express.Router();
const cont = require("../controllers/Auth.controller");
const valid = require("../validations/Auth.validation");
const { VerifAccess, SUPERADMIN } = require("../middlewares/VerifToken");

router.post("/login", valid.LoginMV, cont.Login);

router.get("/get_user_by_token", cont.GetUserByToken);

router.post("/create_admin", valid.createUserMV, cont.CreateAdmin);

router.post(
  "/create_sec",
  VerifAccess([SUPERADMIN]),
  valid.createUserMV,
  cont.CreateSec
);

router.post(
  "/create_dent",
  VerifAccess([SUPERADMIN]),
  valid.createDocMV,
  cont.CreateMed
);

module.exports = router;
