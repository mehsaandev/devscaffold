const mongoose  =  require("mongoose")

const routeSchema = mongoose.Schema({
  projectId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  targetedPageId: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
  status: {
    type: String,
    required: true,
  },

});


const model = mongoose.model('routes', routeSchema)
module.exports = model;