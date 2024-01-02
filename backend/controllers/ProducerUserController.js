const express = require("express");
// const router = express.Router();
const {ProducerUser} = require("../models/producerUserSchema");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const jwtSecret = "MynameisEndtoEndYoutubeChannel$#";

// router.post(
//   "/CreateUser",
//   [
//     body("registrant", "Incorrect Registrant").isLength({ min: 5 }),
//     body("name", "Incorrect Name").isLength({ min: 5 }),
//     body("password", "Incorrect Password").isLength({ min: 8 }),
//     body("designation", "Invalid Designation").isIn([
//       "Chief Engineer",
//       "Superintendent Engineer",
//       "Divisional Engineer",
//       "Assistant Director",
//       "Assistant Engineer",
//       "Assistant Sub-Engineer",
//       "Foreman",
//       "Line Inspector",
//       "Lineman",
//       "Junior Lineman",
//       "Assistant Lineman",
//     ]),
//   ],
const createProducerUser =   async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const salt = await bcrypt.genSalt(10);
      const secured_password = await bcrypt.hash(req.body.password, salt);

      const username = req.body.name;
      const userData = await ProducerUser.findOne({ name:username });

      const username1 = req.body.registrant;
      console.log(username1)
      const registrantData = await ProducerUser.findOne({ name: username1 });
      if (userData) {
        return res.json({
          success: false,
          message: "Username already exists!",
        });
      }

      if (registrantData) {
        await ProducerUser.create({
          registrant: req.body.registrant,
          name: req.body.name,
          password: secured_password,
          designation: req.body.designation,
        });

        return res.json({ success: true });
      } else {
        console.log(registrantData)
        return res.json({
          success: false,
          message: "Registering User not found!",
        });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }


// router.post(
//   "/LoginUser",
//   [
//     body("name", "Incorrect Name").isLength({ min: 5 }),
//     body("password", "Incorrect Password").isLength({ min: 8 }),
//     body("designation", "Invalid Designation").isIn([
//       "Chief Engineer",
//       "Superintendent Engineer",
//       "Divisional Engineer",
//       "Assistant Director",
//       "Assistant Engineer",
//       "Assistant Sub-Engineer",
//       "Foreman",
//       "Line Inspector",
//       "Lineman",
//       "Junior Lineman",
//       "Assistant Lineman",
//     ]),
//   ],
const ProducerLogIn =  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const username = req.body.name;
      const userData = await ProducerUser.findOne({  name: username });

      if (!userData) {
        return res.status(400).json({
          success: false,
          message: "Try logging with correct Username",
        });
      }

      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );

      if (!pwdCompare) {
        return res.status(400).json({
          success: false,
          message: "Try logging with correct password",
        });
      }

      const data = {
        user: {
          id: userData.id,
        },
      };

      const authToken = jwt.sign(data, jwtSecret);
      let classification;
      switch (userData.designation) {
        case "Chief Engineer":
        case "Superintendent Engineer":
        case "Divisional Engineer":
          classification = "Case 1";
          break;
        case "Assistant Director":
        case "Assistant Engineer":
        case "Assistant Sub-Engineer":
          classification = "Case 2";
          break;
        case "Foreman":
        case "Line Inspector":
        case "Lineman":
        case "Junior Lineman":
        case "Assistant Lineman":
          classification = "Case 3";
          break;
        default:
          classification = "Unknown Classification";
      }

      return res.json({
        success: true,
        authToken: authToken,
        classification: classification,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }

  module.exports ={createProducerUser,ProducerLogIn}
