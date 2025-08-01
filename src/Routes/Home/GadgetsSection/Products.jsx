import { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import ProductCard from "../../Cards/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/gadgetsData.json");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);

        // Extract unique categories
        const uniqueCategories = [
          "All",
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <section>
      <h1 className="text-[28px] md:text-[40px] font-bold text-center pb-12 md:pb-12">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-6 pb-12 md:pb-18 lg:pb-24">
        {/* sidebar */}
        <div className="w-full md:w-64 h-fit bg-white rounded-xl shadow-md p-6">
          <Sidebar
            categories={categories}
            activeCategory={activeCategory}
            onCategorySelect={handleCategorySelect}
          />
        </div>

        {/* product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
