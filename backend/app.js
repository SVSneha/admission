const Student=require('./model/schema')

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors=require('cors')

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());


mongoose.connect('mongodb://127.0.0.1:27017/mca_admission');
var db = mongoose.connection;
db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

app.get('/getEligibleStudents', async (req, res) => {  try {
  let response = await Student.find({  
    $and: [
      { $expr: { $gt: [{ $toInt: "$tenthMarkInPercentage" }, parseInt(req.query.s1)] } },
      { $expr: { $gt: [{ $toInt: "$twelthMarkInPercentage" }, parseInt(req.query.h1)] } },
      { $expr: { $gt: [{ $toInt: "$sem5" }, parseInt(req.query.UG1)] } }  
        ]    });
   res.send(response);  } 
   catch (e) {
    throw e;
  }})
  

app.get('/getAllStudents', async(req, res) => {
    try{
      if(req.query.type!=='eligible'){
        let response = await Student.find({})
        res.send(response)
      }      
    }
    catch(e){
      throw e;
    }
})
app.post('/createItem',async(req,res)=>{
    try{
      console.log(req.body);
      let data = await Student.create(req.body);
      res.send(data)
    }
    catch(e){
      throw e;
    }
})
app.put('/updateItem',async(req,res)=>{
  try{
    let query={dob:req.body.dob};
    console.log(req.body)
    let response= await Student.updateOne(query,req.body)
    res.send(response)
  }
  catch(e){
    throw e;
  }
})
app.delete('/deleteItem',async(req,res)=>{
  try{
    let query = {id:req.query.id};
    let response = await Item.deleteOne(query);
    res.send(response);
  }
  catch(e){
    throw e;
  }
})
app.get('/getItemBydob',async(req,res)=>{
  try{
    let query = {dob:req.query.dob};
    let response = await Student.find(query);
    res.send(response)
  }
  catch(e){
    throw e;
  }
})

module.exports=app

