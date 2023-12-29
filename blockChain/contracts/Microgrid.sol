// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Microgrid {
    uint16 public perUnit = 4;
    uint public microGridId = 0;

    struct Prosumer {
        string name;
        uint wallet1;
        uint energyBalance;
        bool isProducer;
    }

    struct Consumer{
        string name;
        string micrometerid;
        uint energyBalance;
        uint wallet;

    }

    struct Producer{
        string name;
        uint uniqueID;
        bool isProducer;
    }

    struct Battery {
        uint uniqueID;
        uint minCapacity;
        uint maxCapacity;
        uint maxCharge;
        uint16 maxEfficiency;
        uint16 initSoc;
    }

    struct Load {
        uint loadId;
        address userAddress;
        uint energyRequired;
    }

    struct GreenEnergy {
        uint uniqueID;
        uint energyProduction;
    }

    struct Grid {
        uint uniqueID;
        uint maxImport;
        uint maxExport;
    }
    struct Transaction {
        address from;
        address to;
        uint256 amount;
        uint256 timestamp;
    }


    struct MicroGrid {
        string microGridName;
        uint uniqueId;
        Battery[] batteryUsing;
        Load[] loads;
        GreenEnergy[] greenEnergies;
        Grid[] powerGrid;
        address[] Prosumers;
        address[] Consumers;
        address[] Producers;
    }

    mapping(uint => MicroGrid) public microGrids;
    mapping(address => Prosumer) public address_Prosumer;
    mapping(address => Consumer) public address_Consumer;
    mapping(address => Producer) public address_Producer;

    event microgridDetails(string name, Battery[] batteryUsing, Load[] loads, GreenEnergy[] greenEnergies, Grid[] powerGrid);
    event EnergyTransferred(address indexed from, address indexed to, uint256 transferAmount);
    event microGridAdded(uint uniqueId);
    event addLoadData(uint microGridUniqueId,uint loadId,uint energyRequired);
    event addBatteryData(uint microGridUniqueId,uint batteryIndex,uint minCapacity,uint maxCapacity,uint maxCharge,uint16 maxEfficiency,uint16 initSoc);
    event addGreenEnergyData(uint microGridUniqueId,uint GEId,uint energyProduction);
    event addGridData(uint microGridUniqueId,uint gridIndex,uint maxImport,uint maxExport);



    function createMicroGrid(string memory name) public {
        require (address_Producer[msg.sender].isProducer == true, "Only Producers can access this feature.");
        MicroGrid storage tempMicroGrid = microGrids[microGridId];
        tempMicroGrid.microGridName = name;
        tempMicroGrid.uniqueId = microGridId;
        microGridId += 1;
        emit microGridAdded(tempMicroGrid.uniqueId);
    }

    function viewMicrogridDetails(uint id) public {
        require (address_Producer[msg.sender].isProducer == true, "Only Producers can access this feature.");
        MicroGrid storage temp = microGrids[id];
        emit microgridDetails(temp.microGridName, temp.batteryUsing, temp.loads, temp.greenEnergies, temp.powerGrid);
    }

    function addBattery(
        uint uniqueId,
        uint minCapacity,
        uint maxCapacity,
        uint maxCharge,
        uint16 maxEfficiency,
        uint16 initSoc
    ) public {
        require (address_Producer[msg.sender].isProducer == true, "Only Producers can access this feature.");
        MicroGrid storage tempMicroGrid = microGrids[uniqueId];
        uint batteryId = tempMicroGrid.batteryUsing.length;
        tempMicroGrid.batteryUsing.push(Battery(batteryId,minCapacity, maxCapacity, maxCharge, maxEfficiency, initSoc));
        emit addBatteryData(uniqueId, batteryId, minCapacity,maxCapacity, maxCharge, maxEfficiency, initSoc);
}

    function addLoad(address userAddress, uint energyRequired, uint uniqueId) public {
        require (address_Producer[msg.sender].isProducer == true, "Only Producers can access this feature.");
        MicroGrid storage tempMicroGrid = microGrids[uniqueId];
        uint loadId = tempMicroGrid.loads.length;
        Load memory loadItem = Load(loadId, userAddress, energyRequired);
        tempMicroGrid.loads.push(loadItem);
        emit addLoadData(uniqueId,loadId,energyRequired);
    }

    function addGreenEnergy(uint energyProduction, uint uniqueId) public {
        require (address_Producer[msg.sender].isProducer == true, "Only Producers can access this feature.");
        MicroGrid storage tempMicroGrid = microGrids[uniqueId];
        uint greenEnergyId = tempMicroGrid.greenEnergies.length;
        tempMicroGrid.greenEnergies.push(GreenEnergy(greenEnergyId,energyProduction));
        emit addGreenEnergyData(uniqueId,greenEnergyId,energyProduction);
    }

    function addPowerGrid(uint maxImport, uint maxExport, uint uniqueId) public {
        require (address_Producer[msg.sender].isProducer == true, "Only Producers can access this feature.");
        MicroGrid storage tempMicroGrid = microGrids[uniqueId];
        uint gridId = tempMicroGrid.powerGrid.length;
        tempMicroGrid.powerGrid.push(Grid(gridId,maxImport, maxExport));
        emit addGridData(uniqueId,gridId,maxImport,maxExport);
    }

    function addProducer(string memory name, uint uniqueID) public {
        Producer memory producer = Producer(name, uniqueID, true);
        address_Producer[msg.sender] = producer;
    }

    function addProsumer(string memory name, uint wallet1, uint energyBalance) public {
        require (address_Producer[msg.sender].isProducer == true, "Only Producers can access this feature.");
        Prosumer memory prosumer = Prosumer(name, wallet1, energyBalance, false);
        address_Prosumer[msg.sender] = prosumer;
    }

    uint wallet=msg.sender.balance;
    function addConsumer(string memory name,string memory micrometerid, uint energyBalance) public {
        Consumer memory consumer = Consumer(name,micrometerid, energyBalance,wallet);
        address_Consumer[msg.sender] = consumer;
    }

    // Function to purchase energy  consumer -> prosumer
    function purchaseEnergy(uint transferUnits) public {

        require(wallet >= transferUnits*perUnit, "Insufficient balance");

        Consumer storage details = address_Consumer[msg.sender];
        wallet -= transferUnits*perUnit;
        details.energyBalance += transferUnits;

        // Emit an event to record the energy transfer
        emit EnergyTransferred(msg.sender, address(this), transferUnits*perUnit);
    }

    // Function to sell excess energy,  prosumer -> consumer
    function sellEnergy(uint transferAmount) public {
        require(address_Prosumer[msg.sender].energyBalance >= transferAmount, "Insufficient energy balance");
        Prosumer storage prosumer = address_Prosumer[msg.sender];
        prosumer.energyBalance -= transferAmount;
        prosumer.wallet1 += transferAmount * perUnit;

        // Emit an event to record the energy sale
        emit EnergyTransferred(msg.sender, address(this), transferAmount * perUnit);
    }

    // Function to transfer energy from one user to another
    function transferEnergy(address to, uint transferAmount) public {
        require(address_Prosumer[msg.sender].energyBalance >= transferAmount, "Not enough energy to transfer");

        Prosumer storage senderDetails = address_Prosumer[msg.sender];
        Prosumer storage receiverDetails = address_Prosumer[to];

        senderDetails.energyBalance -= transferAmount;
        receiverDetails.energyBalance += transferAmount;

        // Emit an event to record the energy transfer
        emit EnergyTransferred(msg.sender, to, transferAmount);
    }

 
    Transaction[] public transactions;

    event TransactionAdded(address indexed from, address indexed to, uint256 amount, uint256 timestamp);

    function addTransaction(address _from, address _to, uint256 _amount) public {
        transactions.push(Transaction({
            from: _from,
            to: _to,
            amount: _amount,
            timestamp: block.timestamp
        }));

        emit TransactionAdded(_from, _to, _amount, block.timestamp);
    }

    function getTransactionCount() public view returns (uint256) {
        return transactions.length;
    }

    function getTransaction(uint256 index) public view returns (address from, address to, uint256 amount, uint256 timestamp) {
        require(index < transactions.length, "Transaction index out of bounds");
        Transaction storage transaction = transactions[index];
        return (transaction.from, transaction.to, transaction.amount, transaction.timestamp);
    }

// function batteryData() public view returns (uint) {
//     MicroGrid storage tempMicroGrid = microGrids[0];
    
//     require(tempMicroGrid.batteryUsing.length > 0, "No batteries in Microgrid 0");
//     require(tempMicroGrid.batteryUsing.length > 0, "No battery found at index 0");

//     Battery storage battery = tempMicroGrid.batteryUsing[0];
//     return battery.maxCharge;
// }
function consumerData()public view returns (string memory){
    Consumer memory data = address_Consumer[msg.sender];
    return data.name;
}

function showMicroGridId() public view returns(uint){
    return microGridId ;
}



}