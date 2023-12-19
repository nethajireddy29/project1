const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
const port = 3001;
const { PythonShell } =  require("python-shell");

app.use(cors());
app.use(express.json());
let dbConnection;

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

app.post("/api", (req, res) => {
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