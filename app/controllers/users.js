const { request } = require("express");
const res = require("express/lib/response");
const model = require("../models");
const User = model.User;
const Machanic = model.Machanic;
const Location = model.Location;

module.exports = {
  register: async (req, res) => {
    const { latitude, longitude } = req.body;
    let locationId;
    const file = req.files.file;
    let newImage = `${Date.now()}_${file.name}`
    console.log(newImage);
   

    if (latitude && longitude) {
      const createLocation = await Location.create({ latitude, longitude });
      locationId = createLocation.id;
    }
    const createAttribute = {
      uEmail: req.body.uEmail,
      uName: req.body.uName,
      uDisplay: "/images/"+ newImage,
      uPhoneNo: req.body.uPhoneNo,
      role: req.body.role,
      userMechanic: {
        idCard: req.body.userMechanic.idCard,
        mfName: req.body.userMechanic.mfName,
        mlName: req.body.userMechanic.mlName,
        workPlaceImage: req.body.userMechanic.workPlaceImage,
        faceImage: req.body.userMechanic.faceImage,
        workPlace: req.body.userMechanic.workPlace,
        locationId,
      },
    };
    const data = await User.create(createAttribute, {
      include: { model: Machanic, as: "userMechanic" },
    });
    if(data){
      file.mv("./images/" + newImage, async function (err) {
        if (err) {
          console.log(err)
        }
      });
      return res.status(200).json(data);
    }
   
  },
  upload: async (req, res) => {
    const file = req.files.file;
    let newImage = `${Date.now()}_${file.name}`
    console.log(newImage);
    file.mv("./images/" + newImage, async function (err) {
      if (err) {
        console.log(err)
      }
    });
  },
  
  login: async (req,res) => {
    const email = req.params.email;
    const user = await User.findOne({
      where: {uEmail:email},
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(500).send({
        message: `user not found`,
      });
    }
  },
  regisuser: async (req,res) => {
    const data = await User.create({
      uEmail: req.body.uEmail,
      uName: req.body.uName,
      uDisplay: req.body.uDisplay,
      role:"USER"
    });
    if(data){
      res.status(200).json(data);
    }
    else
    {
      res.status(500).send({
        message: 'Can not register' 
      });
    }
  }
};


