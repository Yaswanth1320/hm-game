'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface GameModalProps {
  isOpen: boolean;
  type: 'win' | 'lose';
  word: string;
  onRestart: () => void;
}

const GameModal = ({ isOpen, type, word, onRestart }: GameModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-500">
      <div 
        className={`bg-white rounded-xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      >
        <div className="text-center mb-6">
          {type === 'win' ? (
            <div>
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-green-600 mb-2">You Won!</h2>
              <p className="text-lg text-gray-600">
                Congratulations! You guessed the word correctly.
              </p>
            </div>
          ) : (
            <div>
              <div className="text-6xl mb-4">😢</div>
              <h2 className="text-3xl font-bold text-red-600 mb-2">Game Over</h2>
              <p className="text-lg text-gray-600 mb-2">
                The word was:
              </p>
              <p className="text-2xl font-bold tracking-wider bg-red-50 py-2 px-4 rounded-lg inline-block">
                {word.toUpperCase()}
              </p>
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg font-medium"
          >
            Play Again
          </button>
          <Link 
            href="/"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg font-medium text-center"
          >
            Main Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameModal;