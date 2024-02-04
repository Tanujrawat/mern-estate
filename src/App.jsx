import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Signin";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
