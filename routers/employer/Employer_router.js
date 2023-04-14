const express=require("express");
const router=express.Router();
const employer_controller=require('../../controllers/employer/employer_controller')


router.get('/reg',employer_controller.get);
router.post('/reg',employer_controller.post);

router.get('/log',employer_controller.get);
router.post('/log',employer_controller.post)
router.post('/log',employer_controller.loginpost)




module.exports=router