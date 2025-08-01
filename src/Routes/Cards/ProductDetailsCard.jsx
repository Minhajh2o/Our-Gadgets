import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";

const ProductDetailsCard = ({ product }) => {
  const {
    product_title,
    product_image,
    price,
    description,
    specifications,
    availability,
    rating,
  } = product;

  return (
    <div className="p-6 lg:p-8 bg-white flex flex-col md:flex-row gap-6 lg:gap-8 rounded-2xl shadow-xl">
      {/* product image */}
      <figure className="w-full md:max-w-5/12 rounded-xl overflow-hidden flex place-items-center">
        <img
          src={product_image}
          className="w-full h-full object-cover rounded-xl"
          alt={product_title}
        />
      </figure>

      {/* product details */}
      <div className="space-y-4">
        {/* title & price */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{product_title}</h1>
          <p className="pt-3">{price}</p>
        </div>

        {/* availability */}
        <div>
          {availability ? (
            <span className="badge badge-success rounded-full">In Stock</span>
          ) : (
            <span className="badge badge-error rounded-full">Out of Stock</span>
          )}
        </div>

        {/* description */}
        <p>{description}</p>

        {/* specifications */}
        <div>
          <h2 className="text-lg font-semibold pb-3">Specifications:</h2>
          <ul className="list-decimal pl-5">
            {specifications.map((spec, index) => (
              <li key={index} className="text-gray-700">
                {spec}
              </li>
            ))}
          </ul>
        </div>

        {/* rating */}
        <div>
          <h2 className="text-lg font-semibold pb-3">Rating ⭐</h2>
          <p>{rating}</p>
        </div>

        {/* actions */}
        <div className="flex gap-4">
          <button className="btn bg-purple-700 text-white rounded-full">
            Add to Cart
            <HiOutlineShoppingCart />
          </button>
          <button className="btn btn-circle text-purple-700 border-2 border-purple-700">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
