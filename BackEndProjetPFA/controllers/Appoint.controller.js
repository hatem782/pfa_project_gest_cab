const AppointModel = require("../models/appoint.module");

const CreateAppoint = async (req, res) => {
  try {
    const { start: start_current, end: end_current } = req.body;
    console.log(req.body);
    console.log({ start_current, end_current });

    const existingAppointments = await AppointModel.find({
      $or: [
        {
          $and: [
            { start: { $gte: start_current } },
            { start: { $lt: end_current } },
          ],
        },
        {
          $and: [
            { end: { $gt: start_current } },
            { end: { $lte: end_current } },
          ],
        },
        {
          $and: [
            { start: { $lte: start_current } },
            { end: { $gte: end_current } },
          ],
        },
      ],
    });
    console.log(existingAppointments);

    if (existingAppointments.length > 0) {
      return res.status(409).json({
        Message:
          "Choose an other time for this appointement, please check calendar",
        Success: false,
      });
    }

    const newAppointment = new AppointModel({
      ...req.body,
      backgroundColor: "#1dbf73", // #1dbf73 #3788D8
      borderColor: "#1dbf73", // #1dbf73 #3788D8
      textColor: "white",
      editable: false,
      presence: false,
      appoint_type: "Rdv",
    });
    const result = await newAppointment.save();

    return res.status(200).json({
      Message: "New appointment added",
      Success: true,
      data: result,
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const CreateVacanse = async (req, res) => {
  try {
    const { start: start_current, end: end_current } = req.body;
    console.log({ start_current, end_current });

    const existingAppointments = await AppointModel.find({
      $or: [
        {
          $and: [
            { start: { $gte: start_current } },
            { start: { $lt: end_current } },
          ],
        },
        {
          $and: [
            { end: { $gt: start_current } },
            { end: { $lte: end_current } },
          ],
        },
        {
          $and: [
            { start: { $lte: start_current } },
            { end: { $gte: end_current } },
          ],
        },
      ],
    });
    console.log(existingAppointments);

    if (existingAppointments.length > 0) {
      return res.status(409).json({
        Message:
          "Time Conflict with other appointements, please check calendar",
        Success: false,
      });
    }

    const newAppointment = new AppointModel({
      ...req.body,
      backgroundColor: "#2c3e50",
      borderColor: "#2c3e50",
      textColor: "white",
      editable: false,
      presence: false,
      appoint_type: "vacances",
    });
    const result = await newAppointment.save();

    return res.status(200).json({
      Message: "new holiday added",
      Success: true,
      data: result,
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const GetAllRdvs = async (req, res) => {
  try {
    const dates = await AppointModel.find({ appoint_type: "Rdv" });
    return res.status(200).json({
      Message: `all Dates`,
      Success: true,
      data: dates,
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const GetAllVccs = async (req, res) => {
  try {
    const dates = await AppointModel.find({ appoint_type: "vacances" });
    return res.status(200).json({
      Message: `all Dates`,
      Success: true,
      data: dates,
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const GetAllDates = async (req, res) => {
  try {
    const dates = await AppointModel.find({});
    return res.status(200).json({
      Message: `all Dates`,
      Success: true,
      data: dates,
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const UpdateDate = async (req, res) => {
  try {
    const { _id } = req.params;
    const { start: start_current, end: end_current } = req.body;
    console.log({ start_current, end_current });

    const existingAppointments = await AppointModel.find({
      $and: [
        { _id: { $ne: _id } },
        {
          $or: [
            {
              $and: [
                { start: { $gte: start_current } },
                { start: { $lt: end_current } },
              ],
            },
            {
              $and: [
                { end: { $gt: start_current } },
                { end: { $lte: end_current } },
              ],
            },
            {
              $and: [
                { start: { $lte: start_current } },
                { end: { $gte: end_current } },
              ],
            },
          ],
        },
      ],
    });
    console.log(existingAppointments);

    if (existingAppointments.length > 0) {
      return res.status(409).json({
        Message:
          "Choose an other time for this appointement, please check calendar",
        Success: false,
      });
    }

    // start - end - title - cin - firstName - lastName - phone - description
    const result = await AppointModel.findOneAndUpdate(
      { _id: _id },
      {
        ...req.body,
      },
      { new: true }
    );

    return res.status(200).json({
      Message: "appointment Updated",
      Success: true,
      data: result,
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const CameInTime = async (req, res) => {
  try {
    const { _id } = req.params;
    // presence
    const result = await AppointModel.findOneAndUpdate(
      { _id: _id },
      {
        ...req.body,
      },
      { new: true }
    );

    return res.status(200).json({
      Message: "appointment Updated",
      Success: true,
      data: result,
    });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

const DeleteDate = async (req, res) => {
  try {
    const { _id } = req.params;
    const removedApoint = await AppointModel.deleteOne({ _id: _id });
    if (!removedApoint) {
      return res.status(400).json({ Message: "Failed to delete apointement" });
    }
    return res
      .status(200)
      .json({ Message: "apointement deleted successfully" });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};

module.exports = {
  CreateAppoint,
  CreateVacanse,
  GetAllDates,
  GetAllRdvs,
  GetAllVccs,
  UpdateDate,
  CameInTime,
  DeleteDate,
};
