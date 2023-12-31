const express = require('express');
const {addConsumer,getConsumer,getAllConsumer,removeMultipleConsumer,removeConsumer,loginConsumer} = require('../controllers/consumer_controller');
const  {addTrasaction,getTrasaction,getAllTrasaction,removeAllTransaction,removeTransaction} = require('../controllers/TransactionBills_controller')
const router = express.Router();

// addConsumer all CRUD Operation
router.post('/createConsumer',addConsumer);
router.post("/getConsumer",getConsumer);
router.get('/allConsumer',getAllConsumer);
router.post('/loginConsumer',loginConsumer);
// router.post('/removeConsumer',removeConsumer);
// router.post('/removeSpecificConsumers',removeMultipleConsumer);

// TransactionBills all CRUD Operations
router.post('/createTransactionBills',addTrasaction);
router.post('/getTransaction',getTrasaction);
router.get('/getAllTrasaction',getAllTrasaction);
// router.post('/removeTransaction',removeTransaction);
// router.post('/removeAllTransactions',removeAllTransaction);



module.exports = router;