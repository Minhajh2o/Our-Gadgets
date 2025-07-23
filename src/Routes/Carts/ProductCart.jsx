const ProductCart = ({ product }) => {
    const { product_title, product_image, price } = product;
  return (
    <div>
      <div className="card p-6 bg-base-100 rounded-xl shadow-sm">
        <figure className="rounded-lg overflow-hidden mb-6">
            <img className="w-full h-64 sm:h-52 md:h-52 rounded-lg object-cover" src={product_image} alt={product_title} />
          </figure>
          <div className="">
            <h2 className="card-title text-2xl">{product_title}</h2>
            <p className="text-gray-600 text-xl pt-2 pb-4">${price}</p>
            <div className="card-actions">
              <button className="btn bg-white text-purple-700 border border-purple-700 rounded-full hover:bg-purple-100">
                Shop Now
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProductCart;
