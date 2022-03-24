const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const oPSchema = new Schema({
    eggWp:{
      type:Number,
      required:false
    },
    eggBp:{
      type:Number,
      required:false
    },
    eggRp:{
      type:Number,
      required:false
    },
    published:{
      type: Date,
      default: Date.now
    },
  }, { timestamps: true });
  
  const oP = mongoose.model('oP', oPSchema);
  module.exports = oP;