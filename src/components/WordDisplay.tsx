'use client';

interface WordDisplayProps {
  word: string;
  guessedLetters: string[];
}

const WordDisplay = ({ word, guessedLetters }: WordDisplayProps) => {
  return (
    <div className="flex justify-center gap-2 md:gap-3 my-8">
      {word.split('').map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter.toUpperCase());
        return (
          <div 
            key={index} 
            className="relative w-12 md:w-16 h-14 md:h-16 flex items-center justify-center group"
          >
            {/* Underline with animation */}
            <div 
              className={`absolute bottom-0 w-full h-1 bg-gray-800 transform transition-all duration-500 ${isGuessed ? 'scale-x-0' : 'scale-x-100'}`}
            />
            
            {/* Letter container with 3D effect */}
            <div 
              className={`w-full h-full flex items-center justify-center transition-all duration-500 ${isGuessed ? 'bg-blue-100 shadow-lg' : 'bg-transparent'} rounded-md`}
            >
              <span 
                className={`text-3xl md:text-4xl font-bold transition-all duration-500 ${isGuessed 
                  ? 'opacity-100 transform scale-100 text-blue-600' 
                  : 'opacity-0 transform scale-50'}`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  textShadow: isGuessed ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                {letter.toUpperCase()}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WordDisplay;