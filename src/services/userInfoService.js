const axios = require("axios");
const { response } = require("express");
const config = require("../config");

async function getUserInfo(token) {
    let response = await axios({
        method: "get",
        url: `${config.apiUrl}/user`,
        headers: {
          Authorization: "token " + token,
        },
     })
     console.log("From user");
     console.log(response.data);
     return response.data;
  }

module.exports = {
  getUserInfo:getUserInfo
}
