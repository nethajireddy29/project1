import { ethers } from 'ethers';
import contractABI from '../blockChain/Microgrid.json';

export async function connectToMetaMask() {
  try {
    const { ethereum } = window;
    console.log("Requesting account...");
    if (window.ethereum) {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log(accounts);
      const contractAddress = "0x11DFF3cfbBDA6C0F5C6B38b4E577E406eA9A58BE";
      const ganacheProvider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
      console.log(ethereum.selectedAddress);
      const wallet = new ethers.Wallet(ethereum.selectedAddress, ganacheProvider);
      const walletProvider = new ethers.providers.Web3Provider(ethereum);
      const sendDataContract = new ethers.Contract(contractAddress, contractABI.abi, walletProvider.getSigner());
      const getDataContract = new ethers.Contract(contractAddress, contractABI.abi, wallet);
      return { sendDataContract, getDataContract };
    } else {
      alert("MetaMask not detected");
      return null;
    }
  } catch (error) {
    console.error("Error connecting:", error);
    throw error;
  }
}