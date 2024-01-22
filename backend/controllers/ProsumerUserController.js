const express = require("express");
// const router = express.Router();
const { ProsumerUser } = require("../models/prosumerUserSchema");
const { ProducerUser } = require("../models/producerUserSchema");
const { GstUser } = require("../models/gstUserSchema");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const Salt = crypto.randomBytes(16).toString("hex");
const pepper = "nsrssl45";
const encryptionKey =
  "00112233445566778899AABBCCDDEEFF00112233445566778899AABBCCDDEEFF";

// Ensure the key is 32 bytes long
if (Buffer.from(encryptionKey, "hex").length !== 32) {
  console.error("Invalid key length. Please use a 32-byte key for AES-256.");
  process.exit(1); // Exit the program due to an error
}

function hashPassword(password) {
  return crypto
    .pbkdf2Sync(password + pepper, Salt, 10000, 64, "sha512")
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

const createProsumerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const hashedPassword = hashPassword(req.body.password);
    const encryptedPassword = encryptAES(hashedPassword);

    const username = req.body.gst_number;
    const userData = await ProsumerUser.findOne({ gst_number: username });
    const userData2 = await GstUser.findOne({ gst_number: username });

    const username1 = req.body.registrant;
    console.log(username1);
    const registrantData = await ProducerUser.findOne({ name: username1 });

    if (userData || !userData2) {
      return res.json({
        success: false,
        message: "GST Number already registered!",
      });
    }

    if (registrantData) {
      await ProsumerUser.create({
        registrant: req.body.registrant,
        gst_number: req.body.gst_number,
        password: encryptedPassword
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

const ProsumerLogIn = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const username = req.body.gst_number;
    const userData = await ProsumerUser.findOne({ gst_number: username });

    if (!userData) {
      return res.status(400).json({
        success: false,
        message: "Try logging with correct GST Number",
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

    return res.json({
      success: true,
      authToken: authToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { createProsumerUser, ProsumerLogIn };