const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/todolistDb').then(() => console.log("Connected to MongoDB"));

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));


const List = require("./models/List");


app.post("/list/new",(req,res) => {
    const list = new List({
        task:req.body.task
    })

    list.save()
      .then((data)=>{
            res.json(data);
        })
      .catch((error)=>{
            console.log(error);
        })
});


app.get("/list",(req,res)=>{
    List.find()
        .then((data)=>{
            res.json(data);
        })
        .catch((error)=>{
            console.log(err);
        });
});

app.delete("/list/delete/:id",(req,res)=>{
    const id = req.params.id;
    List.findByIdAndDelete(id)
        .then((data)=>{
            res.json(data);
        })
        .catch((error)=>{
            console.log(error);
        });
})

app.get("/list/complete/:id", async (req,res)=>{
    const list = await List.findById(req.params.id);
    list.completed = !list.completed;
    list.save()
        .then((result)=>{
            res.json(result); 
        })
        .catch((error)=>{
            console.log(error);
        })
});


app.listen("3001",()=>{
    console.log("listening on port 3001");
})