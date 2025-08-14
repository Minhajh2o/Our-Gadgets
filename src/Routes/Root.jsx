import Navbar from "./NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Root = () => {

  // const{totalPrice}=useInterest();

  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
