import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-10 p-10">
      <div className="text-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        <p className="text-gray-600 mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
