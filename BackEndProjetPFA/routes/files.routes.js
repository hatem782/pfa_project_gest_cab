const express = require("express");
const router = express.Router();
const FileUpload = require("../controllers/FileUpload.service");

router.post("/general", FileUpload.UploadGeneral);
router.post("/recettes", FileUpload.UploadRecettes);
router.post("/antecedent", FileUpload.UploadAntecendent);
router.post("/consultation", FileUpload.UploadConsultation);

module.exports = router;
