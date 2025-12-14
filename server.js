import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.json({msg:"API hit"});
})

const PORT = 8000

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}. ✅` );
})
