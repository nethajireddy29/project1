import React,{useState,useEffect} from "react";
import { ConsumerAuthentication, ConsumerLogin } from "./consumer/authentication.js";
import ConsumerFaceAuthentication from "./consumer/registration.js";
import ConsumerOtp from "./consumer/otp.js";
import ConsumerMicroid from "./consumer/microid.js";
import ConsumerHome from './consumer/home.js'
import ConsumerPlans from './consumer/plans.js'
import ConsumerHistory from './consumer/history.js'
import Form from './consumer/form.js';
//import Payable from './components/Payment.js'
import AddConsumer from "./components/AddConsumer.js";
//import { ethers } from "ethers";
// import contractABI from "./blockChain/Microgrid.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ConnectToMetaMask from "./hooks/MetaMaskConnection.js"
//import AddBattery from "./components/AddBattery.js";
//import AddProducer from "./components/AddProducer.js"

export default function App() {
  const [tem, setTemp] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const { sendDataContract, getDataContract } = await ConnectToMetaMask();
        // Use sendDataContract and getDataContract here or set them to state variables
        console.log(sendDataContract, getDataContract);

        // Set temp state with received data
        setTemp(sendDataContract); // Replace with the data you want to display
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);


  const myrouter = createBrowserRouter([
    { path: "/",                      element: < ConsumerAuthentication /> },
    { path: "/consumer/registration", element: < ConsumerFaceAuthentication /> },
    { path: "/consumer/otp",          element: < ConsumerOtp /> },
    { path: "/consumer/microid",      element: < ConsumerMicroid/>},
    { path: "/consumer/form",         element: < Form connect = {tem}/>},
    { path: "/consumer/login",        element: < ConsumerLogin /> },
    { path: "/consumer/home",         element: < ConsumerHome/>},
    { path: "/consumer/plans",        element: < ConsumerPlans connect = {tem}/>},
    { path: "/consumer/history",      element: < ConsumerHistory/>},
    { path: "/addConsumer",           element: < AddConsumer  connect = {tem}/> },
    //{ path: "/addProducer",           element: < AddProducer  contract = {temp}/> },
    // { path: "/addBattery",            element: < AddBattery   contract = {temp}/> },
    //{ path: "/payable",               element: < Payable   contract = {temp}/> },

  ]);
  return (
    <div>
      <RouterProvider router={myrouter} />
    </div>
  );
}
