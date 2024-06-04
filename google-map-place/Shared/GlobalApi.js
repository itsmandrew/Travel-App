const { default: axios } = require("axios");

const getGooglePlace = () =>
  axios.get("/api/google-place?" + "category=chinese");

export default {
  getGooglePlace,
};
