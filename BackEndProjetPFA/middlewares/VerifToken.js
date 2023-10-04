const jwt = require("jsonwebtoken");
const usertModel = require("../models/user.module");

exports.SUPERADMIN = "SUPERADMIN";
exports.DENTISTE = "DENTISTE";
exports.SECRETAIRE = "SECRETAIRE";
exports.STAGIAIRE = "STAGIAIRE";

exports.VerifAccess =
  (roles = []) =>
  async (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const token = req.headers.authorization.replace("Bearer", "").trim();
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      let user = await usertModel.findOne({ _id: decoded._id });
      if (!user) {
        return res
          .status(401)
          .json({ success: false, Message: "Unauthorized" });
      }
      if (roles.indexOf(user.role) === -1) {
        return res.status(401).json({
          success: false,
          Message: "You have no access to this operation",
        });
      }
      req.user = user;
      next();
    } catch (err) {
      console.log(err);
      return res.status(401).json({ success: false, Message: "Unauthorized" });
    }
  };
