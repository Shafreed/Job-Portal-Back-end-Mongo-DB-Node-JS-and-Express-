const express=require("express");
const router=express.Router();
const seeker_controller=require('../../controllers/seeker/seekerregistration_controllers')

router.get('/Reg',seeker_controller.get);
router.post('/Reg',seeker_controller.post)


router.get('/log',seeker_controller.get);
router.post('/lo',seeker_controller.post);
router.post('/log',seeker_controller.loginpost);


module.exports=router


