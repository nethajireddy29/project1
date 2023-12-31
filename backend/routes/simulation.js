const express = require("express");
const router = express.Router();
const contractAddress = "0xb617dd6A4dB790AFf981fC4875B8953Ca27612be";
const listner = require("./listener");
Data = {0:{
  battery: {
    "0": {
      charge: 100,
      efficiency: 0.7,
      max_Charge: 100,
      charge_per_unit: 10,
    },
    "1": {
      charge: 100,
      efficiency: 0.7,
      max_Charge: 100,
      charge_per_unit: 10,
    },
  },
  green_energy: {
    "0": {
      charge_produced: 100,
      charge_per_unit: 10,
      max_Charge: 1000,
    },
    "1": {
      charge_produced: 100,
      charge_per_unit: 10,
      max_Charge: 1000,
    },
  },
  grid: {
    "0": {
      charge:1000,
      max_export: 1000,
      max_import: 500,
    },
    "1": {
      charge:700,
      max_export: 900,
      max_import: 500,
    },
  },
  load: {
    "0": { energyRequired:0},
  }},
};

// listner(Data,"0x8d21b83fB8B9106a6081eab0855632B308428Ac6")

UserWaiting = {
  "sai sharan":{"microGridId":0,"energyRequired":2000,"energySatisfied":0,"fromBattery":0,"fromGE":0,"fromGrid":0}
}
userFullFilled = {
  
}


function Simulation(){
  let microGrid;
  for(var userReq of Object.keys(UserWaiting)){
    if (UserWaiting[userReq].energyRequired == UserWaiting[userReq].energySatisfied){
      userFullFilled[userReq] = UserWaiting[userReq]
      delete UserWaiting[userReq];
    }
    else{
      let microGrid = UserWaiting[userReq].microGridId;
      energyLeft = UserWaiting[userReq].energyRequired-UserWaiting[userReq].energySatisfied;
      batteryEnergyLeft=energyTranferFromBattery(energyLeft,microGrid,userReq);
      // console.log(UserWaiting[userReq.username],userReq.username,userReq)
      UserWaiting[userReq]["fromBattery"] += energyLeft-batteryEnergyLeft;
      GEenergyLeft=energyTranferFromGreenEnergy(batteryEnergyLeft,microGrid,userReq);
      UserWaiting[userReq]["fromGE"] += batteryEnergyLeft-GEenergyLeft
      gridEnergyLeft=energyTranferFromGrid(GEenergyLeft,microGrid,userReq);
      UserWaiting[userReq]["fromGrid"] += GEenergyLeft-gridEnergyLeft;
      console.log(gridEnergyLeft);
      UserWaiting[userReq]["energySatisfied"]+= energyLeft - gridEnergyLeft;
      // UserWaiting[userReq]["energyRequired"] = gridEnergyLeft;
    }
  }
  

}
function yourFunction(){
  console.log(Data[0]["grid"])
  Simulation();
  for (let key in Data) {
     // Access each key in the object
     chargeBattery(key)
     chargeGreenEnergy(key)
     chargeGrid(key)
  }
  setTimeout(yourFunction, 5000);
}

yourFunction();

console.log(UserWaiting);



function energyTranferFromBattery(chargeNeeded,microGrid, toUserName) {
  let batterys = Data[microGrid]["battery"];

  for (var key of Object.keys(batterys)) {
      let enegyProvidable = batterys[key].charge * batterys[key].efficiency / 10

      if (enegyProvidable > chargeNeeded) {
          Data[microGrid]["battery"][key].charge -= chargeNeeded;
          chargeNeeded -= chargeNeeded;
      }
      else {
          Data[microGrid]["battery"][key].charge -= enegyProvidable;
          chargeNeeded -= enegyProvidable;
      }
  }
  return chargeNeeded;
}
function energyTranferFromGreenEnergy(chargeNeeded,microGrid, toUserName) {
  let green_energy = Data[microGrid]["green_energy"];

  for (var key of Object.keys(green_energy)) {
      let enegyProvidable = green_energy[key].charge_produced;

      if (enegyProvidable > chargeNeeded) {
          Data[microGrid]["green_energy"][key].charge_produced -= chargeNeeded;
          chargeNeeded -= chargeNeeded;
      }
      else {
          Data[microGrid]["green_energy"][key].charge_produced -= enegyProvidable;
          chargeNeeded -= enegyProvidable;
      }
  }
  return chargeNeeded;
}
function energyTranferFromGrid(chargeNeeded, microGrid,toUserName) {
  let grid = Data[microGrid]["grid"];

  for (var key of Object.keys(grid)) {
    
      let enegyProvidable = grid[key].charge;
      if (enegyProvidable > chargeNeeded) {
          Data[microGrid]["grid"][key].charge -= chargeNeeded;
          chargeNeeded -= chargeNeeded;
      }
      else {
          Data[microGrid]["grid"][key].charge -= enegyProvidable;
          chargeNeeded -= enegyProvidable;
      }
  }
  return chargeNeeded;
}

