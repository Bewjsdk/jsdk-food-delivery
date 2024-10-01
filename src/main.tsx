import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./App.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.tsx";
import StoreContextProvider from "./context/StoreContext.tsx";
import Home from "./pages/Home/Home.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "order",
        element: <PlaceOrder />
      }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
  </StrictMode>
);
