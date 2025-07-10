import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { AuthProvider } from "./auth/AuthContext";
import { StyledEngineProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </AuthProvider>
);
