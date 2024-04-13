const mongoose  =  require("mongoose")

const compObjSchema = new mongoose.Schema({
  elementId: {
    type: String,
    required: true,
  },
  compId: {
    type: String,
    required: true,
  },
})

// const contentObjSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   classes: {
//     type: String,
//     required: true,
//   },
//   children: {
//     type: [compObjSchema],
//     required: false,
//   },
// })

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
    required: false,
  },
});




const model = mongoose.model('pages', pageSchema)
module.exports = model;