const Post =require("../models/Post");
const UserModel = require("../models/User");
const PostModel = require("../models/Post");
const ObjectID = require("mongoose").Types.ObjectId;
module.exports.readPost = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).exec();
    res.send(posts);
  } catch (err) {
    console.log("Error to get data : " + err);
  }
}
module.exports.createPost = async(req, res) => {
  const newPost = new PostModel({
    posterId: req.body.posterId,
    message: req.body.message,
    /* picture: req.file !== null ? "./uploads/posts/" + fileName : "", */
    video: req.body.video,
    likers: [],
    comments: [],
  });
  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }

}
module.exports.updatePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const updatedRecord = {
    message: req.body.message,
  };

  PostModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true }
  )
  .then((docs) => {
    res.send(docs);
  })
  .catch((err) => {
    console.log("Update error : " + err);
  });
}
module.exports.deletePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  PostModel.findByIdAndRemove(req.params.id)
    .then((docs) => {
      if (!docs) {
        return res.status(404).send("Post not found");
      }
      res.send(docs);
    })
    .catch((err) => {
      console.log("Delete error : " + err);
      res.status(500).send("Internal server error");
    });
};