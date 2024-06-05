import React from 'react';

const Home = () => (
  <div className="min-h-screen bg-white flex flex-col p-4">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Quick</h1>
      <p className="text-gray-600 mb-6">coding challenge</p>
      <div className="flex space-x-4 justify-center">
        <h2 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">created</h2>
        <h2 className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">by</h2>
        <h2 className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">Wahdan</h2>
      </div>
    </div>
  </div>
);

export default Home;
