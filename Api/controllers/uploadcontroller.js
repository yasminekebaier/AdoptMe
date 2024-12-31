const UserModel = require("../models/User");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);
module.exports.uploadProfil = async (req, res) => {
    try {
        console.log('req.file:', req.file);
        console.log('req.body:', req.body);
      if (
        req.file.detectedMimeType != "image/jpg" &&
        req.file.detectedMimeType != "image/png" &&
        req.file.detectedMimeType != "image/jpeg"
      ) {
        throw new Error("Invalid file type.");
      }
  
      if (req.file.size > 500000) {
        throw new Error("File size exceeds the limit.");
      }
  
      const fileName = req.file.originalname;
  
      await pipeline(
        req.file.stream,
        fs.createWriteStream(`${__dirname}/../client/public/uploads/profil/${fileName}`)
      );
      try {
        await UserModel.findByIdAndUpdate(
          req.body.userId,
          { $set : {picture: "./uploads/profil/" + fileName}},
          { new: true, upsert: true, setDefaultsOnInsert: true},
          (err, docs) => {
            if (!err) return res.send(docs);
            else return res.status(500).send({ message: err });
          }
        );
      } catch (err) {
        return res.status(500).send({ message: err });
      }
  
      return res.status(200).json({ message: "File uploaded successfully." });
    } catch (err) {
      return res.status(400).json({ message: err.message });
      
    }
    
  };