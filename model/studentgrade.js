const mongoose = require("mongoose");
const validator = require("validator");

const StudentMarksSchema = new mongoose.Schema({
    student_Id : {type:String, unique:true},
    engmarks : Number,
    hindimarks : Number,
    sciencemarks : Number,
    mathsmarks : Number,
    socialmarks : Number,
}) 


//create a new Collection 
const StudentGrade = new mongoose.model("StudentGrade" , StudentMarksSchema);

//export the student data
module.exports = StudentGrade;