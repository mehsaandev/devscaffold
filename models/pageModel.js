const mongoose  =  require("mongoose")

const pageSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  project_id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }

});


const model = mongoose.model('pages', pageSchema)
module.exports = model;