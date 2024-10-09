import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userModel from "../models/userModel.js";

dotenv.config();
class AuthController {
    static signUp = async (req, res) => {
        try {
            const { username, email, password } = req.body;

            if (!username || !email || !password || username === "" || password === "" || email === "") {
                return res.status(400).send({ 
                    success: false,
                    Message: "All Fields Are Required" });
            } else {
                const userExist = await userModel.findOne({ email: email });

                if (!userExist) {
                    const genSalt = 10;
                    const hashedPassword = await bcryptjs.hash(password, genSalt);  

                    const newUser = new userModel({
                        username: username,
                        email: email,
                        password: hashedPassword,
                    });

                    const savedUser = await newUser.save();
                    if (savedUser) {
                        return res.status(200).send({ 
                            success: true,
                            Message: "User Registered Successfully" });
                    } else {
                        return res.status(400).send({ 
                            success: false,
                            Message: "User Not Registered" });
                    }
                } else {
                    return res.status(400).send({ 
                        success: false,
                        Message: "User Already Exists." });
                }
            }
        } catch (error) {
            return res.status(500).send({ 
                success: false,
                Message: error.message || "An error occurred during registration"});
        }
    }

    static signIn= async (req, res)=>{
        try {
            const {email, password} = req.body;
            if(email && password){
                const isUser= await userModel.findOne({email: email});

                if(!isUser){
                    return res.status(400).send({ 
                        success: false,
                        Message: "User Not found"});
                } else{
                    if(isUser.email === email && await bcryptjs.compare(password, isUser.password)){

                        const token= jwt.sign(
                            {userID: isUser._id},
                            process.env.SECRET_KEY,
                            // {expiresIn : "2d"},
                        );

                        return res.status(200).send({ 
                            success: true,
                            Message: "SignIn Successfull",
                            token
                        });
                    }
                }
            } else{
                return res.status(400).send({ 
                    success: false,
                    Message: "All Fields Are Required"});
            }
        } catch (error) {
            return res.status(500).send({ 
                success: false,
                Message: error.message || "An error occurred during SignIn"});
        }
    }
}

export default AuthController;
