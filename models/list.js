
var mongoose = require("mongoose");

var listSchema = new mongoose.Schema({
    text:{type:String},
    Created:{type: Date,default:Date.now},
    Finished:{type: Date},
    Done:{type:Boolean,default:false}
})
 

module.exports = mongoose.model("list", listSchema);