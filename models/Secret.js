const mongoose = require('mongoose');

const schema = mongoose.Schema({
  id: { type: Number },
  legend: { required: true }
})

module.exports = mongoose.model('Secret', schema, 'secrets');