import { Link } from "react-router-dom";

export const HomeButton = () => {
  return (
    <div className="flex justify-center my-4">
      <Link to="/">
        <button className="w-64 text-xl font-bold my-10 text-white hover:bg-gradient-to-l bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2">
          Back To Home
        </button>
      </Link>
    </div>
  );
};
