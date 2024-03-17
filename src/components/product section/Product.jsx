import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="products-parent-section">
      <h2 className="our-products-title">Our Products</h2>
      <div className="products-section">
              {/* Product one */}
      <div className="product-card">
        <img
          src="/assets/about-image.jpg"
          alt="Product One"
          className="product-image"
        />
        <div className="product-details">
          <h2 className="product-name">MBESSA</h2>
          <p className="product-description">
            Our flagship product at Izettl caters to micro and small businesses,
            offering versatile solutions tailored to the fast-paced business
            environment. With loan amounts ranging from Kenya shillings 3,000 to
            20,000, our lending platform provides quick access to funds for
            critical expenses such as stock purchases and working capital needs.
          </p>
        </div>
      </div>

      {/* Product two */}
      <div className="product-card">
        <img
          src="/assets/product-two.jpg"
          alt="Product Two"
          className="product-image"
        />
        <div className="product-details">
          <h2 className="product-name">KUZA MO</h2>
          <p className="product-description">
            This product, is dedicated to supporting small-holder farmers by
            providing tailored financial solutions and flexible payment cycles,
            it ensures accessibility to funds ranging from 3,000 to 30,000 Kenya
            shillings. Empowering farmers to navigate unpredictable farming
            cycles, KuzaMo facilitates the seamless acquisition of essential
            farm inputs, seeds, and fertilizer.
          </p>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Product;
