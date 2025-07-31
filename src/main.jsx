import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";
import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { productsLoader } from "./components/Home.jsx";
import { contactAction } from "./components/Contact.jsx";

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} loader={productsLoader} />
    <Route path="/home" element={<Home />} loader={productsLoader} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} action={contactAction} />
    <Route path="/login" element={<Login />} />
    <Route path="/cart" element={<Cart />} />
  </Route>
);

const appRouter = createBrowserRouter(routeDefinitions);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      draggable
      pauseOnHover
      theme={localStorage.getItem("theme") === "dark" ? "dark" : "light"}
      transition={Bounce}
    />
  </StrictMode>
);
