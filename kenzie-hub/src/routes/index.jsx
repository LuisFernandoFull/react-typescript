import { Route, Routes } from "react-router-dom";
import { Dashbord } from "../pages/Dashbord";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/dashbord" element={<Dashbord />} />
  </Routes>
);
