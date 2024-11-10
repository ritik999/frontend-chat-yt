import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Login from "./pages/login/Login.tsx";
import Signup from "./pages/signup/Signup.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import { SocketContextProvider } from "./context/SocketContext.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
