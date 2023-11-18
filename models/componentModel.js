const mongoose  =  require("mongoose")

const componentSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: Object,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  isPublished:{
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },

});


const model = mongoose.model('components', componentSchema)
module.exports = model;