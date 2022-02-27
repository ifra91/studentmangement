const mongoose = require("mongoose");
const validator = require("validator");

//Define Schema for MOngoose DB

const StudentDataSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    student_Id : {type:String, unique:true},
    classGrade : Number,
    Address : String,
    ContactInfo : String,
    active : Boolean

}) 




//create a new Collection 
const Student = new mongoose.model("Student" , StudentDataSchema);

//export the student data
module.exports = Student;






   
