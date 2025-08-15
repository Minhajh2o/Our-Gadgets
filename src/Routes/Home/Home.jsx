import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Products from "./GadgetsSection/Products";

const Home = () => {
  return (
    <div className="px-4 md:px-8 bg-slate-100">
      <Helmet>
        <title>Home | Our Gadgets</title>
      </Helmet>
      
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
