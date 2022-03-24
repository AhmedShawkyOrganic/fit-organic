const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orSchema = new Schema({
    orderNum:{
      type: Number,
      required:false
    },
    name:{
      type:String,
      required:true
    },
    number:{
      type:Number,
      required:true
    },
    eggW:{
      type:Number,
      required:false
    },
    eggB:{
      type:Number,
      required:false
    },
    eggR:{
      type:Number,
      required:false
    },
    eggWop:{
      type:Number,
      required:true
    },
    eggBop:{
      type:Number,
      required:true
    },
    eggRop:{
      type:Number,
      required:true
    },
    adress:{
      type:String,
      required:false
    },
    dFees:{
      type:Number,
      required:false
    },
    prices:{
      type:Number,
      required:false
    },
    status:{
      type: String,
      enum: ['Pending', 'Completed', 'Ready', 'Cancelled'],
      required : true 
    },
    user:{
      type: String,
      enum: ['Shawky','Eid'],
      required : true 
    },
    published:{
      type: Date,
      default: Date.now
    },
  }, { timestamps: true });
  
  const oSc = mongoose.model('oSc', orSchema);
  module.exports = oSc;