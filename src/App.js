import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import "./App.css";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />{" "}
      </Routes>
    </Router>
  );
}
