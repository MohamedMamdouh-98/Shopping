import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { Rate } from "antd";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notify = () => toast.success("The product has been added to the cart");
  /////////////////////////////////
  
  const products = useSelector((state) => state.products);
  const [data, setData] = useState([]);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  
  useEffect(() => {
    setData(products);
  }, [products])

  
  ///////////////////////////////filter///////////////
  const filtration = (cat) => {
    const newData = products;
    setData(newData.filter((x) => x.category == cat));
  };



  ///////////////////////////////////////////////////


  // add to cart

  const AddToCart = (product) => {
    dispatch(addToCart(product));
    notify();
  };

  return (
    <>
      <div className="py-5 mt-5">
        <div className="d-flex gap-2 justify-content-center flex-wrap my-4 filter">
          <Button onClick={() => setData(products)}>All</Button>
          <Button onClick={() => filtration("men's clothing")}>
            men's 
          </Button>
          <Button onClick={() => filtration("jewelery")}>jewelery</Button>
          <Button onClick={() => filtration("electronics")}>electronics</Button>
          <Button onClick={() => filtration("women's clothing")}>
            women's 
          </Button>
        </div>
        <Row>
          {data.map((product) => (
            <Col md={3} xs={12} key={product.id} className="mt-3">
              <Card
                className="text-center py-3 mx-auto box"
                style={{
                  height: "350px",
                  border: "none",
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
                  <Card.Title
                    className="fs-6 d-flex align-items-center"
                    style={{ height: "100px" }}
                  >
                    {product.title}
                  </Card.Title>
                  <Card.Text className="text-start fw-bold">
                    <div className="d-flex align-items-center gap-4">
                      <span>{product.price} $</span>
                      <div>
                        <Rate defaultValue={product.rating.rate} allowHalf />
                      </div>
                    </div>
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => AddToCart({ ...product, quantity: 1 })}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default Home;
