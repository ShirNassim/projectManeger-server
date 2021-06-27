const mongoose = require('mongoose')

const baseOptions = {
    discriminatorKey: 'itemtype', 
    collection: 'items',
};
  
const BaseSchema = mongoose.Schema({
    name: { type: String },
    timeCreated: {
        type: Date,
        default: Date.now
    },
    timeUpdate: {
        type: Date,
         default:Date.now
    },
    isDeleted: {
        type: Boolean,
        default:false
    },
   
},baseOptions)

module.exports = mongoose.model('Base', BaseSchema)

BaseSchema.virtual('isNew').get(() =>{
    return this._id ? false : true;
});