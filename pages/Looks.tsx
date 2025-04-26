import React from 'react';
import VerticalCarousel from '../components/Lookbook/VerticalCarousel';
import { looks } from '../data/mockData';

const Looks: React.FC = () => {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <VerticalCarousel looks={looks} />
    </div>
  );
};

export default Looks;