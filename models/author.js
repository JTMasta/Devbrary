const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter author\'s name.'
  }
});

module.exports = mongoose.model('Author', authorSchema);