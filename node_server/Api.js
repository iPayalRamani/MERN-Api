const express = require("express");
const mongoose = require("mongoose");
const Customer = require('./model/Customer');
const cors = require('cors');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://payal:payal@cluster0.0qfikcv.mongodb.net/projects?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("conneted to mongodb");
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(bodyParser.urlencoded());


 app.get('/customers/', async (req,res)=>{
     await Customer.find().then((data)=>{
       res.json(data);
     })
  });

  app.get("/:ComplaintID", async(req,res)=>{
        await Customer.findOne({ComplaintID:req.params.ComplaintID})
       .then((data)=>{
         res.json(data);
       })
     });


  app.post("/add",  (req, res) => {
      const formData = {
        ComplaintID: req.body.ComplaintID,
        CustomerName: req.body.CustomerName,
        Description: req.body.Description,
        Status: req.body.Status,
        Date: req.body.Date
      };
        res.send(formData);
       
      Customer.insertMany(formData)
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
     });


   app.delete("/:ComplaintID", async(req,res)=>{
      await Customer.deleteOne({ComplaintID:req.params.ComplaintID})
      res.send("delete successfully.... thank you");
    })

    app.put("/:ComplaintID" , async(req,res)=>{
      await Customer.updateOne({ComplaintID:req.params.ComplaintID},{$set:{
        ComplaintID:req.body.ComplaintID,
        CustomerName:req.body.CustomerName,
        Description:req.body.Description,
        Status:req.body.Status,
        Date:req.body.Date}
      });
      res.json();
      

    
    })

    app.listen(3003,()=>{
    console.log("server started at 3003 ");
    });  

});

