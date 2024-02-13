import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Resume from "./Resume.jsx";
import { urlPathBase } from "./utils/constants/index.js";

const router = createBrowserRouter([
  {
    path: `${urlPathBase}/`,
    element: <App />,
  },
  {
    path: `${urlPathBase}/resume`,
    element: <Resume />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
