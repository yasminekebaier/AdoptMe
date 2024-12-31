const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const postRoutes = require("./routes/posts") 
const userRoute = require("./routes/users")
/*  const centreRoute = require("./routes/centres")  */
dotenv.config();
const {checkUser, requireAuth} = require('./middelware/authmiddelware');
mongoose.connect("mongodb://127.0.0.1:27017/PFAdb" ,{ useNewUrlParser:true,
    useUnifiedTopology:true,})
.then(()=> 
console.log("DB Connection Successfull !"))
.catch((err) => console.log(err));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
//jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth , (req, res) => {
    res.status(200).send(res.locals.user._id)
  })
//routes
app.use("/api/post",postRoutes) ;
 app.use("/api/users",userRoute) 
/*  app.use("/api/centres",centreRoute) */ 
//server
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})
