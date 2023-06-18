import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')).render(<App />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Router>
//       <ChakraProvider> */}
//         <App />
//       {/* </ChakraProvider>
//     </Router> */}
//   </React.StrictMode>,
//   document.getElementById("root")
// );