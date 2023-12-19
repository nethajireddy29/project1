import React from 'react';
import ReactDOM from 'react-dom/client';
import Authentication from './login.js'
import Credits from './registration.js';
import App from './webcam.js';
import Otp from './otp.js'
import Microid from './microid.js'

import { createBrowserRouter,RouterProvider} from 'react-router-dom';
const myrouter=createBrowserRouter([
  {path:"/",element:<Authentication/>},
  {path:"/registration",element:<Credits/>},
  {path:"/registration/camera",element:<App/>},
  {path:"/registration/otp",element:<Otp/>},
  {path:"/registration/sucess",element:<Microid/>}

])

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={myrouter}/>
)
