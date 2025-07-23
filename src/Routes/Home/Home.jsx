import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import ProductCart from "../Carts/ProductCart";

const Home = () => {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/gadgetsData.json");
        const data = await response.json();
        console.log("data", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="px-4 md:px-8 bg-slate-100">
      <Banner />
      <h1 className="text-[28px] md:text-[40px] font-bold text-center pb-12 md:pb-12">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="pb-12 md:pb-24">
        {/* Additional content can be added here */}
        
        {/* product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
          <ProductCart key={product.product_id} product={product} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Home;