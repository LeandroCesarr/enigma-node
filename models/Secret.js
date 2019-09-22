const mongoose = require('mongoose');

const schema = mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  typeFile: { type: String, required: true },
  image: { type: String },
  text: { type: String },
  fontFamily: { type: String },
  altFile: { type: String },
  answer: { type: String, required: true },
  tip: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Secret', schema, 'secrets');