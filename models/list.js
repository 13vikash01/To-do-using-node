var mongoose = require("mongoose");
var listSchema = new mongoose.Schema({
    body:String,
    Created:{type: Date,default:Date.now}
})
 

module.exports = mongoose.model("list", listSchema);