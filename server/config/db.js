import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI= process.env.MONGODB_URI;

const connectDB= async() =>{
    try {
        const connection= await mongoose.connect(URI);
        console.log("Connected Succesfully with Database (blogify)");
    } catch (error) {
        console.log("Database Connection Failed" + error);
        process.exit(0);
    }
}

export default connectDB;