import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import { addToCart } from "../redux/slices/cartSlice";

const Home = () => {

  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  console.log(cart.length)
  const dispatch = useDispatch();
    // add to cart

  const AddToCart = (product)=>{
    dispatch(addToCart(product))
  }
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="py-5 mt-5">
      <Row>
        {products.map((product) => (
          <Col md={3} xs={12} key={product.id} className="mt-3">
            <Card
              className="text-center py-3 mx-auto"
              style={{
                height: "350px",
                border: "none",
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Img
                variant="top"
                src={product.image}
                style={{
                  height: "100px",
                  width: "100px",
                  margin: "auto",
                }}
              />
              <Card.Body>
                <Card.Title className="fs-6 d-flex align-items-center" style={{height:'100px'}}>{product.title}</Card.Title>
                <Card.Text className="text-start fw-bold">
                  {product.price} $
                </Card.Text>
                
                  <Button variant="primary" onClick={() => AddToCart({...product, quantity:1})}>Add To Cart</Button>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
