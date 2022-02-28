
const express = require("express");
const router = new express.Router();

const Student = require("../model/students");


//handling post request in API
router.post("/students", async (req,res) => {
    try{
        const addingNewRecords = new Student(req.body)
        console.log(req.body);
        const insertRecords = await addingNewRecords.save();
        res.status(201).send(insertRecords);
    }catch(e){
        res.status(400).send(e);
    }
})

//handling get request in API
router.get("/students", async (req,res) => {
    try{
        const getStudents = await Student.find({});
        res.send(getStudents);
    } catch(e) {
        res.status(400).send(e);
    }
})
// use ranking to sort
//handel get request for individual field from schema
router.get("/students/:_id", async (req,res) => {
    try{
        const stuId = req.params.student_Id;
        const getstuId = await Student.findById(stuId);
        res.send(getstuId);
        console.log(getstuId);
        
    } catch(e) {
        res.status(400).send(e);
    }
})

//handel patch request for individual field from schema
router.patch("/students/:studentId", async (req,res) => {
    try{
        const stuId = req.params.student_Id;
        const getstuId = await Student.findByIdAndUpdate({stuId}, req.body, {
            new:true
        });
        res.send(getstuId);
    } catch(e) {
        res.status(400).send(e);
    }
})


//handel delete request for individual field from schema
router.delete("/students/:studentId", async (req,res) => {
    try{
        const stuId = req.params.student_Id;
        const getstuId = await Student.findByIdAndDelete({stuId}, req.body, {
            new:true
        });
        res.send(getstuId);
    } catch(e) {
        res.status(400).send(e);
    }
})


module.exports = router;

