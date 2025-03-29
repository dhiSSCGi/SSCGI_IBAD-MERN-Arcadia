import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./assets/css/bootstrap.css";

import "./assets/css/general.css";
// import "./assets/css/index.css";

import "./assets/css/styles.css";
import "./assets/css/queries.css";

import App from "./App.jsx";
// import "./assets/js/script.js";
// import "./assets/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer position="top-right" />
  </StrictMode>
);
