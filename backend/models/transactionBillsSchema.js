const mongoose = require("mongoose"); 

const transactionBillsSchema = mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  microid:{
    type: String,
    required: true,
  },
  units:{
    type: Number,
    required: true,
  },
  amount:{
    type:Number,
    required: true,
  }
});

const TransactionBills = new mongoose.model("transactionBill", transactionBillsSchema);

module.exports = TransactionBills;