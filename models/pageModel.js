const mongoose  =  require("mongoose")

const compObjSchema = new mongoose.Schema({
  compId: {
    type: String,
    required: true,
  },
  compId: {
    type: String,
    required: true,
  },
})

const pageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  project_id: {
    type: String,
    required: true,
  },
  content: {
    type: Object,
    required: true,
  },
  componentArray: {
    type: [compObjSchema],
    required: true,
  },
});




const model = mongoose.model('pages', pageSchema)
module.exports = model;