import express from "express";
import connectDB from "./config/db.js";


const app = express();
const PORT= 6969;

connectDB().then( ()=>{
    app.listen(PORT, (err)=>{
        if(err) console.log(err);
        else console.log(`Server is Running on PORT ${PORT}`);
    })
})
