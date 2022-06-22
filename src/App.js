import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navi from "./components/Navbar/Navi";
import DUMMY_AUTO from "./Data/Data";
import AutoList from "./components/MainMenu/AutoList/AutoList";
import AutoAdd from "./components/AutoAdd/AutoAdd";
import AutoDetail from "./components/AutoDetail/AutoDetail";
import Error from "./components/Error/Error";
import Chat from "./components/Messages/Chat"

const App = () => {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    const localData = localStorage.getItem("data") ?? [];
    if (localData.length === 0) {
      localData.push(...DUMMY_AUTO);
      setAutos(localData);
    } else {
      setAutos(JSON.parse(localData));
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navi />
        <Routes>
          <Route path="/" element={<AutoList items={autos} />} />
          <Route path="/addAuto" element={<AutoAdd />} />
          <Route path="/:autoId" element={<AutoDetail items={autos} />} />
          <Route path="*" element={<Error />} />
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
