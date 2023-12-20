import React from 'react';
import ReactDOM from 'react-dom/client';
import {Authentication,Login} from './authentication.js'
import Credits from './registration.js';
import Otp from './otp.js'
import Microid from './microid.js'

import { createBrowserRouter,RouterProvider} from 'react-router-dom';
const myrouter=createBrowserRouter([
  {path:"/",element:<Authentication/>},
  {path:"/registration",element:<Credits/>},
  {path:"/otp",element:<Otp/>},
  {path:"/sucess",element:<Microid/>},
  {path:"/login",element:<Login/>}

])

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={myrouter}/>
)
