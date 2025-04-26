import React from 'react';
import { MapPin, Phone, Clock, ChevronLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { products } from '../data/mockData';

const Stores: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProductPage = location.pathname.includes('/stores/product');
  const productId = location.pathname.split('/').pop();
  
  const stores = [
    {
      id: 's1',
      name: 'Downtown Flagship Store',
      address: '123 Fashion Avenue, New York, NY 10001',
      phone: '+1 (212) 555-1234',
      hours: 'Mon-Sat: 10am-8pm, Sun: 11am-6pm',
      image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 's2',
      name: 'Westfield Mall',
      address: '456 Shopping Lane, Los Angeles, CA 90025',
      phone: '+1 (310) 555-6789',
      hours: 'Mon-Sat: 10am-9pm, Sun: 11am-7pm',
      image: 'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 's3',
      name: 'Michigan Avenue',
      address: '789 Luxury Blvd, Chicago, IL 60611',
      phone: '+1 (312) 555-4321',
      hours: 'Mon-Sat: 10am-8pm, Sun: 12pm-6pm',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const product = products.find(p => p.id === productId);

  if (isProductPage && product) {
    return (
      <div className="min-h-screen bg-white pb-20">
        <div className="relative">
          <button 
            onClick={() => navigate('/stores')}
            className="absolute top-4 left-4 z-10 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft size={24} />
          </button>
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-[50vh] object-cover"
          />
        </div>
        
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="space-y-4">
            <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
              Add to Cart
            </button>
            <button className="w-full border border-black py-3 rounded-lg font-medium">
              Add to Wishlist
            </button>
          </div>
          
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Available in Stores</h2>
            <div className="space-y-4">
              {stores.map(store => (
                <div key={store.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{store.name}</h3>
                    <p className="text-sm text-gray-600">{store.address}</p>
                  </div>
                  <div className="text-sm font-medium text-green-600">In Stock</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-6 pb-20 px-4">
      <h1 className="text-2xl font-bold mb-6">Our Stores</h1>
      <div className="space-y-6">
        {stores.map(store => (
          <div key={store.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={store.image} 
              alt={store.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{store.name}</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-start">
                  <MapPin size={18} className="mr-2 flex-shrink-0 mt-1" />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="mr-2 flex-shrink-0" />
                  <span>{store.phone}</span>
                </div>
                <div className="flex items-start">
                  <Clock size={18} className="mr-2 flex-shrink-0 mt-1" />
                  <span>{store.hours}</span>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <button className="w-full bg-black text-white py-2 rounded-md font-medium">
                  Get Directions
                </button>
                <button 
                  onClick={() => navigate(`/stores/product/${products[0].id}`)}
                  className="w-full border border-black py-2 rounded-md font-medium"
                >
                  View Products
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;