const express = require("express");
// const router = express.Router();
const { ProducerUser } = require("../models/producerUserSchema");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const Salt = crypto.randomBytes(16).toString("hex");
const encryptionKey =
  "00112233445566778899AABBCCDDEEFF00112233445566778899AABBCCDDEEFF";

// Ensure the key is 32 bytes long
if (Buffer.from(encryptionKey, "hex").length !== 32) {
  console.error("Invalid key length. Please use a 32-byte key for AES-256.");
  process.exit(1); // Exit the program due to an error
}

function hashPassword(password) {
  return crypto
    .pbkdf2Sync(password, Salt, 10000, 64, "sha512")
    .toString("hex");
}

function encryptAES(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(encryptionKey, "hex"),
    iv
  );
  let encrypted = cipher.update(text, "utf-8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + encrypted;
}

function decryptAES(encryptedText) {
  const iv = Buffer.from(encryptedText.slice(0, 32), "hex");
  const encryptedData = encryptedText.slice(32);
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(encryptionKey, "hex"),
    iv
  );
  let decrypted = decipher.update(encryptedData, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
}
// const jwtSecret = "MynameisEndtoEndYoutubeChannel$#";

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
const createProducerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const hashedPassword = hashPassword(req.body.password);
    const encryptedPassword = encryptAES(hashedPassword);

    const username = req.body.name;
    const userData = await ProducerUser.findOne({ name: username });

    const username1 = req.body.registrant;
    console.log(username1);
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
        password: encryptedPassword,
        designation: req.body.designation,
      });

      return res.json({ success: true });
    } else {
      console.log(registrantData);
      return res.json({
        success: false,
        message: "Registering User not found!",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

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
const ProducerLogIn = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const username = req.body.name;
    const userData = await ProducerUser.findOne({ name: username });

    if (!userData) {
      return res.status(400).json({
        success: false,
        message: "Try logging with correct Username",
      });
    }

    const hashedPassword = hashPassword(req.body.password);
    const decryptedPassword = decryptAES(userData.password);

    if (hashedPassword !== decryptedPassword) {
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

    const authToken = jwt.sign(data, encryptionKey);
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
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


module.exports = { createProducerUser, ProducerLogIn };