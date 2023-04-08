import React from "react";
import noBroduct from "../img/emptyCart.png";
import { Link } from "react-router-dom";
const NoProducts = () => {
  return (
    <div className="py-5 mt-5 text-center">
      <Link to="/">
        <img src={noBroduct} alt="no broducts" width={500} style={{maxWidth:'100%'}}/>
      </Link>
    </div>
  );
};

export default NoProducts;
