const DashboardProductCard = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-6 w-full max-w-3xl mx-auto">
      {/* Product Image */}
      <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-xl flex-shrink-0">
        <img
          src=''
          alt='{title}'
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 space-y-2">
        <h3 className="text-lg md:text-xl font-bold text-gray-800">title</h3>
        <p className="text-sm text-gray-500 line-clamp-2">description</p>
        <p className="font-semibold text-gray-700">Price: $price</p>
      </div>

      {/* Remove Button */}
      <button className="ml-auto w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-200 transition-colors">
        <IoClose size={20} />
      </button>
    </div>
    );
};

export default DashboardProductCard;