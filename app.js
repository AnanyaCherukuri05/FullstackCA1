const express = require('express')
const dotenv = require('dotenv')
const port = process.env.port || 7000
const app = express();

app.use(express.json());
dotenv.config();

app.get("/", async(req,res)=>{
    res.send("Hello World")
})

app.post("/register",async(req,res)=>{
    try {
      const {username, email , password , dateOfBirth} = req.body;  
      if(!username){
        res.status(401).json({message :"Username cannot be empty"})
      }

      if (!email){
        res.status(401).json({message:"Email cannot be empty"})
      }

      if(password.length < 8 || password.length > 16){
        res.status(401).json({message:"Password length should be greater than 8 or less than or equal to 16"})
      }
      
    } catch (error) {
        res.status(500).json({message:"Internal server error", error: error.message});
    }

})


app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);
})