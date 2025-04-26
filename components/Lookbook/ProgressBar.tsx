import React from 'react';

interface ProgressBarProps {
  duration: number;
  onComplete?: () => void;
  isActive: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isActive }) => {
  return (
    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full ${isActive ? "bg-black" : ""}`}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default ProgressBar;