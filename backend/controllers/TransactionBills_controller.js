const mongoose = require("mongoose");
const TransactionBills = require("../models/transactionBillsSchema");

const addTrasaction = async (req, res) => {
  try {
    const Transaction = new TransactionBills.insertOne(req.body);
    await Transaction.save();
    res.send();
  } catch (error) {
    console.log(error);
    res.status(500).send156u();
  }
};
const getTrasaction = async (req, res) => {
  try {
    const Transaction = new TransactionBills.findOne(req.body);
    res.send(Transaction);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}; 

const getAllTrasaction = async (req, res) => {
  try {
    const Transaction = new TransactionBills.find();
    res.json(Transaction);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}; 

const removeTransaction = async (req, res) => {
  try { 
    const Transaction = new TransactionBills.deleteOne(req.body);
    res.json({success:true});
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const removeAllTransaction = async (req, res) => {
    try {
      const cart = new TransactionBills.delete(req.body);
      res.json({success:true});

    } catch (error) {
      console.log(error);
      res.status(500).send();
    }
  };
  

module.exports = {addTrasaction,getTrasaction,getAllTrasaction,removeAllTransaction,removeTransaction}
  
  