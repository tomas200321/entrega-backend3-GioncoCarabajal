
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  petName: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Adoption', schema);
