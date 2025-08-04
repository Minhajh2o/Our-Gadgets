import successIcon from "../../assets/Group.png";

const PurchasedModal = ({ totalPrice, onClose }) => {
  const handleClose = () => {
    // Call the onClose callback when modal is closed
    if (onClose) {
      onClose();
    }
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle">
      <div className="modal-box text-center p-8">
        {/* Success Icon */}
        <img
          src={successIcon}
          alt="Success"
          className="w-16 h-16 mx-auto mb-4"
        />

        {/* Title */}
        <h3 className="font-bold text-2xl text-gray-800">
          Payment Successfully
        </h3>

        {/* Subtext */}
        <p className="pt-4 text-gray-500">Thanks for purchasing.</p>
        <p className="pt-2 text-gray-500">Total: ${totalPrice}</p>

        {/* Close Button */}
        <div className="modal-action mt-6">
          <form method="dialog" className="w-full">
            <button
              onClick={handleClose}
              className="btn w-full bg-gray-200 hover:bg-gray-300 border-none rounded-lg"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default PurchasedModal;
