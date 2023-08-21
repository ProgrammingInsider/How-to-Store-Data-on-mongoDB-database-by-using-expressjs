import Profile from '../Schema/schema.js'
import bcrypt from 'bcryptjs'


export const insertData = async(req,res) => {
    const {username,email,password,phonenumber} = req.body
    // Encnrypt Password
    
    // Checking if there is a registeration by the email
    try{
      var checkExistance = await Profile.findOne({email})
    }catch(error){
        res.status(500).json({msg:error})
    }
   
    if(checkExistance == null){
        // Store data on database
        
          try{
            const insertedData = await Profile.create({username,email,password,phonenumber})
            res.status(200).json({value:insertedData,msg:"Registered Successfully"})
          }catch(error){
            res.status(500).json({msg:error})
          }
    }else{
        res.json({value:null,msg:"There is a registeration by this email"})
    }
}
