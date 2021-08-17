const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()

app.use(express.static(__dirname + '/public1'));
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://aditya01:aditya01@aditya.ima8t.mongodb.net/myFirstDatabase",{useNewUrlParser: true, useUnifiedTopology: true});

const datashema = {
    FirstName: String,
    LasttName: String,
    email : String,
    phone : Number,
    message: String
}

const info = mongoose.model("info",datashema);

app.post("/",(req,res)=>{
    
    let newinfo = new info({
        FirstName:req.body.firstname,
        LasttName:req.body.lastname,
        email :req.body.email,
        phone :req.body.phone ,
        message:req.body.message
    })

    newinfo.save();
    res.redirect('/');
})

app.get("/",function(req,res){
    res.sendFile(__dirname + "/public1/contact.html");
})

app.listen(4000,function(){
    console.log("Connected to 4000");
})


