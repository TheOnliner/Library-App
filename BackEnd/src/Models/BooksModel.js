const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/Book")
mongoose.connect("mongodb+srv://aryalibrary:Dxb8Mu04mg7l6h6o@cluster0.qczdhu1.mongodb.net/library",
{
    useUnifiedTopology: true,
    useNewUrlParser: true,
  } );

const Schema = mongoose.Schema;
const BookSchema = new Schema({

    code:Number,
    bookname:String,
    author:String,
    edition:String,
    rating:Number,
    imageurl:String,
    description:String,

});

var bookdata = mongoose.model('bookdatas' , BookSchema)
module.exports =bookdata