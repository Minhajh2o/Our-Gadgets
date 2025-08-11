import DashboardProductCard from "../Cards/DashboardProductCard";
import EmptyState from "../EmptyState/EmptyState";

const Wishlist = ({ filteredWishlist }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Wishlist</h2>
      {/* Cart Items Section */}
      {filteredWishlist.length === 0 ? (
        <div className="flex items-center justify-center">
          <EmptyState />
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {filteredWishlist.map((product) => (
            <DashboardProductCard key={product.product_id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
