const mongoose  =  require("mongoose")

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }

});



const model = mongoose.model('projects', projectSchema)
module.exports = model;