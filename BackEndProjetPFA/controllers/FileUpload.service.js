const { FileUpload } = require("../uploads/FileUpload");

// Upload File To Antecedent
exports.UploadGeneral = async (req, res) => {
  try {
    const files = req.files.file;
    let results = [];

    if (Array.isArray(files)) {
      // Multi Upload
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const result = await FileUpload(file, "General");
        results.push(result.url);
      }
    } else {
      // Single Upload
      const result = await FileUpload(files, "General");
      results.push(result.url);
    }

    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to upload file" });
  }
};

// Upload File To Antecedent
exports.UploadAntecendent = async (req, res) => {
  try {
    const files = req.files.file;
    let results = [];

    if (Array.isArray(files)) {
      // Multi Upload
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const result = await FileUpload(file, "Antecendent");
        results.push(result.url);
      }
    } else {
      // Single Upload
      const result = await FileUpload(files, "Antecendent");
      results.push(result.url);
    }

    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to upload file" });
  }
};

// Upload File To Consultation
exports.UploadConsultation = async (req, res) => {
  try {
    const files = req.files.file;
    let results = [];

    if (Array.isArray(files)) {
      // Multi Upload
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const result = await FileUpload(file, "Consultation");
        results.push(result.url);
      }
    } else {
      // Single Upload
      const result = await FileUpload(files, "Consultation");
      results.push(result.url);
    }

    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to upload file" });
  }
};

exports.UploadRecettes = async (req, res) => {
  try {
    const files = req.files.file;
    let results = [];

    if (Array.isArray(files)) {
      // Multi Upload
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const result = await FileUpload(file, "recettes");
        results.push(result.url);
      }
    } else {
      // Single Upload
      const result = await FileUpload(files, "recettes");
      results.push(result.url);
    }

    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to upload file" });
  }
};
