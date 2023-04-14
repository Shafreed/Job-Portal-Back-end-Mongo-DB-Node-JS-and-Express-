const express = require("express");
const app = express();
const port = 3003;
const mongoose = require('mongoose') 
const bodyparser=require('body-parser')

app.use(express.urlencoded({ extended: false }))
app.use(bodyparser.json());
//--------------------for seeker--------------------//
const seekerRegisRouter=require('./routers/seeker/seekerRegistration_router');
app.use('/seReg',seekerRegisRouter);
//---------------------- seeker end-------------------//

//------------for Employer-----------------//
const employerregisRouter=require('./routers/employer/Employer_router');
app.use('/emReg',employerregisRouter);
//------------------employer end-------------//

//-------------for Admin----------------------//
const adminRouter=require('./routers/admin/admin_router');
app.use('/admin',adminRouter);








app.listen(port, () =>{ console.log('connected') })
mongoose.connect('mongodb://127.0.0.1:27017/jobporta').then(() => {console.log('server connected ') }).catch(() => { console.log('nt connected'); })

