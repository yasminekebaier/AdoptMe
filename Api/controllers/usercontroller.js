const UserModel = require("../models/User");
const ObjectID = require("mongoose").Types.ObjectId;


module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};
module.exports.userInfo = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    UserModel.findById(req.params.id).select("-password")
      .then(docs => {
        res.send(docs);
      })
      .catch(err => {
        console.log("ID unknown : " + err);
        res.status(500).send("Internal Server Error");
      });
  };
  module.exports.updateUser = async(req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
      return res.status(400).send("ID unknown : " + req.params.id);
    }
  
    try {
      const updatedUser = await UserModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { bio: req.body.bio } },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
  
      return res.send(updatedUser);
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
  module.exports.deleteUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
      return res.status(400).send("ID unknown : " + req.params.id);
    }
  
    try {
      const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
  
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      return res.status(200).json({ message: "Successfully deleted" });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  };
  
/* module.exports.userInfo = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    UserModel.findById(req.params.id, (err, docs) => {
      if (!err) res.send(docs);
      else console.log("ID unknown : " + err);
    }).select("-password");
  }; */