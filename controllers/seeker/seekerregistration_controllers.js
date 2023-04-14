const schema=require("../../model/seekerRegistration_schema")
const  bcrypt= require("bcrypt");
const saltRounds = 10;
const otp=require("otp-generator")
otp.generate(6, { upperCaseAlphabets: false, specialChars: false });
const jwt=require("jsonwebtoken");


module.exports={
//-------------------for registration--------------//
    get:(req,res)=>{
        res.send('Seeker Page')
    },
    post:async (req,res)=>{
        const password= await bcrypt.hash(req.body.password,saltRounds);

        const sign=await schema.insertMany({
            userName:req.body.userName,
            emaild:req.body.emaild,
            phoneNumber:req.body.phoneNumber,
            password: password,
        })
        res.send(req.body);
        console.log(req.body);
    },
    //----------- seeker Login-------------------//
    get:(req,res)=>{
        res.send('seeker LoginPage...........');
        console.log(req.body);
    },
    loginpost:async (req,res)=>{
     try {
        // console.log(req.body);
        const seeker = await schema.find({
            userName: req.body.userName,
            })
            if(!seeker){
             res.status(401).json({error:"invalid user Name or password"})
            }else{
                
            // console.log(seeker);
            const result=bcrypt.compare(req.body.password,seeker[0].password).then((result)=>{
                // console.log(result);
                if(result){
                    const token = jwt.sign({id:seeker._id},"Shafs_was_confused")
                    res.cookie("seeker",token,{httpOnly:true});
                    res.send('login Succuss')
                    console.log('login Success');
                }else{
                    res.send('Invalid password or User Name');
                    console.log("login not success");
                }
             })
            }
        


     } catch (error) {
        res.send('Invalid Login')
     }},

      
     put:(req,res)=>{
        try {
            schema.findOne({

            })


            

        } catch (error) {
            
        }
     }


}



