import React from 'react';

interface ControllerGridProps {
  moveActiveCell: (direction: 'up' | 'down' | 'left' | 'right') => void;
}

const ControllerGrid: React.FC<ControllerGridProps> = ({ moveActiveCell }) => {
  return (
    <div className="bg-gray-300 w-48 h-48 flex flex-wrap">
      <div className="w-1/3 h-1/3"></div>
      <div className="w-1/3 h-1/3 flex justify-center items-center">
        <button data-testid="up-button" onClick={() => moveActiveCell('up')}>⬆</button>
      </div>
      <div className="w-1/3 h-1/3"></div>

      <div className="w-1/3 h-1/3 flex justify-center items-center">
        <button data-testid="left-button"  onClick={() => moveActiveCell('left')}>⬅ </button>
      </div>
      <div className="w-1/3 h-1/3"></div>
      <div className="w-1/3 h-1/3 flex justify-center items-center">
        <button data-testid="right-button"  onClick={() => moveActiveCell('right')} className='rotate-180'>⬅</button>
      </div>

      <div className="w-1/3 h-1/3"></div>
      <div className="w-1/3 h-1/3 flex justify-center items-center">
        <button data-testid="down-button" onClick={() => moveActiveCell('down')}>⬇</button>
      </div>
      <div className="w-1/3 h-1/3"></div>
    </div>
  );
};

export default ControllerGrid;
