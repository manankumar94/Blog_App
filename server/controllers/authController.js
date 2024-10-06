import userModel from "../models/userModel.js";

class AuthController{

    static signUp= async(req, res)=>{
        try {
            const {username, email, password}= req.body;
            
            if(!username || !email || !password || username==="" || password==="" || email===""){
                return res
                        .status(400)
                        .send({Message: "All Fields Are Required"})
            } else {
                const userExist= await userModel.findOne({email: email});
                
                if(!userExist){
            
                    const newUser= new userModel({
                        username: username,
                        email: email,
                        password: password,
                    });

                    const savedUser= await newUser.save();
                    if(savedUser){
                        return res
                                .status(200)
                                .send({Message: "User Registered Successfully"})
                    } else {
                        return res
                                .status(400)
                                .send({Message: "User Not Registered"})
                    }
                } else{
                    return res
                        .status(400)
                        .send({Message: "User Already Exists."})
                }
            }
        } catch (error) {
            return res
                    .status(400)
                    .send({Message: error})
        }
    }
}

export default AuthController;