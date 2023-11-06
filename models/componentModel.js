const mongoose  =  require("mongoose")

const componentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }

});


const model = mongoose.model('components', componentSchema)
module.exports = model;