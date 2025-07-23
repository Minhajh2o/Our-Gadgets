import ProductDetailsCart from "../Carts/ProductDetailsCart";

const ProductDetails = () => {
    return (
        <section>
            <div className="bg-purple-700 border text-white">
                <div className="px-4 py-4 md:py-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-center">Product Details</h1>
                    <p className="max-w-2xl mx-auto pt-2md:pt-4 text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>

            {/* product cart */}
            <div>
                <ProductDetailsCart />
            </div>

        </section>
    );
};

export default ProductDetails;