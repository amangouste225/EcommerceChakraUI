import { ChakraProvider as Provider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Navbar } from "./components/Navbar.jsx";
import { ProductsUI } from "./ui/ProductsUI.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/products" element={<ProductsUI />}></Route>
        </Routes>
      </main>
    </Router>
  </Provider>
);
