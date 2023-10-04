const GenereteToken = require("../functions/GenerateJWT");
const GenereteRefreshToken = require("../functions/GenerateRefreshToken");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.module");
const bcrypt = require("bcrypt");
const { account_creation_mailer } = require("../mails/CustomMails");

const CreateAdmin = async (req, res) => {
  try {
    const { login, cin, email, password } = req.body;
    const existUser = await UserModel.findOne({
      $or: [{ cin }, { login }, { email }],
    });
    if (existUser)
      return res.status(409).json({
        Message: "Admin already exists with that login or cin or email",
        Success: false,
      });

    const salt = Number(process.env.SALT);
    const cryptedMdp = await bcrypt.hash(password.toString(), salt);

    const newUser = new UserModel({
      ...req.body,
      role: "SUPERADMIN",
      password: cryptedMdp,
    });
    const createdUser = await newUser.save();
    await account_creation_mailer(createdUser, password);
    return res.status(200).json({
      Message: "SUPERADMIN created suucessfully",
      Success: true,
      data: createdUser,
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const CreateMed = async (req, res) => {
  try {
    const { login, cin, email, password } = req.body;
    const existUser = await UserModel.findOne({
      $or: [{ cin }, { login }, { email }],
    });
    if (existUser)
      return res.status(409).json({
        Message: "med already exists with that : login or email or cin",
        Success: false,
      });

    const salt = Number(process.env.SALT);
    const cryptedMdp = await bcrypt.hash(password.toString(), salt);

    const newUser = new UserModel({
      ...req.body,
      role: "DENTISTE",
      password: cryptedMdp,
    });
    const createdUser = await newUser.save();
    await account_creation_mailer(createdUser, password);
    return res.status(200).json({
      Message: "med created suucessfully",
      Success: true,
      data: createdUser,
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const CreateSec = async (req, res) => {
  try {
    const { login, cin, email, password } = req.body;
    const existUser = await UserModel.findOne({
      $or: [{ cin }, { login }, { email }],
    });
    if (existUser)
      return res.status(409).json({
        Message: "sec already exists with that login",
        Success: false,
      });

    const salt = Number(process.env.SALT);
    const cryptedMdp = await bcrypt.hash(password.toString(), salt);

    const newUser = new UserModel({
      ...req.body,
      role: "SECRETAIRE",
      password: cryptedMdp,
    });
    const createdUser = await newUser.save();
    await account_creation_mailer(createdUser, password);
    return res.status(200).json({
      Message: "sec created suucessfully",
      Success: true,
      data: createdUser,
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const Login = async (req, res) => {
  try {
    const { login, password } = req.body;
    //--------------------------------------------------------------------------
    // Verify user by mail
    let user = await UserModel.findOne({ login });
    if (!user) {
      return res.status(400).json({
        Message: "Please verify your login and password",
        Success: false,
      });
    }
    //--------------------------------------------------------------------------
    // Verify user password
    const passMatch = bcrypt.compare(password, user?.password);
    if (!passMatch) {
      return res.status(400).json({
        Message: "Please verify your login and password",
        Success: false,
      });
    }
    const token = GenereteToken({ _id: user._id });
    // const refreshToken = GenereteRefreshToken({ _id: user._id }, "3000h");
    // await new refreshTokenModel({ refreshToken: refreshToken }).save();

    return res.status(200).json({
      Message: "Logged successfully",
      Success: true,
      data: { user, token },
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const GetUserByToken = async (req, res) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ success: false, Message: "Unauthorized" });
    }
    const token = req.headers.authorization.replace("Bearer", "").trim();
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    let user = await UserModel.findOne({ _id: decoded._id });

    if (!user) {
      return res.status(401).json({ success: false, Message: "Unauthorized" });
    }

    return res.status(200).json({
      Message: "Logged successfully",
      Success: true,
      data: { user, token },
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

module.exports = {
  CreateAdmin,
  CreateMed,
  CreateSec,
  Login,
  GetUserByToken,
};
