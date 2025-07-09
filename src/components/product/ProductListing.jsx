import React from "react";
import ProductCard from "./ProductCard";

export default function ProductListing({ products }) {
  return (
    <div className="product-listing-container">
      <div className="product-listing-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="product-listing-empty">No products found.</p>
        )}
      </div>
    </div>
  );
}
