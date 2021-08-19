import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../userData";
import "./product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product-title-container">
        <h1 className="product-title">Product</h1>
        <Link to="/newproduct">
          <button className="product-add-button">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-left">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sales Performances"
          />
        </div>
        <div className="product-top-right">
          <div className="product-info-top"></div>
          <div className="product-info-bottom"></div>
        </div>
      </div>
      <div className="product-bottom"></div>
    </div>
  );
};

export default Product;
