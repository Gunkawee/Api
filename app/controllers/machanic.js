const model = require("../models");
const Location = model.Location;
const Machanic = model.Machanic;
const User = model.User;

module.exports = {
    getMachanic: async (req, res) => {
        // const { lat, long } = req.body;
        // console.log("lat: "+lat);
        // console.log("long: "+long);
        const machanic = await Machanic.findAll({
            include: [
                {
                    model: Location,
                    required: true,
                    as: "location",
                }
            ]
        });
        if (machanic) {
            res.status(200).json(machanic);
        } else {
            res.status(500).send({
                message: `machanic not found`,
            });
        }
    },

    editmachanic: async (req, res) => {
        const { userId, machanicId, fname, lname, phoneNo, locationId, lat, long } = req.body;
        const file = req.files.faceimage;
        let newImage = `${Date.now()}_${file.name}`
        console.log(newImage);                          
        let data0,data, data2, data3;
        const machanic = await Machanic.findOne({
            where: {
                id: machanicId,
            },

        });
        if (file) {
            file.mv("./images/" + newImage, async function (err) {
                if (err) {
                  console.log(err)
                }
              });
              machanic.faceImage = "/images/"+ newImage;
              data0 = await machanic.save();

            //machanic.faceimage
            //โค๊ดเก็บรูป
        }
        else {
            machanic.mfName = fname;
            machanic.mlName = lname;
            data = await machanic.save();
        }
        if (phoneNo) {
            const user = await User.findOne({
                where: {
                    id: userId,
                },
            });
            data2 = await user.save();

        }
        if (lat, long) {
            const location = await Location.findOne({
                where: {
                    id: locationId
                }
            })
            data3 = await location.save();

        }
        if (data || data2 || data3) {
            res.status(200).send({
                message: `edit machanic success`
            });
        } else {
            res.status(500).send({
                message: `edit machanic fail`,
            });
        }
    }

}
