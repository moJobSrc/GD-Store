import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderCheck from "./pages/checkOrder";
import OrderProcess from "./pages/orderProcess"
import Main from "./pages/Index"
import "./style.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/checkOrder" element={<OrderCheck />}></Route>
        <Route path="/orderProcess/:id" element={<OrderProcess />}></Route>
      </Routes>
    </Router> 
  );
}

export default App;
