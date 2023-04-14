const schema=require('../../model/employerRegistration_schema');
const bcrypt=require("bcrypt");
const saltRounds=10;

module.exports={
    get: (req,res)=>{
        res.send('employer page')
    },
    post:async (req,res)=>{
        const password= await bcrypt.hash(req.body.password,saltRounds)
       const sign= await schema.insertMany({
            userName:req.body.userName,
            emaild:req.body.emaild,
            phoneNumber:req.body.phoneNumber,
            password:password
        })
        res.send(req.body)
        console.log(sign);
    },

    get:(req,res)=>{
        res.send("employer logged in");
        console.log('employer logged in');
    },

    loginpost:async (req,res)=>{
      try {
        const confirmed= await schema.find({
            userName:req.body.userName
        })
        bcrypt.compare(req.body.password,confirmed[0].password).then((result)=>{
            if(result){
                res.send('login succuss')
                console.log("login succuss");
            }else{
                res.send("invalid")
                console.log("invalid");
            }
        })
      } catch (error) {
        res.send('login invalid')
      }


    }
    
}