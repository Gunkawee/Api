
const model = require("../models");
const Appointment = model.Appointment;
const AppointmentHistory = model.AppointmentHistory;
const Location = model.Location;
const User = model.User;

module.exports = {
  createappointment: async (req, res) => {
    const { latitude, longitude , userId} = req.body;
    let locationId;
    if (latitude && longitude) {
      const createLocation = await Location.create({ latitude, longitude , userId});
      locationId = createLocation.id;
    }
    const createAttribute = {
      date: req.body.date,
      time: req.body.time,
      jobDescription: req.body.jobDescription,
      machanicId: req.body.machanicId,
      locationId, 
      Appointment: {
        userId: req.body.userId,
        status: req.body.status,
      }
    };
    const data = await Appointment.create(createAttribute, {
      include: { model: AppointmentHistory, as: "Appointment", require: true },
    });
    if (data) {
      res.status(200).send({
        message: `Success`
      });
    } else {
      res.status(500).send({
        message: `Can't Create Appointment`,
      });
    }
  },

  updateStatusAppointment: async (req, res) => {
    const userId = req.body;
    const userAppointment = req.body;
    const status = req.body;
    const machanic = await machanic.findOne({
      where: {
        id: machanic,
      },
    });
    if (status) {
      const AppointmentHistory = await AppointmentHistory.findOne
    }
  },
  getAppointment: async (req, res) => {

    const data = await AppointmentHistory.findAll({
      where: { status: 'USER_APPOINT'},
      include: [
        {
          model: User,
          require: true,
          as: "user"
        },
        {
          model: Appointment,
          require: true,
          where: { machanicId: req.params.machanicId},
          as: "Appointment",
          include: [
            {
              model: Location,
              require: true,
              as: "location"
            }
          ]
        },

      ]
    });
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(500).send({
        message: `Appointment not found`,
      });
    }

  }
}
