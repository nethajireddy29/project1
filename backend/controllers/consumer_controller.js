const mongoose = require("mongoose");
const Consumer = require("../models/consumerSchema");

const addConsumer = async (req, res) => {
  try {
    const consumer = new Consumer.insertOne(req.body);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

const getConsumer = async (req, res) => {
  try {
    const consumer = new Consumer.findOne(req.body);
    res.json(consumer);
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

const getAllConsumer = async (req, res) => {
  try {
    const consumer = new Consumer.find(req.body);

    res.json(consumer);
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

const removeMultipleConsumer = async (req, res) => {
  try {
    const consumer = new Consumer.delete(req.body);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

const removeConsumer = async (req, res) => {
  try {
    const consumer = new Consumer.deleteOne(req.body);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};
const loginConsumer = async (req, res) => {
  try {
    const consumer = new Consumer.find(req.body);
    if (consumer) {
      const authToken = jwt.sign(temp, jwtSecret);
      return res.json({ success: true, consumerAuthToken: authToken });
    } else {
      res.json({ success: false });
    }
    res.json({ success: true });
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
