
const model = require("../models");
const Appointment = model.Appointment;
const AppointmentHistory = model.AppointmentHistory;
const Location = model.Location;

module.exports = {
  createappointment: async (req, res) => {
    const { latitude, longitude } = req.body;
    let locationId;
    if (latitude && longitude) {
      const createLocation = await Location.create({ latitude, longitude });
      locationId = createLocation.id;
    }
    const createAttribute = {
      date: req.body.date,
      time: req.body.time,
      jobDescription: req.body.jobDescription,
      locationId,
      userAppointment: {
        userId: req.body.userAppointment.userId,
        status: req.body.userAppointment.status,
      }
    };
    const data = await Appointment.create(createAttribute, {
      include: { model: AppointmentHistory, as: "userAppointment", require: true },
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
      where: { userId: req.params.userId, appointmentId: req.body.appointmentId },
      include: [
        {
          model: Appointment,
          require: true,
          as: "userAppointment",
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
