const mongoose = require('mongoose');
slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;


const Course = new Schema({
  name: { type: String, default: '', require:true, },
  description: { type: String },
  image: { type: String },
  videoID: { type: String, require:true, },
  level: { type: String},
  slug: { type: String ,  slug:'name',  unique:true},
  
},{
  timestamps: true,
});

mongoose.plugin(slug);
Course.plugin(mongooseDelete,
  { overrideMethods: 'all',
    deletedAt : true,
   });

module.exports = mongoose.model('Course', Course);
