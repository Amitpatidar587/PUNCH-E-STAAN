const express=require('express')
const router=express.Router();
const passport=require('passport');
const {login,register}=require('../controllers/user');



router.post('/login',passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,

  }),login);

router.post("/register",register );

module.exports=router;