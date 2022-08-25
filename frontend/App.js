import "regenerator-runtime/runtime";
import React from "react";
import "./assets/global.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBlog />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
