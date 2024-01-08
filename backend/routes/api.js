const express = require("express");
const {
  addConsumer,
  getConsumer,
  getAllConsumer,
  removeMultipleConsumer,
  removeConsumer,
  loginConsumer,
} = require("../controllers/consumer_controller");
const {
    addTransaction,
  getTrasaction,
  getAllTrasaction,
  removeAllTransaction,
  removeTransaction,
} = require("../controllers/TransactionBills_controller");
const {
  createProducerUser,
  ProducerLogIn,
} = require("../controllers/ProducerUserController.js");

const { addFace, removeFace, removeAllFaces, getFace ,compareFace} = require("../controllers/AdharAuthentication-controller")

const { body, validationResult } = require("express-validator");
const Simulation  = require("./simulation.js")
const router = express.Router();




// addConsumer all CRUD Operation
router.post("/createConsumer", addConsumer);
router.post("/getConsumer", getConsumer);
router.get("/allConsumer", getAllConsumer);
router.post("/loginConsumer", loginConsumer);
// router.post('/removeConsumer',removeConsumer);
// router.post('/removeSpecificConsumers',removeMultipleConsumer);




// TransactionBills all CRUD Operations
router.post("/createTransactionBills", addTransaction);
router.post("/getTransaction", getTrasaction);
router.get("/getAllTrasaction", getAllTrasaction);
// router.post('/removeTransaction',removeTransaction);
// router.post('/removeAllTransactions',removeAllTransaction);



router.post('/aadharDatabase',compareFace);






// Producer Function
router.post(
  "/ProducerLogIn",
  [
        body("name", "Incorrect Name").isLength({ min: 5 }),
        body("password", "Incorrect Password").isLength({ min: 8 }),
        body("designation", "Invalid Designation").isIn([
          "Chief Engineer",
          "Superintendent Engineer",
          "Divisional Engineer",
          "Assistant Director",
          "Assistant Engineer",
          "Assistant Sub-Engineer",
          "Foreman",
          "Line Inspector",
          "Lineman",
          "Junior Lineman",
          "Assistant Lineman",
        ]),
      ],
  ProducerLogIn
);
router.post(
  "/createProducerUser",
    [
    body("registrant", "Incorrect Registrant").isLength({ min: 5 }),
    body("name", "Incorrect Name").isLength({ min: 5 }),
    body("password", "Incorrect Password").isLength({ min: 8 }),
    body("designation", "Invalid Designation").isIn([
      "Chief Engineer",
      "Superintendent Engineer",
      "Divisional Engineer",
      "Assistant Director",
      "Assistant Engineer",
      "Assistant Sub-Engineer",
      "Foreman",
      "Line Inspector",
      "Lineman",
      "Junior Lineman",
      "Assistant Lineman",
    ]),
  ],
  createProducerUser
);
router.use("/simulation",Simulation)
module.exports = router;
