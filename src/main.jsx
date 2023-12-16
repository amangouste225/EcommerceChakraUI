import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Navbar } from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Router>
      <Navbar />
      <main>{/* <Routes to></Routes> */}</main>
    </Router>
  </ChakraProvider>
);
