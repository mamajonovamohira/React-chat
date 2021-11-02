import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navabr from "./components/Navbar";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navabr/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
