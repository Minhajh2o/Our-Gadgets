import { useLoaderData, useParams } from "react-router-dom";
import ProductDetailsCard from "../Cards/ProductDetailsCard";

const ProductDetails = () => {
  const data = useLoaderData();
  const params = useParams();
  const { productId } = params;

  console.log("All params:", params);
  console.log("ProductId from params:", productId);
  console.log("Data:", data);

  const product = data.find((item) => item.product_id === productId);
  console.log("Found product:", product);

  return (
    <section className="relative bg-pink-300 pb-160 sm:pb-176 md:pb-100 lg:pb-112">
      <div
        className="relative bg-purple-700 text-white pb-38 sm:pb-52 md:pb-50"
      >
        <div className="px-4 py-6 md:py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Product Details
          </h1>
          <p className="max-w-2xl mx-auto pt-2 md:pt-4 text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      {/* product cart */}
      <div className="absolute top-40 sm:top-36 md:top-42 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
        <ProductDetailsCard key={product.product_id} product={product} />
      </div>
    </section>
  );
};

export default ProductDetails;
