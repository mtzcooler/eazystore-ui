import React, { useState } from "react";
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

  let filteredSortedProducts = Array.isArray(products)
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase())
      )
    : [];

  switch (sortOption) {
    case "Price: Low to High":
      filteredSortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "Price: High to Low":
      filteredSortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "Popularity":
    default:
      filteredSortedProducts.sort((a, b) => b.popularity - a.popularity);
      break;
  }

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
