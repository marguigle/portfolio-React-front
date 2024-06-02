
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Medic from './pages/Medic.jsx';
import WebDeveloper from './pages/WebDeveloper.jsx'
import { useEffect } from "react";
import { Tooltip, initTWE } from "tw-elements";
// import CargaImagenes from './components/CargaImagenes.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/medic",
      element: <Medic />,
    },
    {
      path: "/developer",
      element: <WebDeveloper />,
    }
    ]
   }] )

   function App() {
   useEffect(() => {
    initTWE({ Tooltip });
  }, []);



  return ( <RouterProvider router={router}/>)
}

export default App
