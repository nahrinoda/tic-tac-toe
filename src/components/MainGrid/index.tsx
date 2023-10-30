import React from 'react';
import { } from '@heroicons/react/24/outline';

interface MainGridProps {
  activeRow: number;
  activeCol: number;
}

const MainGrid: React.FC<MainGridProps> = ({ activeRow, activeCol }) => {
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
    <div className="bg-yellow-300 w-96 h-96 flex flex-wrap mr-10">
      <div id='1' className={`w-1/3 h-1/3 border border-slate-700 ${isActive1 ? 'bg-pink-300' : ''}`} />
      <div id='2' className={`w-1/3 h-1/3 border border-slate-700 ${isActive2 ? 'bg-pink-300' : ''}`} />
      <div id='3' className={`w-1/3 h-1/3 border border-slate-700 ${isActive3 ? 'bg-pink-300' : ''}`} />
      <div id='4' className={`w-1/3 h-1/3 border border-slate-700 ${isActive4 ? 'bg-pink-300' : ''}`} />
      <div id='5' className={`w-1/3 h-1/3 border border-slate-700 ${isActive5 ? 'bg-pink-300' : ''}`} />
      <div id='6' className={`w-1/3 h-1/3 border border-slate-700 ${isActive6 ? 'bg-pink-300' : ''}`} />
      <div id='7' className={`w-1/3 h-1/3 border border-slate-700 ${isActive7 ? 'bg-pink-300' : ''}`} />
      <div id='8' className={`w-1/3 h-1/3 border border-slate-700 ${isActive8 ? 'bg-pink-300' : ''}`} />
      <div id='9' className={`w-1/3 h-1/3 border border-slate-700 ${isActive9 ? 'bg-pink-300' : ''}`} />
    </div>
  );
};

export default MainGrid;
