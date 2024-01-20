import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectToMetaMask from "./hooks/MetaMaskConnection.js";
import Base from "./base.js"
//consumer Imports
import {ConsumerAuthentication,ConsumerLogin} from "./consumer/authentication.js";
import ConsumerFaceAuthentication from "./consumer/registration.js";
import ConsumerOtp from "./consumer/otp.js";
import ConsumerMicroid from "./consumer/microid.js";
import ConsumerHome from "./consumer/home.js";
import ConsumerPlans from "./consumer/plans.js";
import ConsumerHistory from "./consumer/history.js";
import Form from "./consumer/Form.js";
import AddConsumer from "./components/AddConsumer.js";
import ConsumerNavbar from "./consumer/navbar.js";
import IsAuthenticated from "./hooks/IsAuthenticated.js";
import AvailableMicroGridConsumer from "./consumer/AvailableMicroGridConsumer.js";

// Producer Imports
import ProducerHome from "./pages/ProducerHome.js";
import ProducerNavbar from "./pages/ProducerNavbar.js";
import ProducerLogIn from "./pages/ProducerLogin.js";
import ProducerSignup from "./pages/ProducerSignUp.js";
import AddMicrogrid from "./components/AddMicrogrid.js";
import AddBattery from "./components/AddBattery.js";
import AddLoad from "./components/AddLoad.js";
import AddGreenEnergy from "./components/AddGreenEnergy.js";
import AddGrid from "./components/AddGrid.js";
import AddProducer from "./components/AddProducer.js";
import JoinOrCreateMicroGrid from "./pages/JoinOrCreateMicroGrid.js";
import Test from "./components/Test.js"
import AvailableMicrogrid from "./components/AvailableMicrogrid.js";

//prosumer Imports
import ProsumerLogin from "./prosumer/login.js";
import ProsumerHome from "./prosumer/home.js";
import ProsumerContracts from "./prosumer/contracts.js";
import ProsumerForm from "./prosumer/form.js";
import ProsumerHelp from "./prosumer/help.js";
import ProsumerHistory from "./prosumer/history.js";
import ProsumerNavbar from "./prosumer/navbar.js"

// import { VariableProvider } from './Context/metaContext.js';

export default function App() {
  const [getContract, setGetContract] = useState("");
  const [sendContract, setSendContract] = useState("");
  const [metaMaskAddress, setMetaMaskAddress] = useState("");

  //const producerAuthentic=IsAuthenticated("producerAuthToken")
  const consumerAuthentic=IsAuthenticated("consumerAuthToken")
  useEffect(() => {
    async function fetchData() {
      try {
        const { sendDataContract, getDataContract, metaMaskAddress } = await ConnectToMetaMask();
        console.log(sendDataContract, getDataContract,metaMaskAddress);

        // Set state with received data
        setGetContract(getDataContract);
        setSendContract(sendDataContract);
        setMetaMaskAddress(metaMaskAddress);
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    }

    fetchData(); // Invoke the fetchData function when the component mounts
  }, []);





  return (
    <Router>
      <div>
        {/*producerAuthentic?<ProducerNavbar connect = {sendContract} />:<></>*/}
      
        <Routes>
          <Route path="/" element={<Base />} />


          <Route path="/consumer" element={<ConsumerAuthentication />} />
          <Route path="/consumer/registration" element={<ConsumerFaceAuthentication />} />
          <Route path="/consumer/otp" element={<ConsumerOtp />} />
          <Route path="/consumer/microid" element={<ConsumerMicroid />} />
          <Route path="/consumer/form" element={<Form connect={sendContract} />} />
          <Route path="/consumer/login" element={<ConsumerLogin />} />
          <Route path="/consumer/home" element={<ConsumerHome />} />
          <Route path="/consumer/plans" element={<ConsumerPlans connect={sendContract}  metaMaskAddress= {metaMaskAddress}/>} />
          <Route path="/consumer/history" element={<ConsumerHistory />} />
          <Route path="/addConsumer" element={<AddConsumer connect={sendContract} />} />
          <Route path="/consumer/AvailableMicrogrid" element={<AvailableMicroGridConsumer connect={sendContract} />} />
          

          {/* Producer Routes */}

          <Route path="/ProducerSignup" element={<ProducerSignup />} />
          <Route path="/ProducerLogin" element={<ProducerLogIn />} />
          <Route path="/ProducerHome" element={<ProducerHome   getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/addProducer" element={<AddProducer   getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/addMicrogrid" element={<AddMicrogrid   getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/AddBattery" element={<AddBattery   getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/AddLoad" element={<AddLoad   getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/AddGreenEnergy" element={<AddGreenEnergy   getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/AddGrid" element={<AddGrid   getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress} />} />

          <Route path="/ProducerSignup"         element={<ProducerSignup />} />
          <Route path="/ProducerLogin"          element={<ProducerLogIn />} />
          <Route path="/ProducerHome"           element={<ProducerHome   getContract = {getContract} sendContract = {sendContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/addProducer"            element={<AddProducer   getContract = {getContract} sendContract = {sendContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/addMicrogrid"           element={<AddMicrogrid   getContract = {getContract} sendContract = {sendContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/AddBattery"             element={<AddBattery   getContract = {getContract} sendContract = {sendContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/AddLoad"                element={<AddLoad   getContract = {getContract} sendContract = {sendContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/AddGreenEnergy"         element={<AddGreenEnergy   getContract = {getContract} sendContract = {sendContract} metaMaskAddress= {metaMaskAddress} />} />
          <Route path="/AddGrid"                element={<AddGrid   getContract = {getContract} sendContract = {sendContract} metaMaskAddress= {metaMaskAddress} />} />

          <Route path="/JoinOrCreateMicroGrid" element={<JoinOrCreateMicroGrid  getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress}/>}/>
          <Route path="/ShowMicroGrid" element={<AvailableMicrogrid   />} />
          <Route path="/test" element={<Test  getContract = {getContract} sendContract = {getContract} metaMaskAddress= {metaMaskAddress}   />} />
          {/*ProsumerRoutes*/}
          <Route path="/prosumer" element={<ProsumerLogin />} />
          <Route path="/prosumer/home" element={<ProsumerHome />} />
          <Route path="/prosumer/form" element={<ProsumerForm connect={sendContract} />} />
          <Route path="/prosumer/contracts" element={<ProsumerContracts connect={sendContract}  metaMaskAddress= {metaMaskAddress}/>} />
          <Route path="/prosumer/help" element={<ProsumerHelp />} />
          <Route path="/prosumer/history" element={<ProsumerHistory />} />
        </Routes>
 
      </div>
    </Router>
  );
}
