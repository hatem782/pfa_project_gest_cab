const mongoose = require('mongoose');

const impayeSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  montant: {
    type: Number,
    required: true,
  },
  dateEcheance: {
    type: Date,
    required: true,
  },
  estPaye: {
    type: Boolean,
    default: false,
  },
});

const Impaye = mongoose.model('Impaye', impayeSchema);

module.exports = Impaye;
