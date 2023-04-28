import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import Logo from '../img/Logo.png'
import { Link } from "react-router-dom";

const AppNavbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar className="shadow-lg navbar py-0" fixed="top" bg="light" variant="light">
        <Container>
          <Link to="/" className='logo'>
            <img src={Logo} alt="logo" width={70}/>
          </Link>
          <Nav className="fw-bold d-flex gap-5">
            <Link to="/" className="nav__link">
              Products
            </Link>
            <Link to="/cart" className="nav__link">
              Cart
            </Link>
          </Nav>
          <Link to="/cart" style={{ position: "relative" }} className="cart">
            <svg
              style={{ color: "black" }}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-bag-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
            </svg>
            <span
              className="rounded-circle d-flex align-items-center justify-content-center bg-warning"
              style={{
                position: "absolute",
                top: "-5px",
                left: "25px",
                width: "25px",
                height: "25px",
                color: "#555"
              }}
            >
              {cart.length}
            </span>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;