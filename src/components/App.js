import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../style/globalStyles";
import PrivatePage from "./privatePage/PrivatePage";
import UserContext from "../context/UserContext";
import SignUp from "./signUp/SignUp";
import Login from "./login/Login";
import Subscriptions from "./subscriptions/Subscriptions";
import Home from "./home/Home";
// import { useState } from "react";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserContext.Provider value={{}}>
          <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/subscriptions" element={<PrivatePage><Subscriptions /></PrivatePage>} />
            <Route path="/home" element={<PrivatePage><Home /></PrivatePage>} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
