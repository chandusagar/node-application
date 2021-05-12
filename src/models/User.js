const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ListSchema = new Schema({
   country: {
    type: String,
  },
  state: {
    type: String,
  },
})

const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  status: {
    type:String,
  },
 
 comments:[ListSchema]
});

module.exports = User = mongoose.model("Users", UserSchema);
