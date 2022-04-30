const { register,upload,login ,regisuser} = require("../controllers/users");


module.exports = function (app) {
  app.post("/register", register);

  app.get("/login/:email" , login);

  app.put("/upload" , upload );

  app.post("/regisuser" , regisuser);


};