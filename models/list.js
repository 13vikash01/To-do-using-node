
var mongoose = require("mongoose");

var listSchema = new mongoose.Schema({
    text:{type:String},
    Created:{type: Date,default:Date.now},

})
 

module.exports = mongoose.model("list", listSchema);