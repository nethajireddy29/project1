import React, {useState,useEffect}from 'react'

export default function AddConsumer(props) {
  const [temp, setTemp] = useState('');

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const { sendDataContract, getDataContract } = await connectToMetaMask();
  //       // Use sendDataContract and getDataContract here or set them to state variables
  //       console.log(sendDataContract, getDataContract);

  //       // Set temp state with received data
  //       setTemp(sendDataContract); // Replace with the data you want to display
  //     } catch (error) {
  //       // Handle errors
  //       console.error('Error:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);

    // console.log("hdgkjhgk",props.data)
  
  // const [walletAddress, setWalletAddress] = useState('');
  // const [transactionResult, setTransactionResult] = useState('');
  // const [sendDataContract,setSendDataContract] = useState('');
  // const { ethereum } = window;
  
  // async function requestAccount() {
  //   console.log('Requesting account...');
  //   if (window.ethereum) {
  //     try {D
  //       const accounts = await ethereum.request({
  //         method: 'eth_requestAccounts',
  //       });
  //       setWalletAddress(accounts[2]);
  //     } catch (error) {
  //       console.error('Error connecting:', error);
  //     }
  //   } else {
  //     alert('MetaMask not detected');
  //   }
  //   const ganacheProvider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:7545');
  //   const wallet = new ethers.Wallet(ethereum.selectedAddress, ganacheProvider);
  //   const walletProvider = new ethers.providers.Web3Provider(ethereum)
  //   const contractAddress = '0x41Af8D33A4bC52286A41923A3EAbd60487c69497';
  //   const sendDataContract = new ethers.Contract(contractAddress, contractABI.abi, walletProvider.getSigner());
  //   setSendDataContract(sendDataContract)
  // }
  // async function addProducerForm(){
  //   let userName = document.getElementById("producer-name").value; 
  //   let password = document.getElementById("producer-password").value; 
  //   const addProducer = await sendDataContract.addProducer(userName,parseInt(password)); 
  //   setTransactionResult(`addProducer transaction: ${addProducer.toString()}`);
  //   alert("Producer added")
    
  // }
  
  // async function connectWallet() {
  //   if (typeof ethereum !== 'undefined') {
  //     await requestAccount();
      
  //     try {
  //       // const addProducerTx = await contract.showMicroGridId( ); 
  //       // setTransactionResult(`addProducer transaction: ${addProducerTx.toString()}`);
  //       // const data = await contract.consumerData();
  //       // console.log(data);  

  //       // Handle UI feedback or state updates based on transaction results
  //     } catch (error) {
  //       console.error('Error executing contract methods:', error);
  //     }
      
  //   }
  // }
  async function callContract(){
    // let data = await props.contract.addConsumer("sai",1,23);
    let data = await props.contract.showMicroGridId();
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={requestAccount}>Request Account</button> */}
        {/* <h3>Wallet Address: {walletAddress}</h3> */}
        {/* <button onClick={connectWallet}>Connect Wallet</button> */}
        <input type="text"  id="producer-name"/>
        <label htmlFor="">ProducerName</label>
        <input type="text"  id="producer-password"/>
        <label htmlFor="">Password</label>
        {/* <p>{temp}</p> */}
        <button onClick={callContract}></button>
        

      </header>
    </div>
  );
}
