import { useLoaderData, useParams } from "react-router-dom";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";import RatingStars from "../../RreactRatingStars,jsx";

const ProductDetailsCart = () => {
  const data = useLoaderData();
  const { productId } = useParams();
  const product = data.find((item) => item.product_id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Product not found
          </h2>
          <p className="text-gray-600">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-purple-700 text-white">
        <div className="px-4 py-6 md:py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Product Details
          </h1>
          <p className="max-w-2xl mx-auto pt-2 md:pt-4 text-center text-purple-100">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      {/* Product Details Card */}
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="md:w-1/2 p-6 md:p-8 flex items-center justify-center bg-gray-50">
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-full h-64 md:h-80 object-contain rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                {product.product_title}
              </h2>

              <p className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
                Price: <span className="text-purple-600">${product.price}</span>
              </p>

              {/* Availability */}
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    product.availability
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {product.availability ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                {product.description}
              </p>

              {/* Specifications */}
              {product.Specification && product.Specification.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                    Specification:
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {product.Specification.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-600 font-medium mr-2">
                          {index + 1}.
                        </span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Rating */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                  Rating ⭐
                </h3>
                <div className="flex items-center gap-3">
                  <RatingStars
                    rating={product.rating}
                    size={22}
                    isEditable={false}
                  />
                  <span className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                    {product.rating}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  disabled={!product.availability}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex-1 ${
                    product.availability
                      ? "bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <HiOutlineShoppingCart className="text-sm" />
                  Add To Cart
                </button>
                <button className="flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-purple-600 hover:bg-purple-50 text-gray-700 hover:text-purple-600 px-4 py-3 rounded-lg font-medium transition-all duration-300">
                  <FaRegHeart className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsCart;
