const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
const port = 3001;
const jwt = require("jsonwebtoken")
const { PythonShell } =  require("python-shell");
app.use(cors());
app.use(express.json());
let dbConnection;
let jwtSecret = "you are i am"

const connectToDb = (cb) => {
  const password = encodeURIComponent("Dhoni@2005");
  MongoClient.connect(`mongodb+srv://duginisaisharan:${password}@cluster0.h4tlhz1.mongodb.net/credentials`
  )
    .then((client) => {
      dbConnection = client.db();
      return cb();
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    });
};

const getDb = () => dbConnection;

connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
}
});
async function insertData(id) {
  let client; // Declare the 'client' variable outside the try block
  
  try {
    // MongoDB connection string with password and database details
    const password = encodeURIComponent('NaNi....');
    const uri=`mongodb+srv://naniReddy:${password}@cluster0.xflfwqd.mongodb.net/?retryWrites=true&w=majority`
    // Create a MongoDB client
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to the database');
    
    // Specify the database and collection
    const database = client.db('micrometerid'); // Replace with your actual database name
    const collection = database.collection('consumers'); // Replace with your actual collection name
    
    // Insert data, including the base64-encoded image, into the collection
    const result = await collection.insertOne({
      microid:id
    });
    console.log(`Inserted document with ID: ${result.insertedId}`);
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    if (client) {
      await client.close();
      console.log('Connection closed');
    }
  }
}

async function compareid(id) {
  let client; // Declare the 'client' variable outside the try block

  try {
    // MongoDB connection string with password and database details
    const password = encodeURIComponent('NaNi....');
    const uri=`mongodb+srv://naniReddy:${password}@cluster0.xflfwqd.mongodb.net/?retryWrites=true&w=majority`
    
    // Create a MongoDB client
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to the database');
    
    // Specify the database and collection
    const database = client.db('micrometerid'); // Replace with your actual database name
    const collection = database.collection('consumers'); // Replace with your actual collection name
    
    // Insert data, including the base64-encoded image, into the collection
    const result = await collection.findOne({
      microid:id
    });
    console.log(`found document with ID: ${result.microid}`);
    if(id==result.microid){
      return "True"
    }
    else{
      return "False"
    }
    // Connect to the MongoDB server
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    if (client) {
      await client.close();
      console.log('Connection closed');
    }
  }
}

async function insertConsumerTransactions(name,microid,units,amount){
  let client; // Declare the 'client' variable outside the try block

  try {
    // MongoDB connection string with password and database details
    const password = encodeURIComponent('NaNi....');
    const uri=`mongodb+srv://naniReddy:${password}@cluster0.xflfwqd.mongodb.net/?retryWrites=true&w=majority`
    
    // Create a MongoDB client
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to the database');
    
    // Specify the database and collection
    const database = client.db('credentials'); // Replace with your actual database name
    const collection = database.collection('transactionBills'); // Replace with your actual collection name
    
    // Insert data, including the base64-encoded image, into the collection
    const result = await collection.insertOne({
      "name":name,
      "microid":microid,
      "units":units,
      "amount":amount
    });
    console.log(`found document with ID: ${result._id}`);
    alert("PURCHASE SUCCESSFULL")
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    if (client) {
      await client.close();
      console.log('Connection closed');
    }
  }
}
app.post("/api/aadharDatabase", (req, res) => {
  let temp = req.body.imagedata;
  let num=req.body.aadharnumber
  console.log(num)
  var originalData;
  getDb()
    .collection("personal")
    .findOne({ aadharnumber: num })
    .then((data) => {
      originalData = data.image;
      // res.send([originalData,temp]);
      try {
      compare(originalData,temp)
      console.log("compared")
    }catch (err) {
    console.log(err);
  }
    });  
    async function compare(originalData,temp){

    let pyshell = await new PythonShell("face.py", { mode: "text" });
    // sends a message to the Python script via stdin
    // console.log(originalData)
    pyshell.send(temp);
    pyshell.send(originalData);


    pyshell.on("message", function (message) {
      // received a message sent from the Python script (a simple "print" statement)
      console.log(typeof(message))
      temp1 = message;
      res.send(message);
    }); 

    // end the input stream and allow the process to exit
    pyshell.end(function (err, code, signal) {
      if (err) throw err;
      console.log("The exit code was: " + code);
      console.log("The exit signal was: " + signal);
      console.log("finished");
    
    });
}
});
app.post("/api1", (req, res) => {
  let temp = req.body.id;
  console.log(temp)
  insertData(temp);
  res.json(temp)
})
app.post("/api2", async (req, res) => {
  let temp = req.body.id;
  console.log(temp)
  userOrNot = await compareid(temp)
  if(userOrNot){
  const authToken = jwt.sign(temp, jwtSecret);
  return res.json({ success: true, authToken: authToken });

  }else{
    res.json({success:false})
  }
})
app.post("/api3", (req, res) => {
  let name = req.body.name;
  let microid = req.body.microid
  let units = req.body.units
  let amount = req.body.amount
  insertConsumerTransactions(name,microid,units,amount)
  res.send("added to database suceessfully");

})
app.post("/api4", async (req, res) => {
  let temp = req.body.id;
  //const authToken = jwt.sign(temp, jwtSecret);
  //return res.json({ success: true, authToken: authToken });
  res.send(await findid(temp))
})
async function findid(id) {
  let client; // Declare the 'client' variable outside the try block

  try {
    // MongoDB connection string with password and database details
    const password = encodeURIComponent('NaNi....');
    const uri=`mongodb+srv://naniReddy:${password}@cluster0.xflfwqd.mongodb.net/?retryWrites=true&w=majority`
    
    // Create a MongoDB client
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to the database');
    
    // Specify the database and collection
    const database = client.db('credentials'); // Replace with your actual database name
    const collection = database.collection('transactionBills'); // Replace with your actual collection name
    
    // Insert data, including the base64-encoded image, into the collection
    const result = await collection.find({
      microid:id
    });
    console.log(`found document with ID: ${result}`);
    return result;
    // Connect to the MongoDB server
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    if (client) {
      await client.close();
      console.log('+Connection closed');
    }
  }
}



