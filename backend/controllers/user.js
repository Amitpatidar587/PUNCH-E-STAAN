const User=require('../model/user')


module.exports.register=async (req, res) => {
    try {
      const { username,category, contact, name, password } = req.body;
      console.log(req.body)
      const newUser=new User({username,contact,category,name})
      const registerUser= await User.register(newUser,password);
      console.log(registerUser)
      res.json({message:'Welcome to Punch-E-Staan'});
    } catch (error) {
      console.log(error);
      res.json({message:"error"})
    }
  }

module.exports.login= async (req, res) => {
    try {
       console.log(req.body);
       const {username}=req.body
       const user=await User.findOne({username});
       console.log("user---=>",user);
      res.json(user)
      
    } catch (error) {
      console.log(error);
      throw new error('login failed')
    }
  }
