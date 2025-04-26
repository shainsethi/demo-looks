import React, { useState } from 'react';
import { Annotation } from '../../types';

interface ProductAnnotationProps {
  annotation: Annotation;
  onClick: (annotation: Annotation) => void;
}

const ProductAnnotation: React.FC<ProductAnnotationProps> = ({ annotation, onClick }) => {
  
  return (
    <div 
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
      style={{ 
        left: `${annotation.x}%`, 
        top: `${annotation.y}%`
      }}
      onClick={() => onClick(annotation)}
    >
      <div className="relative">
        {/* Dot */}
        <div className="h-4 w-4 bg-white rounded-full shadow-md flex items-center justify-center">
          <div className="h-2 w-2 bg-black rounded-full"></div>
        </div>

        <div className="absolute top-0 left-0 h-4 w-4 rounded-full bg-white opacity-70 animate-ping"></div>
      </div>
    </div>
  );
};

export default ProductAnnotation;