const { register,upload,login ,regisuser} = require("../controllers/users");
const { getMachanic,editmachanic} = require("../controllers/machanic");
const { createappointment,getAppointment, updateStatusAppointment} = require("../controllers/appointment");

module.exports = function (app) {
  app.post("/register", register);

  app.get("/login/:email" , login);

  app.put("/upload" , upload );

  app.post("/regisuser" , regisuser);

  app.get("/getMachanic", getMachanic);

  app.put("/editmachanic", editmachanic);

  app.post("/createappointment", createappointment);

  app.get("/getAppointment/:machanicId", getAppointment);

  app.post("/updateStatusAppointment", updateStatusAppointment);
};