const mongoose = require('mongoose');

const schema = mongoose.Schema({
  id: { type: Number, required: true },
  legend: { type: String, required: true },
  image: { type: String, required: true },
  answer: { type: String, required: true }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Secret', schema, 'secrets');