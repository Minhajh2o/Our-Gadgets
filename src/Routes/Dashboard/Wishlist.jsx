import DashboardProductCard from "../Cards/DashboardProductCard";

const Wishlist = ({ filteredWishlist }) => {
  return (
    <div className="container max-w-5xl px-4 mx-auto">
      <div className="mt-12 mb-8">
        <h2 className="text-2xl font-bold">Wishlist</h2>
      </div>
      {/* Cart Items Section */}
      <div className="flex flex-col gap-6">
        {filteredWishlist.map((item) => (
          <DashboardProductCard key={item.product_id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
