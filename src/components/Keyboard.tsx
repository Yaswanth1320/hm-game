'use client';

import { useState, useEffect } from 'react';

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  disabledKeys: string[];
}

const Keyboard = ({ onKeyPress, disabledKeys }: KeyboardProps) => {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (/^[A-Z]$/.test(key) && !disabledKeys.includes(key)) {
        onKeyPress(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onKeyPress, disabledKeys]);

  return (
    <div className="flex flex-col items-center gap-2 md:gap-3 w-full max-w-3xl mx-auto">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1 md:gap-2 justify-center w-full">
          {row.map((key, keyIndex) => {
            const isDisabled = disabledKeys.includes(key);
            const isCorrect = disabledKeys.includes(key) && document.querySelector(`[data-letter="${key.toLowerCase()}"]`);
            
            return (
              <button
                key={key}
                onClick={() => onKeyPress(key)}
                disabled={isDisabled}
                style={{ animationDelay: `${keyIndex * 30}ms` }}
                className={`
                  w-9 h-11 sm:w-12 sm:h-14 rounded-lg font-medium text-sm sm:text-base
                  transition-all duration-300 transform hover:scale-105 active:scale-95
                  shadow-md hover:shadow-lg
                  animate-fadeIn
                  ${isDisabled 
                    ? isCorrect
                      ? 'bg-green-100 text-green-600 border-2 border-green-300' 
                      : 'bg-gray-200 text-gray-400 opacity-60'
                    : 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 hover:border-blue-300'}
                `}
              >
                {key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;