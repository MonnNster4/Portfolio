import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { BrowserRouter } from 'react-router-dom'
import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "./assets/Navbar/Navbar";
// import About from "./assets/About/About";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar />,

//     children: [
//       {
//         path: "/about",
//         element: <About />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
