var mongoose = require('mongoose');

var Category = mongoose.model('Category', {

    Category: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  }
});

module.exports = {Category};
