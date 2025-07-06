import mongoose from "mongoose";
import express from "express";
import  todo  from "./models/todo.js";
let conn=await mongoose.connect("mongodb://localhost:27017/todo");
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    const Todo=new todo({
        title:"Learn Mongoose",
        description:"Learn how to use mongoose with express",
        completed:false,
        days:7,
    });
    Todo.save()
    res.send("Hello World");
})
app.get('/todos',async (req,res)=>{
    const todos=await todo.findOne({});
    res.json({title:todos.title, description:todos.description, completed:todos.completed, days:todos.days});
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
