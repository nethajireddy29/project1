const mongoose = require("mongoose");
const TransactionBills = require("../models/transactionBillsSchema");

const addTrasaction = async (req, res) => {
  try {
    const Transaction = new TransactionBills.create(req.body);
    await Transaction.save();
    res.send();
  } catch (error) {
    console.log(error);
    res.status(500).send156u();
  }
};
const getTrasaction = async (req, res) => {
  try {
    const Transaction = await TransactionBills.findOne(req.body);
    res.send(Transaction);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}; 

const getAllTrasaction = async (req, res) => {
  try {
    const Transaction = await TransactionBills.find();
    res.json(Transaction);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}; 

const removeTransaction = async (req, res) => {
  try { 
    const Transaction = await TransactionBills.deleteOne(req.body);
    res.json({success:true});
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const removeAllTransaction = async (req, res) => {
    try {
      const cart = await TransactionBills.delete(req.body);
      res.json({success:true});

    } catch (error) {
      console.log(error);
      res.status(500).send();
    }
  };
  

module.exports = {addTrasaction,getTrasaction,getAllTrasaction,removeAllTransaction,removeTransaction}
  
  