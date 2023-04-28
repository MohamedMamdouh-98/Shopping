import React from "react";
import AppNavbar from "./components/AppNavbar";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Home";
import Cart from "./components/Cart";
import { Container } from "react-bootstrap";
import './index.css'
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";
const App = () => {
  return (
    <>
      <AppNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
      <Footer/>
      <ScrollToTop
      smooth
      top='500'
      />
    </>
  );
};

export default App;
