import "./App.css";
import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { Admin } from "./pages/admin/Admin";
import { Catalog } from "./pages/catalog/Catalog";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { NavBar } from "./common/NavBar";
import { PhotoDetail } from "./pages/catalog/PhotoDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <hr />

      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route
          path="*"
          element={
            <div>
              <p>Pagina non esistente</p>
              <Link to="/">Go to home</Link>
            </div>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:id" element={<PhotoDetail />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
