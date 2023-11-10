const mongoose = require("mongoose")
const antSchema = mongoose.Schema({
antName: String,
age: Number,
color: String
})
module.exports = mongoose.model("ant",
antSchema)