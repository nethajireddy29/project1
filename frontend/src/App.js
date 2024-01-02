// import React, { useState, useEffect } from "react";
// import {
//   ConsumerAuthentication,
//   ConsumerLogin,
// } from "./consumer/authentication.js";
// import ConsumerFaceAuthentication from "./consumer/registration.js";
// import ConsumerOtp from "./consumer/otp.js";
// import ConsumerMicroid from "./consumer/microid.js";
// import ConsumerHome from "./consumer/home.js";
// import ConsumerPlans from "./consumer/plans.js";
// import ConsumerHistory from "./consumer/history.js";
// import Form from "./consumer/form.js";
// //import Payable from './components/Payment.js'
// import AddConsumer from "./components/AddConsumer.js";
// import AddLoad from "./components/AddLoad.js";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ConnectToMetaMask from "./hooks/MetaMaskConnection.js";
// import ProducerNavbar from "./pages/ProducerNavbar.js";
// import ProducerLogIn  from "./pages/ProducerLogin.js"
// import ProducerSignup from "./pages/ProducerSignUp.js";


// export default function App() {
//   const [getContract, setGetContract] = useState("");
//   const [sendContract, setSendContract] = useState("");
//   const [metaMaskAddress, setMetaMaskAddress] = useState("");
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const { sendDataContract, getDataContract, metaMaskAddress } = await ConnectToMetaMask();
        
//         console.log(sendDataContract, getDataContract);

//         // Set state with received data
//         setGetContract(getDataContract);
//         setSendContract(sendDataContract);
//         setMetaMaskAddress(metaMaskAddress);
//       } catch (error) {
//         // Handle errors
//         console.error("Error:", error);
//       }
//     }

//     fetchData(); // Invoke the fetchData function when the component mounts
//   }, [])

//   const myrouter = createBrowserRouter([
//     { path: "/", element: <ConsumerAuthentication /> },
//     { path: "/consumer/registration", element: <ConsumerFaceAuthentication /> },
//     { path: "/consumer/otp", element: <ConsumerOtp /> },
//     { path: "/consumer/microid", element: <ConsumerMicroid /> },
//     { path: "/consumer/form", element: <Form connect={sendContract} /> },
//     { path: "/consumer/login", element: <ConsumerLogin /> },
//     { path: "/consumer/home", element: <ConsumerHome /> },
//     {
//       path: "/consumer/plans",
//       element: <ConsumerPlans connect={sendContract} />,
//     },
//     { path: "/consumer/history", element: <ConsumerHistory /> },
//     { path: "/addConsumer", element: <AddConsumer connect={sendContract} /> },
//     { path: "/addLoad", element: <AddLoad contract={sendContract} /> },
//     { path: "/ProducerSignup", element: <ProducerSignup  /> },
//     { path: "/ProducerLogin", element: <ProducerLogIn  /> },
//     // { path: "/addLoad", element: <AddLoad contract={sendContract} /> },
//   ]);
//   return (
//     <div>
//       <ProducerNavbar/>
//       <RouterProvider router={myrouter} />
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectToMetaMask from "./hooks/MetaMaskConnection.js";
import {ConsumerAuthentication,ConsumerLogin} from "./consumer/authentication.js";
import ConsumerFaceAuthentication from "./consumer/registration.js";
import ConsumerOtp from "./consumer/otp.js";
import ConsumerMicroid from "./consumer/microid.js";
import ConsumerHome from "./consumer/home.js";
import ConsumerPlans from "./consumer/plans.js";
import ConsumerHistory from "./consumer/history.js";
import Form from "./consumer/form.js";
import AddConsumer from "./components/AddConsumer.js";
import IsAuthenticated from "./hooks/IsAuthenticated.js";

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

import AvailableMicrogrid from "./components/AvailableMicrogrid.js";

export default function App() {
  const [getContract, setGetContract] = useState("");
  const [sendContract, setSendContract] = useState("");
  const [metaMaskAddress, setMetaMaskAddress] = useState("");
  // const [Authentic, setAuthentic] = useState(false);

  const Authentic=IsAuthenticated()
  useEffect(() => {
    async function fetchData() {
      try {
        const { sendDataContract, getDataContract, metaMaskAddress } = await ConnectToMetaMask();
        
        console.log(sendDataContract, getDataContract);

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
        {Authentic?<ProducerNavbar connect = {sendContract} />:<></>}
        <Routes>
          <Route path="/" element={<ConsumerAuthentication />} />
          <Route path="/consumer/registration" element={<ConsumerFaceAuthentication />} />
          <Route path="/consumer/otp" element={<ConsumerOtp />} />
          <Route path="/consumer/microid" element={<ConsumerMicroid />} />
          <Route path="/consumer/form" element={<Form connect={sendContract} />} />
          <Route path="/consumer/login" element={<ConsumerLogin />} />
          <Route path="/consumer/home" element={<ConsumerHome />} />
          <Route path="/consumer/plans" element={<ConsumerPlans connect={sendContract} />} />
          <Route path="/consumer/history" element={<ConsumerHistory />} />
          <Route path="/addConsumer" element={<AddConsumer connect={sendContract} />} />

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



          <Route path="/ShowMicroGrid" element={<AvailableMicrogrid   />} />
        
        </Routes>
      </div>
    </Router>
  );
}
