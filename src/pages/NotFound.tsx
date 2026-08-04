
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="w-full max-w-xl mx-auto bg-white/5 backdrop-blur-sm px-4 md:px-12 py-8 md:py-20 rounded-3xl relative overflow-hidden text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">404</h1>
        <p className="text-xl text-black mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
