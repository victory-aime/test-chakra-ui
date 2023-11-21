import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
