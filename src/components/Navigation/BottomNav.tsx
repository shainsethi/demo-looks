import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Grid, Camera, Store, User } from 'lucide-react';
import { NavItem } from '../../types';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems: NavItem[] = [
    { name: 'Home', icon: 'home', path: '/' },
    { name: 'Categories', icon: 'categories', path: '/categories' },
    { name: 'Looks', icon: 'looks', path: '/looks' },
    { name: 'Stores', icon: 'stores', path: '/stores' },
    { name: 'Account', icon: 'account', path: '/account' }
  ];

  const getIcon = (icon: string, isActive: boolean) => {
    const color = isActive ? '#000' : '#737373';
    const strokeWidth = isActive ? 2 : 1.5;
    
    switch (icon) {
      case 'home':
        return <Home size={24} color={color} strokeWidth={strokeWidth} />;
      case 'categories':
        return <Grid size={24} color={color} strokeWidth={strokeWidth} />;
      case 'looks':
        return <Camera size={24} color={color} strokeWidth={strokeWidth} />;
      case 'stores':
        return <Store size={24} color={color} strokeWidth={strokeWidth} />;
      case 'account':
        return <User size={24} color={color} strokeWidth={strokeWidth} />;
      default:
        return <Home size={24} color={color} strokeWidth={strokeWidth} />;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive ? 'text-black' : 'text-neutral-500'
              }`}
            >
              {getIcon(item.icon, isActive)}
              <span className={`text-xs mt-1 ${isActive ? 'font-medium' : 'font-normal'}`}>
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;