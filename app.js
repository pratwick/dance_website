
const express = require ("express");
const path = require("path");

// For using mongoose -->
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});
const bodyparser = require("body-parser");  //added body-parser

const fs = require ("fs");
const app = express();
const port = 8000;


//define the mongoose schema and write down all fields name email and other
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone : String,
  address : String,
  qualification :String
});

//created the model Contact -->
var Contact = mongoose.model('contact', contactSchema); 

// Express related stuff
  app.use('/static' , express.static('static'));
  app.use(express.urlencoded());

//Pug related stuff

  app.set('View Engine','pug' ); //set the template engine as pug
  app.set('views' , path.join(__dirname, 'views')); //set the views directory
 
 //END POINTS-->    
 //1.Get request -->
  
 app.get('/',(req, res)=>{
  res.status(200).render("home.pug");   //200 means ok
});
  

  app.get('/home',(req, res)=>{
  res.status(200).render("home.pug");   //200 means ok
});
  
  app.get('/about',(req, res)=>{
  res.status(200).render("about.pug");  //200 means ok
});

  app.get('/contact',(req, res)=>{
  res.status(200).render("contact.pug"); //200 means okapp  
  
});
  
  app.get('/services',(req, res)=>{
  res.status(200).render("services.pug"); //200 means ok
});

app.get('/team',(req, res)=>{
  res.status(200).render("team.pug"); //200 means ok
});

// for database -->
app.post('/contact', (req, res)=>{
  var myData = new Contact(req.body);
  myData.save().then(()=>{
  res.send("This item has been saved to the database")
  }).catch(()=>{
  res.status(400).send("item was not saved to the databse")
  })
});

//STARTING THE SERVER-->
    app.listen(port, ()=>{
    console.log(`The application started successfully on the port ${port}`);
});

