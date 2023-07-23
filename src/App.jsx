import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/blog/:id" exact Component={Blog}></Route>
      </Routes>
    </div>
  );
};

export default App;
