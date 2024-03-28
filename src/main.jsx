import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryclient } from "./config/query-client.js";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryclient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
