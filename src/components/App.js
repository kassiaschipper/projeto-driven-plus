import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../style/globalStyles";
import PrivatePage from "./privatePage/PrivatePage";
import SignUp from "./signUp/SignUp";
import Login from "./login/Login";
import Subscriptions from "./subscriptions/Subscriptions";
import Plan from "./subscriptions/Plan";
import Home from "./home/Home";
import { useState } from "react";
import UserContext from "../context/UserContext";

export default function App() {
  const [purchaseData, setPurchaseData] = useState({});
  const [cardName, setCardName] = useState("");
  
  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserContext.Provider value={{purchaseData, setPurchaseData, cardName, setCardName}}>
          <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/subscriptions" element={<PrivatePage><Subscriptions /></PrivatePage>} />
            <Route path="/subscriptions/:planId" element={<PrivatePage><Plan /></PrivatePage>} />
            <Route path="/home" element={<PrivatePage><Home /></PrivatePage>} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
