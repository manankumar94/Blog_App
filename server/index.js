import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/userRoutes.js";


const app = express();
const PORT= 6969;

app.use(express.json());

// for testing only
app.use("/", router);

connectDB().then( ()=>{
    app.listen(PORT, (err)=>{
        if(err) console.log(err);
        else console.log(`Server is Running on PORT ${PORT}`);
    })
})
