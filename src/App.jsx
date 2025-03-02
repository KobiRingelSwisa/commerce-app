import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
