const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.ndfak.mongodb.net/StudentRegistrationData?retryWrites=true&w=majority").then(() => {
    console.log("connection is successful");
}).catch((e) => {
    console.log("No Connection");
})

