const {mongoose,MongoClient } = require('mongoose');
const URL = 'mongodb+srv://chuhuutien:0369272144@courses.gpm75af.mongodb.net/courses-blog';
const local = 'mongodb://localhost:27017';

async function connect() {
  try {
    await mongoose.connect(URL);
    console.log('Connect successfull!!!');
  } catch (error) {
    console.log('fail');
  }
}

module.exports = { connect };

