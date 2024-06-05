const { default: axios } = require("axios");

const getGooglePlace = (category, radius) =>
  axios.get(
    "/api/google-place?" +
      "category=" +
      category +
      "&radius=" +
      radius +
      "&lat=33.6662385&lng=-117.8515785"
  );

export default {
  getGooglePlace,
};
