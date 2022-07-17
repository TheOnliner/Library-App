const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/Book")
mongoose.connect("mongodb+srv://aryalibrary:Dxb8Mu04mg7l6h6o@cluster0.qczdhu1.mongodb.net/library",
{
    useUnifiedTopology: true,
    useNewUrlParser: true,
  } );

   


const Schema = mongoose.Schema;
const UserSchema = new Schema({

    
    username:String,
    emailaddress:String,
    phonenumber:Number,
    password:String,
    
});

var userdata = mongoose.model('userdatas' , UserSchema)
module.exports =userdata