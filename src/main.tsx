/* eslint-disable react-refresh/only-export-components */
import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/header";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";
import { Footer } from "./components/footer";
import ScrollToHash from "./components/scroll-to-hash";
import { FloatingActionButton } from "./components/call-chat";

const HomePage = lazy(() => import("./pages"));
const ServicesPage = lazy(() => import("./pages/services"));
const GalaryPage = lazy(() => import("./pages/gallery"));
const ContactPage = lazy(() => import("./pages/contact"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="gallery" element={<GalaryPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <FloatingActionButton />
    </BrowserRouter>
  </StrictMode>
);
