import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-50 px-4">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <ShoppingBag size={48} className="text-black" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Welcome to Fashion Look</h1>
        <p className="text-gray-600 mb-8">Discover the latest looks and styles</p>
        <div className="flex flex-col space-y-4 w-full max-w-xs">
          <button className="bg-black text-white py-3 px-6 rounded-lg font-medium">
            Explore Lookbook
          </button>
          <button className="bg-white text-black border border-black py-3 px-6 rounded-lg font-medium">
            Shop New Arrivals
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;