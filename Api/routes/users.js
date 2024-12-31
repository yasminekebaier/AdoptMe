const router = require("express").Router();
const userController = require("../controllers/usercontroller");
const authController = require("../controllers/authcontroller");
const uploadcontroller = require("../controllers/uploadcontroller");
const multer = require("multer");
const upload = multer();
// auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);
/* router.post("/logout", authController.logout); */
//user DB
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id",userController.updateUser);
router.delete("/:id", userController.deleteUser);
//upload
router.post('/upload',upload.single("file"),uploadcontroller.uploadProfil)



module.exports = router

//UPDATE
/* router.put("/:id",verify,async (req,res)=>{
    if(req.user.id ===req.params.id || req.User.isAdmin){
if(req.body.password){
    req.body.password=CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY).toString()

}
try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id,
        { $set:req.body,},{new:true});
        res.status(200).json(updatedUser);
}catch(err){
res.status(500).json(err)
}
    }else{
        res.status(403).json("You can update only your account!")
    }
}); */
//DELETE
//GET
//GET ALL 
//module.exports = router