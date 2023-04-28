import React from "react";
import NoProducts from "./NoProducts";
import { Button, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  deleteAllProducts,
  deleteFromCart,
  incrementItem,
} from "../redux/slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
  const notify = () => toast.error("Products have been removed!");
  const deleteProduct = () => toast.error("The product has been removed from the cart!");
  /////////////////////////////////////////
  const dispatch = useDispatch();
  const deleteALL = () => {
    dispatch(deleteAllProducts());
    notify();
  };
  const deleteProductItem =(product)=>{
    dispatch(deleteFromCart(product))
    deleteProduct();
  }
  const cart = useSelector((state) => state.cart);
  const totalePrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <div className="py-5 mt-5">
      {cart.length <= 0 ? (
        <NoProducts />
      ) : (
        <>
          <h5
            className="bg-warning py-3 text-center rounded"
            style={{ width: "200px" }}
          >
            {" "}
            Total : {totalePrice.toFixed(2)}$
          </h5>
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>Number</th>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id} className="text-center">
                  <td>{product.id}</td>
                  <td className="fw-bold">{product.title}</td>
                  <td>
                    <Image
                      src={product.image}
                      alt={product.title}
                      style={{ maxWidth: "40px" }}
                    />
                  </td>
                  <td className="fw-bold">{product.price} $</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center gap-3 mt-2">
                      <div className="d-flex gap-2 align-items-center">
                        <Button
                          variant="primary"
                          size="sm"
                          className="px-3"
                          onClick={() => dispatch(incrementItem(product.id))}
                        >
                          +
                        </Button>
                        <span>{product.quantity}</span>
                        <Button
                          variant="primary"
                          size="sm"
                          className="px-3"
                          onClick={() => dispatch(decrementItem(product.id))}
                        >
                          -
                        </Button>
                      </div>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteProductItem(product)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="currentColor"
                          class="bi bi-trash3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {cart.length > 1 ? (
                <Button
                  variant="danger"
                  className="my-3 btn-delete-all"
                  onClick={() => deleteALL()}
                >
                  Delete All{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                  </svg>
                </Button>
              ) : (
                console.log("test")
              )}
            </tbody>
          </Table>
        </>
      )}
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
  );
};

export default Cart;