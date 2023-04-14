const express=require('express');
const router=express.Router();
const admin_controller=require('../../controllers/admin/admin_controller');

router.get('/',admin_controller.get);
router.post('/',admin_controller.post);


module.exports=router