const express = require("express");
const routernew = new express.Router();



const StudentGrade = require("../model/studentgrade");

//handling post request in API
routernew.post("/studentgrade", async (req,res) => {
    try{
        const addingNewMarks = new StudentGrade(req.body)
        console.log(req.body);
        const insertMarks = await addingNewMarks.save();
        res.status(201).send(insertMarks);
    }catch(e){
        res.status(400).send(e);
    }
})

//handling get request in API
routernew.get("/studentgrade", async (req,res) => {
    try{
        const getStudentsMarks = await StudentGrade.find({});
        res.send(getStudentsMarks);
    } catch(e) {
        res.status(400).send(e);
    }
})


// use ranking to sort
//handel get request for individual field from schema
routernew.get("/studentgrade/:studentId", async (req,res) => {
    try{
        const getmrksid = req.params.studentId;
        const updatestuId = await StudentGrade.findById(getmrksid);
        res.send(updatestuId);
    } catch(e) {
        res.status(400).send(e);
    }
})

//handel patch request for individual field from schema
routernew.patch("/studentgrade/:studentId", async (req,res) => {
    try{
        const patchstuId = req.params.studentId;
        const updatestuId = await StudentGrade.findByIdAndUpdate({patchstuId}, req.body, {
            new:true
        });
        res.send(updatestuId);
    } catch(e) {
        res.status(400).send(e);
    }
})


//handel delete request for individual field from schema
routernew.delete("/studentgrade/:studentId", async (req,res) => {
    try{
        const deletestuId = req.params.studentId;
        const delstuId = await StudentGrade.findByIdAndDelete({deletestuId}, req.body, {
            new:true
        });
        res.send(delstuId);
    } catch(e) {
        res.status(400).send(e);
    }
})


module.exports = routernew;
