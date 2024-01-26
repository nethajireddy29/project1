const mongoose = require("mongoose");
const Consumer = require("../models/consumerSchema");
const jwt = require("jsonwebtoken");
const jwtSecret = "i am the devil"
const addConsumer = async (req, res) => {
  try {
    const consumer = await Consumer.create(req.body);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

const getConsumer = async (req, res) => {
  try {
    const consumer =  Consumer.findOne(req.body);
    res.json(consumer);
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

const getAllConsumer = async (req, res) => {
  try {
    const consumer =  Consumer.find(req.body);

    res.json(consumer);
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

const removeMultipleConsumer = async (req, res) => {
  try {
    const consumer =  Consumer.delete(req.body);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

const removeConsumer = async (req, res) => {
  try {
    const consumer =  Consumer.deleteOne(req.body);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};
const loginConsumer = async (req, res) => {
  try {
    const consumer =  await Consumer.findOne(req.body);
    console.log("ifugwqi")
    console.log("login",consumer)
    if (consumer) {
      const authToken = jwt.sign(req.body.id, jwtSecret);
      return res.json({ success: true, consumerAuthToken: authToken });
    } else {
      res.json({ success: false })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

module.exports = {
  addConsumer,
  getConsumer,
  getAllConsumer,
  removeMultipleConsumer,
  removeConsumer,
  loginConsumer
};
