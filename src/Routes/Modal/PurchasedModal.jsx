import { useNavigate } from "react-router-dom";
import successIcon from "../../assets/Group.png";

const PurchasedModal = ({ totalPrice, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    // Clear cart and reset total price
    onClose();
    // Navigate to home page
    navigate("/");
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box text-center">
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4">
          <img src={successIcon} alt="Success" />
        </div>

        {/* tTitle */}
        <h3 className="font-bold text-2xl text-gray-800 mb-2">
          Payment Successful!
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          Thank you for your purchase of ${totalPrice}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Your order has been placed successfully and will be processed soon.
        </p>

        {/* Button */}
        <div className="modal-action justify-center">
          <button
            onClick={handleClose}
            className="px-8 py-3 bg-gradient-to-b from-purple-700 to-fuchsia-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default PurchasedModal;
