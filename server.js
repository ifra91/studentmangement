
const path =  require("path");
const express = require("express");
const app = express();
require("./db/connection");
const Student = require("./model/students");
const router = require("./router/student");
const hbs = require("hbs");
const ejs = require("ejs");
const StudentGrade = require("./model/studentgrade");
const routernew = require("./router/studentmark");


const port = process.env.PORT || 3000;
const { json } = require("express");
const { request } = require("http");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(router);
app.use(routernew);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept",
    );
    next();
  });


//relative path
const static_path = path.join(__dirname, "../public" );
//built-in middleware
app.use(express.static(static_path));

//for files to read in view using template engine
app.set("view engine" , "hbs");

//as it was not taking path
app.set('views', path.join(__dirname, "views"));

//going to login first page
app.get('/' , async (req, res) => {
    res.render("login");
})

//going to second index page from login page where students details will be 
//entered due to post request in login
app.post('/login' , async (req, res) => {
    res.render("index");   
})

//going to index page
app.get('/index' , async (req, res) => {
    res.render("index");
})


app.get('/registerstudent' , async (req, res) => {
    res.render("registerstudent");
})

app.get('/entermarks' , async (req, res) => {
    res.render("entermarks");
})

app.get('/studentdata' , async (req, res) => {
    res.render("studentdata");
})


// app.get('/studentsearch' , async (req, res) => {
//     res.render("studentsearch");
// })

app.get("/stsearch" , function(req,res){
    res.render("studentsearch");
});
    

    // var searchTerm = req.query.searchterm;


            


//post data to db for registering student data
app.post('/registerstudent' , async (req, res) => {
    try{

            const registerstudent = new Student({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                student_Id: req.body.student_Id,
                classGrade: req.body.classGrade,
                Address: req.body.Address,
                ContactInfo:req.body.ContactInfo,
                active:req.body.active

            })

            const registered = await registerstudent.save();
            res.status(201).render("index");
    } catch(error) {
        res.status(400).send(error);
    }
})




//post data to Database to Enter marks of respective student with student ID
app.post('/entermarks' , async (req, res) => {
    try{

            const studentmarks = new StudentGrade({
                student_Id: req.body.student_Id,
                engmarks: req.body.engmarks,
                hindimarks: req.body.hindimarks,
                sciencemarks: req.body.sciencemarks,
                mathsmarks: req.body.mathsmarks,
                socialmarks:req.body.socialmarks
        })

            const marksentered = await studentmarks.save();
            res.status(201).render("index");
    } catch(error) {
        res.status(400).send(error);
    }
})



app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
})




