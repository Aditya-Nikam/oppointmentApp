const mongoose = require("mongoose")

//DB Creation named "practice" andconnect to that DB
mongoose.connect("mongodb://localhost:27017/Questions")

// Create schema ie. document structure
const userSchema = mongoose.Schema({
  data:String,
})

// Create Model i.e collection of named User in Db
module.exports = mongoose.model("Users",userSchema)


