import Navbar from "./NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";

const Root = () => {

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Home | Our Gadgets</title>
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
