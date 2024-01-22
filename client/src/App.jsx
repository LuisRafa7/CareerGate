import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/auth/SingupPage";
import LoginPage from "./pages/auth/LoginPage";
import ProfilePage from "./pages/auth/ProfilePage";
import CreateCV from "./pages/CreateCV";
import Homepage from "./pages/Homepage";
import PersonPage from "./pages/PersonPage";
import ShowCV from "./pages/ShowCV";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/person" element={<PersonPage />} />
        <Route path="/person/CV/:personId" element={<ShowCV />} />
        <Route path="/person/createCV" element={<CreateCV />} />
      </Routes>
    </>
  );
}

export default App;
