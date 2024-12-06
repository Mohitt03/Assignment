import mongoose from "mongoose";
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    publication_year:{
        type:Number,
        required:true
    },
    isbn:{
        type:Number,
        required:true
    },
});
export default mongoose.model("book",bookSchema);