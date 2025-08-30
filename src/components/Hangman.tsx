"use client";

import { useEffect, useState, CSSProperties } from "react";

interface HangmanProps {
  wrongGuesses: number;
}

const Hangman = ({ wrongGuesses }: HangmanProps) => {
  // No shake effect or animation tracking needed

  // SVG parts for each wrong guess (0-6)
  const hangmanParts = [
    // Base
    <line
      key="base"
      x1="60"
      y1="150"
      x2="140"
      y2="150"
      stroke="#334155"
      strokeWidth="6"
      strokeLinecap="round"
    />,
    // Vertical pole
    <line
      key="pole"
      x1="100"
      y1="20"
      x2="100"
      y2="150"
      stroke="#334155"
      strokeWidth="6"
      strokeLinecap="round"
    />,
    // Top horizontal
    <line
      key="top"
      x1="100"
      y1="20"
      x2="160"
      y2="20"
      stroke="#334155"
      strokeWidth="6"
      strokeLinecap="round"
    />,
    // Rope
    <line
      key="rope"
      x1="160"
      y1="20"
      x2="160"
      y2="40"
      stroke="#92400e"
      strokeWidth="4"
      strokeLinecap="round"
    />,
    // Head
    <circle
      key="head"
      cx="160"
      cy="55"
      r="15"
      stroke="#1e40af"
      strokeWidth="4"
      fill="none"
    />,
    // Body
    <line
      key="body"
      x1="160"
      y1="70"
      x2="160"
      y2="110"
      stroke="#1e40af"
      strokeWidth="5"
      strokeLinecap="round"
    />,
    // Arms
    <g key="arms">
      <line
        x1="160"
        y1="80"
        x2="140"
        y2="100"
        stroke="#1e40af"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="160"
        y1="80"
        x2="180"
        y2="100"
        stroke="#1e40af"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>,
    // Legs
    <g key="legs">
      <line
        x1="160"
        y1="110"
        x2="140"
        y2="140"
        stroke="#1e40af"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="160"
        y1="110"
        x2="180"
        y2="140"
        stroke="#1e40af"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>,
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-blue-50 p-4 rounded-lg shadow-md">
        <svg width="220" height="180" viewBox="0 0 220 180">
          {/* Background elements */}
          <rect x="10" y="10" width="200" height="160" rx="5" fill="none" />

          {/* Hangman parts with animations */}
          {hangmanParts.slice(0, wrongGuesses + 1).map((part, index) => (
            <g
              key={index}
              className="transition-all duration-500"
              style={
                {
                  opacity: 1,
                  transform: `scale(${
                    index === wrongGuesses ? "var(--scale-in)" : "1"
                  })`,
                  "--scale-in": "0.2, 1.1, 1",
                  animationDuration: "0.5s",
                  animationTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                } as CSSProperties
              }
            >
              {part}
            </g>
          ))}

          {/* Face expression when game is nearly over */}
          {wrongGuesses >= 5 && (
            <g>
              <circle cx="155" cy="52" r="2" fill="#1e40af" />
              <circle cx="165" cy="52" r="2" fill="#1e40af" />
              <path
                d="M155 60 Q160 56 165 60"
                stroke="#1e40af"
                strokeWidth="1.5"
                fill="none"
              />
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};

export default Hangman;
