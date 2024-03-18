import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="products-parent-section" id="products">
      <h2 className="our-products-title">Our Products</h2>
      
      <div className="products-section">
        {/* Product one */}
        <div className="product-one">
          <div className="product-image">
            <img src="/assets/about-image.jpg" alt="Mbessa Product" />
          </div>
          <div className="product-description-parent">
            <h4 className="product-name-one">MBESSA </h4>
            <p className="product-description-one">
              This is our flagship product targeting micro and small businesses.
              At Izettl, we understand that businesses exist in a fast-paced and
              ever-changing environment that requires flexible everyday
              solutions. Our products are built on this knowledge-making us the
              one-stop shop for quick and easy personal and business loans. Our
              lending platform allows small businesses to access between Kenya
              shillings 3,000-20,000 to cover critical expenses such as stock
              purchases and working capital float when they need it the most.
            </p>
          </div>
        </div>

        {/* Product two */}
        <div className="product-two">
          <div className="product-image">
            <img src="/assets/product-two.jpg" alt="KuzaMo Product" />
          </div>
          <div className="product-description-parent">
            <h4 className="product-name-two">KuzaMO </h4>
            <p className="product-description-two">
              We exist because farmers are important to us! -They drive the
              nation and the world at large. The KuzaMo team at Izettl
              understands that agriculture contributes to job creation as the
              largest employer in the world. With the ever-changing climate,
              farming cycles are no longer predictable. We provide solutions to
              small-holder farmers who need financing to purchase farm inputs,
              seeds, and fertilizer on the go. Our lending platform allows
              small-holder farmers to access between Kenya shillings
              3,000-30,000 with flexible payment cycles based on the maturity
              dates of their crops.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
