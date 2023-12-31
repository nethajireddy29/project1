const listner = (Data, contractAddress) => {
  const ethers = require("ethers");
  // const contractABI = require("./build/contracts/Microgrid.json");
  const contractABI = require("../../blockChain/build/contracts/Microgrid.json");

  // const web3 = new ethers.providers.JsonRpcProvider(
  //     "http://127.0.0.1:7545"
  // );
  const provider = new ethers.providers.JsonRpcProvider({
    url: "http://127.0.0.1:7545",
    network: { chainId: 1337, name: "ganache" },
  });
  const contract = new ethers.Contract(
    contractAddress,
    contractABI.abi,
    provider
  );
    
  try{contract
    .on("microGridAdded", (uniqueId) => {
      Data[Number(uniqueId)] = {
        battery: {},
        green_energy: {},
        grid: {},
        load: {},
      };
    })
    .on(
      "addBatteryData",
      (
        uniqueId,
        batteryId,
        minCapacity,
        maxCapacity,
        maxCharge,
        maxEfficiency,
        initSoc
      ) => {

        Data[Number(uniqueId)]["battery"][Number(batteryId)] = {
          charge: Number(maxCapacity),
          maxCharge: Number(maxCharge),
          efficiency: Number(maxEfficiency),
          charge_per_unit: 10,
        };
      }
    )

    .on("addLoadData", (microGridId, loadId, energyRequired) => {
      Data[Number(microGridId)]["load"][Number(loadId)] = {
        energyRequired: Number(energyRequired),
      };
    })
    .on(
      "addGreenEnergyData",
      (microGridId, greenEnergyId, energyProduction) => {
        Data[Number(microGridId)]["green_energy"][Number(greenEnergyId)] = {
          charge_produced: Number(energyProduction),
          charge_per_unit: 10,
          max_Charge:Number(energyProduction)

        };
      }
    )
    .on("addGridData", (microGridId, gridId, maxImport, maxExport) => {
      Data[Number(microGridId)]["grid"][Number(gridId)] = {
        maxImport: Number(maxImport),
        maxExport: Number(maxExport),
        charge:Number(maxExport)
      };
      
    });
}catch(err){
  console.log("err:",err)
}
}
module.exports = listner;

