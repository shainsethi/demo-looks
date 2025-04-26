import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Welcome to Fashion Store</h1>
        <p className="text-gray-600 mb-8">Discover the latest looks</p>
      </div>
    </div>
  );
};

export default Home;