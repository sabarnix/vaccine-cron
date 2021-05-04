const axios = require('axios');
const { API_ROOT, STATE, DISTRICTS, AVAILABLE_SLOTS_BY_DISTRICT } = require('../constants');
console.log(API_ROOT, STATE, DISTRICTS, AVAILABLE_SLOTS_BY_DISTRICT)

const cowinPublic = axios.create();

cowinPublic.defaults.baseURL = API_ROOT;

const getStates = () => cowinPublic(STATE);

const getDistricts = (stateID) => cowinPublic(`${DISTRICTS}/${stateID}`);

const getVacciceSlots = (districtId, date) => cowinPublic(`${AVAILABLE_SLOTS_BY_DISTRICT}`, {
    params: {
        district_id: districtId,
        date,
    }
});

module.exports = {
    getStates,
    getDistricts,
    getVacciceSlots,
};
