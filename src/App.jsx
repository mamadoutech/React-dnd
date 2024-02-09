import { useState } from "react";
import Shop from "./pages/Shop/Shop";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MonsterList from "./pages/MonsterList/MonsterList";
import MonsterDetails from "./pages/MonsterDetails/MonsterDetails";
import SpellSearch from "./components/SpellSearch/SpellSearch";
import SpellDetails from "./components/SpellDetails/SpellDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/monsters" element={<MonsterList />} />
        <Route path="/monsters/:monsterId" element={<MonsterDetails />} />
        <Route path="/spells" element={<SpellSearch />} />
        <Route path="/spells/:spellId" element={<SpellDetails />} />
      </Routes>
    </>
  );
}

export default App;
