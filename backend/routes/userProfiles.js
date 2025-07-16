const express = require("express");
const { getUserProfiles } = require("../controllers/userProfilesController");
const userProfilesRouter = express.Router();

//get user profiles /api/userProfiles/
userProfilesRouter.get("/", getUserProfiles);

//get user profile by id/api/userProfiles:userid

//patch update user profile by id /api//userProfiles:userid

module.exports = userProfilesRouter;
