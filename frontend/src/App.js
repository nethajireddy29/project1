import React,{useState,useEffect} from "react";
import { Authentication, Login } from "./authentication.js";
import Credits from "./registration.js";
import Otp from "./otp.js";
import Microid from "./microid.js";
import AddConsumer from "./components/AddConsumer.js";
import { ethers } from "ethers";
// import contractABI from "./blockChain/Microgrid.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {connectToMetaMask} from "./hooks/metaMaskService.js"
import AddBattery from "./components/AddBattery.js";

export default function App() {
  const [temp, setTemp] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const { sendDataContract, getDataContract } = await connectToMetaMask();
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
    { path: "/", element: <Authentication /> },
    { path: "/registration", element: <Credits /> },
    { path: "/otp", element: <Otp /> },
    { path: "/sucess", element: <Microid /> },
    { path: "/login", element: <Login /> },
    { path: "/addConsumer", element: <AddConsumer  contract = {temp}/> },
    { path: "/addBattery", element: <AddBattery  contract = {temp}/> },

  ]);
  return (
    <div>
      <RouterProvider router={myrouter} />
    </div>
  );
}
