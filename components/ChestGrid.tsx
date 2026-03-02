import React from 'react';
import Chest from './Chest';
import { ChestStatus } from '../types';

interface ChestGridProps {
  chests: ChestStatus[];
  onChestClick: (index: number) => void;
  disabled: boolean;
}

const ChestGrid: React.FC<ChestGridProps> = ({ chests, onChestClick, disabled }) => {
  return (
    // Fixed "Board" Container
    <div className="grid grid-cols-3 gap-3 md:gap-4 relative">
      {chests.map((status, index) => (
        <div 
          key={index} 
          // Responsive sizing
          className="w-[82px] h-[82px] sm:w-[96px] sm:h-[96px] flex items-center justify-center relative"
        >
          <Chest 
            id={index + 1} 
            status={status} 
            onClick={() => onChestClick(index)}
            disabled={disabled || status !== 'closed'} // Disable if global disabled OR chest already open
          />
        </div>
      ))}
    </div>
  );
};

export default ChestGrid;