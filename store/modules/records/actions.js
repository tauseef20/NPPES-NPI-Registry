import axios from "axios";
export default {
  async searchData({ commit }, payload) {
    console.log("This is Payload", payload);
    const response = await axios.get(
      `https://npiregistry.cms.hhs.gov/api/?first_name=${payload.firstName}&&last_name=${payload.lastName}&&number=${payload.NPI}&&desc=${payload.description}&version=2.1`
    );
    console.log("This is Search Action Data", response.data.results);
    debugger;
    commit("SEARCH_DATA", response.data.results);
  },
  async detailData({ commit }, payload) {
    console.log("This is Payload", payload);
    const response = await axios.get(
      `https://npiregistry.cms.hhs.gov/api/?number=${payload.number}&version=2.1`
    );
    console.log("This is Response", response.data.results);
    debugger;
    commit("DETAILS_DATA", response.data.results);
  },
};
