const mongoose = require('mongoose');

const connectToMongoose = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('connected to mongoose'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};
module.exports = connectToMongoose