import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import SearchBox from "../SearchBox";
import Dropdown from "../Dropdown";

const sortList = ["Popularity", "Price: Low to High", "Price: High to Low"];

export default function ProductListing({ products }) {
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("Popularity");

  function handleSearchChange(value) {
    setSearchText(value);
  }

  function handleSortChange(value) {
    setSortOption(value);
  }

  const filteredSortedProducts = useMemo(() => {
    if (!Array.isArray(products)) {
      return [];
    }

    let filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase())
    );

    return filteredProducts.slice().sort((a, b) => {
      switch (sortOption) {
        case "Price: Low to High":
          return parseFloat(a.price) - parseFloat(b.price);
        case "Price: High to Low":
          return parseFloat(b.price) - parseFloat(a.price);
        case "Popularity":
        default:
          return parseInt(b.popularity) - parseInt(a.popularity);
      }
    });
  }, [products, searchText, sortOption]);

  return (
    <div className="max-w-[1152px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search"
          placeholder="Search products..."
          value={searchText}
          handleSearch={(value) => handleSearchChange(value)}
        />
        <Dropdown
          label="Sort by"
          options={sortList}
          selectedValue={sortOption}
          handleSort={(value) => handleSortChange(value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
        {filteredSortedProducts.length > 0 ? (
          filteredSortedProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="text-center font-primary font-bold text-lg text-primary">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
