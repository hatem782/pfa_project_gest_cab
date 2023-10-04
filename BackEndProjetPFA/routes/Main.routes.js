const express = require("express");
const router = express.Router();

const Users = require("./Users.routes");
const Auth = require("./Auth.routes");
const Patient = require("./Patient.routes");
const Appoint = require("./Appoint.routes");
const DossierMedical = require("./DossierMedical.routes");
const Antec = require("./Antec.routes");
const files = require("./files.routes");
const Actes = require("./Actes.routes");
const ordenances = require("./ordenances.routes");
const Consult = require("./Consult.routes");
const Examen = require("./Examen.routes");
const Certeficat = require("./Certeficat.routes");
const Recette = require("./recette.routes.js");
const Depense = require("./depences.routes");
const Impayes = require("./Impayes.routes");
const Cnams = require("./Cnams.routes");

router.use("/user", Users);
router.use("/auth", Auth);
router.use("/patient", Patient);
router.use("/appoint", Appoint);
router.use("/dossier", DossierMedical);
router.use("/consult", Consult);
router.use("/ordenances", ordenances);
router.use("/antecedent", Antec);
router.use("/actes", Actes);
router.use("/examen", Examen);
router.use("/certeficat", Certeficat);
router.use("/files", files);
router.use("/recette", Recette);
router.use("/depense", Depense);
router.use("/depense", Impayes);
router.use("/cnams", Cnams);

module.exports = router;
