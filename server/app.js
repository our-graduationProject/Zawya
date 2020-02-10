const path = require('path');
const http=require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const MONGODB_URI='mongodb+srv://we:itigrad@cluster0-8wq1d.mongodb.net/grad?retryWrites=true&w=majority'
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect(
    MONGODB_URI,
     {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      }
     )
   .then(result =>{ 
     app.listen(3000,()=>{
       console.log("server connected");
     })
   } )
   .catch(err =>{
     console.log(err);
   });


  