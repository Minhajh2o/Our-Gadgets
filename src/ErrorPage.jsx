import { useRouteError } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300 font-sans"
    >
      <div className="bg-white px-12 py-10 rounded-2xl shadow-lg text-center max-w-md">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <TbFaceIdError className="primary-text text-8xl animate-pulse" />
        </div>

        <h1 className="primary-text text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-lg text-gray-800 mb-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-red-600 italic text-base">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
