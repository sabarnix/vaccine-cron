const { getVacciceSlots } = require("../services/public-apis");
class Appointment {
  constructor() {}

  getSlots(districtId, date) {
    return getVacciceSlots(districtId, date)
      .then(this.getData)
      .then(this.getSlotsWithAvailableSessions);
  }

  getData(response) {
    return response.data;
  }

  getSlotsWithAvailableSessions({ centers }) {
    return centers.filter((center) =>
      center.sessions.filter(({ available_capacity: avl }) => avl > 0).length
    );
  }
}

module.exports = {
  appointment: new Appointment(),
};
