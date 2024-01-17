import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DiceHome from "./components/DiceHome.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Play from "./components/Play.jsx";
const Router = createBrowserRouter([
  { path: "/", element: <DiceHome /> },
  { path: "/playNow", element: <Play /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
