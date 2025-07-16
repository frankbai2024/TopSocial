const axios = require("axios");
const USER_PROFILES_API_URL = "http://localhost:8000/userProfiles";

const getUserProfiles = async function (req, res) {
  //res.send("test successfully");
  try {
    const response = await axios.get(USER_PROFILES_API_URL);
    const userProfiles = response.data;
    res.status(200).json({
      msg: "get userProfiles successfully",
      data: userProfiles,
    });
  } catch (error) {
    console.error("error:", error);
  }
};

module.exports = { getUserProfiles };
