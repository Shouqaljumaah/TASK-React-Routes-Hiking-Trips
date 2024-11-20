import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";

const hikingRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/TripsList",
    element: <TripsList />,
  },
  { path: "/TripDetail/:tripId", element: <TripDetail /> },
]);
// const root = ReactDOM.createRoot(decument.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={hikingRouter} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
