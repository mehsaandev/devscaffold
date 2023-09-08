const mongoose = require('mongoose');

const navbarSchema = new mongoose.Schema({
  links: [{
    title:{
      type: String,
    required: true,
    unique: true},
  
    url :{
      type: String,
    required: true,}
  }
]});

const model = mongoose.model('navbar', navbarSchema)
module.exports = model;