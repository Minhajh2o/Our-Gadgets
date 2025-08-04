import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { useInterest } from "../Context/InterestContext";
import StarRatings from "react-star-ratings";
import toast from "react-hot-toast";

const ProductDetailsCard = ({ product }) => {
  const { addToCart, addToWishlist } = useInterest();

  // Destructure product details
  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    specifications,
    availability,
    rating,
  } = product;

  
  // Handler for adding to cart
  const handleAddToCart = () => {
    const result = addToCart(product_id);
    if (result.success) {
      toast.success("Product added to cart!");
    } else {
      toast.error(result.message);
    }
  };

  // Handler for adding to wishlist
  const handleAddToWishlist = () => {
    const result = addToWishlist(product_id);
    if (result.success) {
      toast.success("Product added to wishlist!");
    } else {
      toast.error(result.message);
    }
  };


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
          <p className="text-lg font-semibold pt-3">Price: ${price}</p>
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
        <p className="text-gray-700">{description}</p>

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
          <div className="flex items-center gap-2">
            <StarRatings
              rating={parseFloat(rating)}
              starRatedColor="#FBBF24"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="1px"
            />
            <span className="text-gray-600 font-semibold">{rating}</span>
        </div>
        </div>

        {/* actions */}
        <div className="flex gap-4">
          <button
            onClick={() => handleAddToCart()}
            className="btn bg-purple-700 text-white rounded-full"
          >
            Add to Cart
            <HiOutlineShoppingCart />
          </button>
          <button
            onClick={() => handleAddToWishlist()}
            className="btn btn-circle text-purple-700 border-2 border-purple-700"
          >
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
