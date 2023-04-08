import React from "react";
import AppNavbar from "./components/AppNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Container } from "react-bootstrap";
import './index.css'
const App = () => {
  return (
    <>
      <AppNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
