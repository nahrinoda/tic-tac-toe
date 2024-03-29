'use client';

import { useState } from 'react';
import MainGrid from '../MainGrid';
import ControllerGrid from '../ControllerGrid';

const GameContainer = () => {
  const [activeRow, setActiveRow] = useState(0);
  const [activeCol, setActiveCol] = useState(0);

  const moveActiveCell = (direction: 'up' | 'down' | 'left' | 'right') => {
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

  const isActive1 = activeRow === 0 && activeCol === 0;
  const isActive2 = activeRow === 0 && activeCol === 1;
  const isActive3 = activeRow === 0 && activeCol === 2;
  const isActive4 = activeRow === 1 && activeCol === 0;
  const isActive5 = activeRow === 1 && activeCol === 1;
  const isActive6 = activeRow === 1 && activeCol === 2;
  const isActive7 = activeRow === 2 && activeCol === 0;
  const isActive8 = activeRow === 2 && activeCol === 1;
  const isActive9 = activeRow === 2 && activeCol === 2;

  return (
    <div className="min-h-screen flex flex-row items-center justify-center">
      {/* MainGrid Start */}
      <div className="bg-yellow-300 w-96 h-96 flex flex-wrap mr-10">
        <div id='1' data-testid="cell-1" className={`w-1/3 h-1/3 border border-slate-700 ${isActive1 ? 'bg-pink-300' : ''}`} />
        <div id='2' data-testid="cell-2" className={`w-1/3 h-1/3 border border-slate-700 ${isActive2 ? 'bg-pink-300' : ''}`} />
        <div id='3' data-testid="cell-3" className={`w-1/3 h-1/3 border border-slate-700 ${isActive3 ? 'bg-pink-300' : ''}`} />
        <div id='4' data-testid="cell-4" className={`w-1/3 h-1/3 border border-slate-700 ${isActive4 ? 'bg-pink-300' : ''}`} />
        <div id='5' data-testid="cell-5" className={`w-1/3 h-1/3 border border-slate-700 ${isActive5 ? 'bg-pink-300' : ''}`} />
        <div id='6' data-testid="cell-6" className={`w-1/3 h-1/3 border border-slate-700 ${isActive6 ? 'bg-pink-300' : ''}`} />
        <div id='7' data-testid="cell-7" className={`w-1/3 h-1/3 border border-slate-700 ${isActive7 ? 'bg-pink-300' : ''}`} />
        <div id='8' data-testid="cell-8" className={`w-1/3 h-1/3 border border-slate-700 ${isActive8 ? 'bg-pink-300' : ''}`} />
        <div id='9' data-testid="cell-9" className={`w-1/3 h-1/3 border border-slate-700 ${isActive9 ? 'bg-pink-300' : ''}`} />
      </div>
      {/* MainGrid End */}

      {/* ControllerGrid Start */}
      <div className="bg-gray-300 w-48 h-48 flex flex-wrap">
        <div className="w-1/3 h-1/3"></div>
        <div className="w-1/3 h-1/3 flex justify-center items-center">
          <button data-testid="up-button" onClick={() => moveActiveCell('up')}>⬆</button>
        </div>
        <div className="w-1/3 h-1/3"></div>

        <div className="w-1/3 h-1/3 flex justify-center items-center">
          <button data-testid="left-button" onClick={() => moveActiveCell('left')}>⬅ </button>
        </div>
        <div className="w-1/3 h-1/3"></div>
        <div className="w-1/3 h-1/3 flex justify-center items-center">
          <button data-testid="right-button" onClick={() => moveActiveCell('right')} className='rotate-180'>⬅</button>
        </div>

        <div className="w-1/3 h-1/3"></div>
        <div className="w-1/3 h-1/3 flex justify-center items-center">
          <button data-testid="down-button" onClick={() => moveActiveCell('down')}>⬇</button>
        </div>
        <div className="w-1/3 h-1/3"></div>
      </div>
      {/* ControllerGrid End */}
    </div>
  );
};

export default GameContainer;
