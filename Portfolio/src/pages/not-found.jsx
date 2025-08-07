import React from 'react';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-500 to-pink-500 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-white tracking-tight mb-6 flex justify-center space-x-2">
          <span className="transform transition-all duration-500 hover:scale-110 hover:text-gray-900">4</span>
          <span className="transform transition-all duration-500 hover:scale-110 hover:text-gray-900">0</span>
          <span className="transform transition-all duration-500 hover:scale-110 hover:text-gray-900">4</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-300 hover:text-gray-900">
          Page Not Found
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-md mx-auto mb-8">
          Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <a
          href="/"
          className="inline-block bg-white text-amber-600 font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-900 hover:text-white hover:shadow-xl hover:-translate-y-1"
        >
          Back to Home
        </a>
      </div>
      
    </div>
  );
};

export default PageNotFound;