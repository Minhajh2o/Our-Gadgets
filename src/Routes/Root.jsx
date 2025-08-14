import Navbar from "./NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

// import { useInterest } from "./Context/InterestContext";
// import toast from "react-hot-toast";

const Root = () => {

  // const{totalPrice}=useInterest();

  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet />
      <Footer />


      {/* Display toast notification for successful purchases */}
      {/* {totalPrice > 10_000 && (
        toast.error("Total price exceeds the limit of 10,000. Please adjust your cart.")
      )} */}

      {/* <div className="fixed bottom-0 right-0 p-4 bg-white shadow-lg rounded-lg">
        <p>Total Price: {totalPrice}</p>
      </div> */}

    </div>
  );
};

export default Root;
