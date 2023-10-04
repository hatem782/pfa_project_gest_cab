const express = require("express");
const router = express.Router();

const CnamControllers = require("../controllers/cnam.controller");

router.get("/get_all_all", CnamControllers.getAllAll);

router.get("/get_all/:id", CnamControllers.getAllCnams);

router.get("/cnams/:id", CnamControllers.deleteCnamById);

router.post("/create", CnamControllers.createCnam);

router.put("/update/:id", CnamControllers.updateCnamById);

router.delete("/delete/:id", CnamControllers.deleteCnamById);

router.post("/send_mail/:id", CnamControllers.SendMailToCnam);

module.exports = router;
