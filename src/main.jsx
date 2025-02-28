import "react-toastify/dist/ReactToastify.css";
import 'antd/dist/reset.css';
import "./index.css";
import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
      <ToastContainer />
    </QueryClientProvider>
  </StrictMode>
);
