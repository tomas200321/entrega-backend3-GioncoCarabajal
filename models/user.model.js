
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, default: 'user' }
});

module.exports = mongoose.model('User', schema);
