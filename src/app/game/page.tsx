"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Keyboard from "@/components/Keyboard";
import WordDisplay from "@/components/WordDisplay";
import Hangman from "@/components/Hangman";
import AdsBanner from "@/components/AdsBanner";
import GameModal from "@/components/GameModal";

// Game utility functions
function getRandomWord(words: string[]): string {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toLowerCase();
}

function isWordGuessed(word: string, guessedLetters: string[]): boolean {
  return word
    .split("")
    .every((letter) => guessedLetters.includes(letter.toUpperCase()));
}

function countWrongGuesses(word: string, guessedLetters: string[]): number {
  return guessedLetters.filter((letter) => !word.toUpperCase().includes(letter))
    .length;
}

function isGameOver(word: string, guessedLetters: string[]): boolean {
  return (
    isWordGuessed(word, guessedLetters) ||
    countWrongGuesses(word, guessedLetters) >= 6
  );
}

// ✅ Split into GameContent + wrap with Suspense
function GameContent() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get("difficulty") || "medium";

  const [words, setWords] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const [currentDifficulty, setCurrentDifficulty] =
    useState<string>(difficulty);

  // Load words from JSON file based on difficulty
  useEffect(() => {
    async function loadWords() {
      try {
        const response = await fetch(
          `/api/words?difficulty=${currentDifficulty}`
        );
        const data = await response.json();
        setWords(data.words);
        setCurrentWord(getRandomWord(data.words));
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load words:", error);
        // Fallback words in case API fails
        const fallbackWords = {
          easy: ["able", "acid", "aged", "also", "area"],
          medium: ["apple", "beach", "chair", "dance", "eagle"],
          hard: ["absolute", "academic", "accepted", "accident", "accuracy"],
        };
        setWords(
          fallbackWords[currentDifficulty as keyof typeof fallbackWords]
        );
        setCurrentWord(
          getRandomWord(
            fallbackWords[currentDifficulty as keyof typeof fallbackWords]
          )
        );
        setIsLoading(false);
      }
    }

    loadWords();
  }, [currentDifficulty]);

  // Handle key press
  const handleKeyPress = (key: string) => {
    if (isGameOver(currentWord, guessedLetters)) {
      return;
    }

    if (!guessedLetters.includes(key)) {
      const newGuessedLetters = [...guessedLetters, key];
      setGuessedLetters(newGuessedLetters);

      // Check if game is over after this guess
      if (
        isWordGuessed(currentWord, newGuessedLetters) ||
        countWrongGuesses(currentWord, newGuessedLetters) >= 6
      ) {
        setTimeout(() => setIsGameModalOpen(true), 500);
      }
    }
  };

  // Restart the game
  const handleRestart = () => {
    setCurrentWord(getRandomWord(words));
    setGuessedLetters([]);
    setIsGameModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading game...</p>
      </div>
    );
  }

  const wrongGuesses = countWrongGuesses(currentWord, guessedLetters);
  const hasWon = isWordGuessed(currentWord, guessedLetters);
  const hasLost = wrongGuesses >= 6;

  return (
    <div className="min-h-screen flex flex-col p-4 bg-gradient-to-b from-blue-50 to-white">
      <header className="flex justify-between items-center mb-8">
        <Link
          href="/"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
        >
          Back to Home
        </Link>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-600">HANGMAN</h1>
          <div className="text-sm font-medium mt-1">
            {currentDifficulty === "easy" && (
              <span className="text-green-500">Easy Mode (4 letters)</span>
            )}
            {currentDifficulty === "medium" && (
              <span className="text-blue-500">Medium Mode (5 letters)</span>
            )}
            {currentDifficulty === "hard" && (
              <span className="text-red-500">Hard Mode (8 letters)</span>
            )}
          </div>
        </div>
        <div className="w-24"></div> {/* Spacer for alignment */}
      </header>

      <div className="flex-1 flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto w-full">
        {/* Top Banner Ad */}
        <div className="w-full">
          <AdsBanner type="banner" />
        </div>

        {/* Game Content */}
        <div className="w-full flex flex-col items-center">
          <Hangman wrongGuesses={wrongGuesses} />
          <WordDisplay word={currentWord} guessedLetters={guessedLetters} />
          <div className="mt-8 w-full">
            <Keyboard
              onKeyPress={handleKeyPress}
              disabledKeys={guessedLetters}
            />
          </div>
        </div>

        {/* Bottom Banner Ad */}
        <div className="w-full mt-8">
          <AdsBanner type="banner" />
        </div>
      </div>

      {/* Game Over Modal */}
      <GameModal
        isOpen={isGameModalOpen}
        type={hasWon ? "win" : "lose"}
        word={currentWord}
        onRestart={handleRestart}
      />
    </div>
  );
}

export default function GamePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl">Loading...</p>
        </div>
      }
    >
      <GameContent />
    </Suspense>
  );
}
