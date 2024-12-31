const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');
module.exports.checkUser =(req,res,next) =>{
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.SECRET_TOkEN
            , async (err, decodedToken) => {
                if (err) {
                    res.locals.user = null;
                    res.cookie("jwt", "", { maxAge: 1 });
                    next();
                  } else {
                    let user = await UserModel.findById(decodedToken.id);
                    res.locals.user = user;
                    next();
                  }

        })
    }else {
        res.locals.user = null;
        next();
      }
}
module.exports.requireAuth = (req, res, next)=>{
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.SECRET_TOkEN, async (err, decodedToken) => {
          if (err) {
            console.log(err);
            res.send(200).json('no token')
          } else {
            console.log(decodedToken.id);
            next();
          }
        });
      } else {
        console.log('No token');
      }

}