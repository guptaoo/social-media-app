// const router = require("express").Router();
// const User= require("../modules/User");

// //register
// router.get("/",(req,res)=>{
//     res.send("hey this is auth api")
// })

// router.post("/register",async (req,res)=>{
//     const user = await new User({
//         username:"Naman",
//         email:"namangupta07@gmail.com",
//         password:"123456"
//     })
//   await user.save();
//   res.send("ok");
// });
// module.exports = router



const router = require("express").Router();
const User = require("../modules/User");

// Welcome route
router.get("/", (req, res) => {
    res.send("Hey, this is the auth API");
});

// Register route (GET request)
router.get("/register", async (req, res) => {
    // Handle registration logic here
    res.send("Registration form or message");
});

// Handle actual registration (POST request)
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = new User({
            username:"Naman",
            email:"namangupta037@gmail.com",
            password:"123456"
        });

        await user.save();
        res.send("Registration successful");
    } catch (error) {
        res.status(500).send("Error registering user");
    }
});

router.post("/register", async (req,res)=>{
const newUser = new User({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
});
try{
    const user = await newUser.save();
    res.status(200).json(user);
}catch(e){
    console.log(e);  
}
})
module.exports = router;
