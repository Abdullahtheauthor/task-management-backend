const User = require('../Schemas/user_model')
const bcrypt = require('bcrypt');

async function signup (req,res){
    const { username, email, password } = req.body;

  try {
    // Validate request
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function signin(req,res){
    const { email, password } = req.body;

  try {
    // Validate request
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare hashed passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'User signed in successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function get_user_id(username){
    try{
        const user = await User.findOne({username: username});
        if (!user){
            console.log("user not found")
            return null
        }
        console.log(user)
        console.log("userID : " , user._id)
        return user._id
    }
    catch(error) {
        console.error(error);
    }
    
}

module.exports = {
    signin,
    signup,
    get_user_id
}


// async function create_user (req,res){
//     try{
//         const data = req.body;
        
//         let user = await user_model.findOne({username : data.username})
//         console.log(user)

//         if (user) res.status(409).json({message: "user already exist"})
        
//         await user_model.create(data);
//         res.status(201).json({message:'user created successfully'});
//     }catch(error){
//         res.status(500).json({message:error})
//     }
// }

// async function login_user(req , res){
//     try{
//         const data = req.body
//         let user = await user_model.findOne({username : data.username})
        
//         if (!user || data.password !== user.password){
//             res.status(400).json({message: "invalid credentinals"})
//         } 

//         res.status(200).json({message:'user loged in successfully' , username : user.username});
//     }catch(error){
//         res.status(500).json({message:error})
//     }
// }