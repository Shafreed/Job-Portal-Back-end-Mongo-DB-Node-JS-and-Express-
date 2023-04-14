const schema= require('../../model/admin_schema');
const bcrypt=require("bcrypt");



module.exports={
    get:(req,res)=>{
        res.send('admin page')
    },
    post: async (req,res)=>{
        const { userName, password,emailId}=req.body
        try {
            const confirmed=  await schema.findOne({
                userName,password
            })
            if(confirmed){
                return res.status(401).json({error:"admin already exists"})
            }
            const hashpassword =bcrypt.hash(req.body.password,10);
            const newAdmin= new schema({userName, emailId,hashpassword})
            // res.send(password)
            // console.log(password);
            // newAdmin.save()
            return res.status(200).json({Message:"succuss"})



        } catch (error) {
            res.send("error")
        }
     
    }
}