var mongoose = require('mongoose');

var Api = mongoose.model('Api', {

  API: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  Description: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  Auth: {
    type: String,
    required: true,
    trim: true
  },
  HTTPS: {
    type: Boolean,
    default: false,
    required: true
  },
  Cors: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  Link: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  Category: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = {Api};