function chargeBattery(microGrid) {
  let batterys = Data[microGrid]["battery"];
  for (var key of Object.keys(batterys)) {
    charge_produced = batterys[key].max_Charge/10
    if (batterys[key].max_Charge > batterys[key].charge + charge_produced) {
      Data[microGrid]["battery"][key].charge += charge_produced;
      
    } else {
      Data[microGrid]["battery"][key].charge = batterys[key].max_Charge;
    }
  }

}

function chargeGreenEnergy(microGrid) {

  let green_energy = Data[microGrid]["green_energy"];
  for (var key of Object.keys(green_energy)) {
    charge_produced = green_energy[key].max_Charge/10
    if (green_energy.max_Charge > green_energy.charge + charge_produced) {
      Data[microGrid]["green_energy"][key].charge += charge_produced;
    } else {
      Data[microGrid]["green_energy"][key].charge = green_energy[key].max_Charge;
    }
  }

}

function chargeGrid(microGrid){
  let grid = Data[microGrid]["grid"];
  for (var key of Object.keys(grid)) {
    console.log()
    charge_produced = grid[key].max_import/10
    if (grid[key].max_export > grid[key].charge + charge_produced) {
      Data[microGrid]["grid"][key].charge += charge_produced;
    } 
    else {
      Data[microGrid]["grid"][key].charge = grid[key].max_export;
    }
  }
}
// router.post("/energyTranferFromBattery", (req, res) => {
//   let chargeNeeded = req.body.chargeNeeded;
//   let batterys = Data["battery"];

//   for (var key of Object.keys(batterys)) {
//     let enegyPrwovidable =
//       (batterys[key].charge * batterys[key].efficiency) / 10;

//     if (enegyProvidable > chargeNeeded) {
//       Data["battery"][key].charge -= chargeNeeded;
//       chargeNeeded -= chargeNeeded;
//     } else {
//       Data["battery"][key].charge -= enegyProvidable;
//       chargeNeeded -= enegyProvidable;
//     }
//   }
//   return chargeNeeded;
// });

// router.post("/energyTranferFromGreenEnergy", (req, res) => {
//   let chargeNeeded = req.body.chargeNeeded;
//   let green_energy = Data["green_energy"];

//   for (var key of Object.keys(green_energy)) {
//     let enegyProvidable = green_energy[key].charge_produced;

//     if (enegyProvidable > chargeNeeded) {
//       Data["green_energy"][key].charge_produced -= chargeNeeded;
//       chargeNeeded -= chargeNeeded;
//     } else {
//       Data["green_energy"][key].charge_produced -= enegyProvidable;
//       chargeNeeded -= enegyProvidable;
//     }
//   }
//   return chargeNeeded;
// });

// router.post("/energyTranferFromGrid", (req, res) => {
//   let chargeNeeded = req.body.chargeNeeded;
//   let grid = Data["grid"];

//   for (var key of Object.keys(grid)) {
//     let enegyProvidable = grid[key].max_export;

//     if (enegyProvidable > chargeNeeded) {
//       Data["grid"][key].max_export -= chargeNeeded;
//       chargeNeeded -= chargeNeeded;
//     } else {
//       Data["grid"][key].max_export -= enegyProvidable;
//       chargeNeeded -= enegyProvidable;
//     }
//   }
//   return chargeNeeded;
// });

// router.get("/chargeBattery", (req, res) => {
//   let charge_produced = req.body.charge_produced;
//   let batterys = Data[microGrid]["battery"];
//   for (var key of Object.keys(batterys)) {
//     if (batterys.max_Charge > batterys.charge + charge_produced) {
//       Data[microGrid]["batterys"][key].charge += charge_produced;
//     } else {
//       Data[microGrid]["batterys"][key].charge = batterys.max_Charge;
//     }
//   }
// });
// router.get("/chargeGreenEnergy", (req, res) => {
//   let green_energy = Data[microGrid]["green_energy"];
//   for (var key of Object.keys(green_energy)) {
//     if (green_energy.max_Charge > green_energy.charge + charge_produced) {
//       Data[microGrid]["green_energy"][key].charge += charge_produced;
//     } else {
//       Data[microGrid]["green_energy"][key].charge = green_energy.max_Charge;
//     }
//   }
// });
// router.get("/chargeGrid", (req, res) => {
//   let green_energy = Data[microGrid]["grid"];
//   for (var key of Object.keys(green_energy)) {
//     if (green_energy.max_Charge > green_energy.charge + charge_produced) {
//       Data[microGrid]["grid"][key].charge += charge_produced;
//     } else {
//       Data[microGrid]["grid"][key].charge = grid.max_Charge;
//     }
//   }
// });

router.post("/requireUser", (req, res) => {
  let data = req.body;
  let userBool = false;
  for (var key in Object.keys(UserWaiting)) {
    if (key === data.userName) {
      UserWaiting[data.userName].energyRequired += data.energyRequired;
      userBool = true;
      break;
    }
  }
  if (userBool == false) {
    requestData = {
      microGridId: data.microGridId,
      energyRequired: data.energyRequired,
      energySatisfied: 0,
      fromBattery: 0,
      fromGE: 0,
      fromGrid: 0,
    };
    UserWaiting[data.userName] = requestData;
  }
  res.json(UserWaiting);
});
router.get("/getUserWaiting", (req, res) => {
  res.json(UserWaiting);
});

module.exports = router;
