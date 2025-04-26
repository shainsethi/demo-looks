import React from 'react';

const Categories: React.FC = () => {
  const categories = [
    { id: 'c1', name: 'Women', image: 'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'c2', name: 'Men', image: 'https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'c3', name: 'Accessories', image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 'c4', name: 'Shoes', image: 'https://images.pexels.com/photos/6046226/pexels-photo-6046226.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  return (
    <div className="container mx-auto pt-6 pb-20 px-4">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>
      <div className="grid grid-cols-2 gap-4">
        {categories.map(category => (
          <div key={category.id} className="relative overflow-hidden rounded-lg shadow-md aspect-square">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
              <h3 className="text-white text-xl font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;