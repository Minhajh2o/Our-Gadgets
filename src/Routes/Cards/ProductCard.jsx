import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;
  return (
    <div>
      <div className="card p-6 bg-base-100 rounded-xl shadow-sm">
        <figure className="rounded-lg overflow-hidden mb-6">
          <img
            className="w-full h-64 sm:h-52 md:h-52 rounded-lg object-cover"
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="">
          <h2 className="card-title text-xl md:text-2xl line-clamp-1">
            {product_title}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl pt-2 pb-4">${price}</p>
          <div className="card-actions">
            <Link to={`/products/${product_id}`}>
              <button className="p-[1px] rounded-full bg-gradient-to-b from-purple-700 to-fuchsia-600">
                <span className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full">
                  <span className="font-semibold text-purple-700">
                    View Details
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
