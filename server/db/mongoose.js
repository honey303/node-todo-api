var mongoose = require('mongoose');

const port = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;

mongoose.connect(port);

module.exports = {mongoose};