const mongoose = require('mongoose');

const depenseSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  montant: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  pieceJustificative: {
    type: String,
    required: true,
  },
});

const Depense = mongoose.model('Depense', depenseSchema);

module.exports = Depense;
