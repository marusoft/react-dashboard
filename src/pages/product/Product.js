import { Publish } from "@material-ui/icons";
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
          <div className="product-info-top">
            <img
              src="https://res.cloudinary.com/marusofteamwork/image/upload/v1627628749/frontendassessment/smartphone.png"
              alt=""
              className="product-info-img"
            />
            <span className="product-name">Apple Airpods</span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info-item">
              <span className="product-info-key">id:</span>
              <span className="product-info-value">123</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Sales:</span>
              <span className="product-info-value">$67123</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">active:</span>
              <span className="product-info-value">yes</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">in stock:</span>
              <span className="product-info-value">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods"></input>
            <label>In Stock</label>
            <select name="in-stock" id="in-stock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img
                src="https://res.cloudinary.com/marusofteamwork/image/upload/v1627628749/frontendassessment/smartphone.png"
                alt=""
                className="product-upload-img"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display:"none"}}></input>
            </div>
            <button className="product-button">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
