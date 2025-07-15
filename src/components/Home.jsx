import PageHeading from "./PageHeading";
import ProductListing from "./product/ProductListing";
import products from "../data/products.js";

export default function Home() {
    return (
        <div className="max-w-[1152px] mx-auto px-6 py-8">
            <PageHeading title="Explore Eazy Stickers!">
                Add a touch of creativity to your space with our wide range of fun and unique stickers.
                Whether you're looking to personalize your laptop, decorate your room, or find the perfect gift, we have it.
                Browse our collection and let your imagination run wild!
            </PageHeading>
            <ProductListing products={products} />
        </div>
    );
}
