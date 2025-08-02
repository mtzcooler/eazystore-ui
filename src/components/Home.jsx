import PageHeading from "./PageHeading";
import ProductListing from "./product/ProductListing";
import apiClient from "../api/apiClient.js";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const products = useLoaderData();
  return (
    <div className="max-w-[1152px] mx-auto px-6 py-8">
      <PageHeading title="Explore Eazy Stickers!">
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Whether you're looking to personalize your laptop,
        decorate your room, or find the perfect gift, we have it. Browse our
        collection and let your imagination run wild!
      </PageHeading>
      <ProductListing products={products} />
    </div>
  );
}

export async function productsLoader() {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    throw new Response(
      error.message || "Failed to fetch products. Please try again.",
      { status: error.status || 500 }
    );
  }
}
