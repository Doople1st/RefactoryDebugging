const axios = require("axios");
const config = require("../config");

function getUserInfo(token) {
    axios({
        method: "get",
        url: `${config.apiUrl}/user`,
        headers: {
          Authorization: "token " + token,
        },
      }).then((response) => {
        console.log(response.data);
        return response.data;
      });
  }

module.exports = {
  getUserInfo:getUserInfo
}
