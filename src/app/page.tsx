"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import AdsBanner from "@/components/AdsBanner";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [difficulty, setDifficulty] = useState("medium");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <main className="w-full max-w-4xl flex flex-col items-center justify-center gap-8">
        {/* Top Banner Ad */}
        <div className="w-full">
          <AdsBanner type="banner" />
        </div>

        <div
          className={`text-center transition-all duration-700 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-blue-600">
            HANGMAN
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Can you guess the word before its too late?
          </p>

          <div className="mb-8 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Select Difficulty
            </h2>
            <div className="flex gap-4 flex-wrap justify-center">
              <button
                onClick={() => setDifficulty("easy")}
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                  difficulty === "easy"
                    ? "bg-green-500 text-white scale-105 shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-green-100"
                }`}
              >
                Easy (4 letters)
              </button>
              <button
                onClick={() => setDifficulty("medium")}
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                  difficulty === "medium"
                    ? "bg-blue-500 text-white scale-105 shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                }`}
              >
                Medium (5 letters)
              </button>
              <button
                onClick={() => setDifficulty("hard")}
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                  difficulty === "hard"
                    ? "bg-red-500 text-white scale-105 shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-red-100"
                }`}
              >
                Hard (8 letters)
              </button>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-300 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link
            href={`/game?difficulty=${difficulty}`}
            className="px-8 py-4 bg-blue-600 text-white rounded-full text-xl font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg "
          >
            Play Game
          </Link>
        </div>

        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            How to Play
          </h2>
          <ul className="text-gray-600 text-left max-w-md mx-auto space-y-2">
            <li>• Guess one letter at a time</li>
            <li>• Each wrong guess adds to the hangman</li>
            <li>• 6 wrong guesses and its game over</li>
            <li>• Guess the word before then to win!</li>
          </ul>
        </div>

        {/* Bottom Banner Ad */}
        <div className="w-full mt-8">
          <AdsBanner type="banner" />
        </div>
      </main>
    </div>
  );
}
