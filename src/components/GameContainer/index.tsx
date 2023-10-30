'use client';

import { useState } from 'react';
import MainGrid from '../MainGrid';
import ControllerGrid from '../Controller';

const GameContainer = () => {
  const [activeRow, setActiveRow] = useState(0);
  const [activeCol, setActiveCol] = useState(0);

  const handleArrowClick = (direction: 'up' | 'down' | 'left' | 'right') => {
    switch (direction) {
      case 'up':
        setActiveRow(Math.max(0, activeRow - 1));
        break;
      case 'down':
        setActiveRow(Math.min(2, activeRow + 1));
        break;
      case 'left':
        setActiveCol(Math.max(0, activeCol - 1));
        break;
      case 'right':
        setActiveCol(Math.min(2, activeCol + 1));
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-row items-center justify-center">
      <MainGrid activeRow={activeRow} activeCol={activeCol} />
      <ControllerGrid moveActiveCell={handleArrowClick} />
    </div>
  );
};

export default GameContainer;
