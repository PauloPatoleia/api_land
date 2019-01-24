var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mainuser:magalais1@ds011472.mlab.com:11472/api-land', { useNewUrlParser: true });

module.exports = {mongoose};
