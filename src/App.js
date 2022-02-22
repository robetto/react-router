import "./App.css";
import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { Admin } from "./pages/admin/Admin";
import { Catalog } from "./pages/catalog/Catalog";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { NavBar } from "./common/NavBar";
import { PhotoDetail } from "./pages/catalog/PhotoDetail";
import { Registration } from "./pages/login/pages/Registration";
import { LostPsw } from "./pages/login/pages/LostPsw";
import { SignIn } from "./pages/login/pages/SignIn";
import { PrivateRoute } from "./common/PrivateRoute";

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
        <Route path="login" element={<Login />}>
          <Route index element={<SignIn />} />
          <Route path="registration" element={<Registration />} />
          <Route path="lostpsw" element={<LostPsw />} />
        </Route>

        <Route
          path="admin"
          element={<PrivateRoute redirectTo="/login" element={<Admin />} />}
        />

        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:id" element={<PhotoDetail />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
