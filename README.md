# Hangman Game

<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="nextjs" />
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logo=typescript&logoColor=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-TailwindCSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=38BDF8" alt="tailwind" />
    <img src="https://img.shields.io/badge/-ShadCN_UI-black?style=for-the-badge&logo=radixui&logoColor=white&color=7C3AED" alt="shadcn" />
    <img src="https://img.shields.io/badge/-Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white&color=0055FF" alt="framer" />
  </div>
</div>

---

## 📋 Table of Contents

1. 🎮 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🎯 [Features](#features)
4. 🚀 [Quick Start](#quick-start)
5. 📁 [Project Structure](#project-structure)
6. 🧩 [How to Play](#how-to-play)
7. 🔮 [Future Enhancements](#future-enhancements)
8. 📄 [License](#license)
9. 🙏 [Acknowledgements](#acknowledgements)

---

## 🎮 Introduction

A modern, interactive Hangman game built with Next.js and TypeScript. Test your vocabulary skills by guessing words of varying difficulty levels before the hangman is complete!

The game challenges players to guess a hidden word letter by letter before the hangman drawing is completed. With each incorrect guess, another part of the hangman is drawn. Players must guess the word correctly before the drawing is complete to win the game.

---

## ⚙️ Tech Stack

- **Framework:** Next.js 15 with React 19
- **Language:** TypeScript
- **Styling:** TailwindCSS with ShadCN UI components
- **Animations:** CSS Animations and Framer Motion
- **UI Components:** Radix UI
- **Icons:** Lucide React

---

## 🎯 Features

- **Multiple Difficulty Levels**

  - Easy: 4-letter words
  - Medium: 5-letter words
  - Hard: 8-letter words

- **Interactive Gameplay**

  - On-screen keyboard for letter selection
  - Physical keyboard support
  - Visual hangman progression
  - Word display with letter reveals

- **Game Elements**

  - Win/lose detection
  - Game over modal with results
  - Play again functionality
  - Return to main menu option

- **Modern UI/UX**
  - Responsive design for all devices
  - Clean, intuitive interface
  - Visual feedback for correct/incorrect guesses
  - Difficulty selection on start page

---

## 🚀 Quick Start

### 🔧 Prerequisites

- Node.js (>=18.x recommended)
- npm or yarn
- Git

### 📁 Clone the Repo

```bash
git clone https://github.com/Yaswanth1320/hm-game.git
cd hangman
```

### 📦 Install Dependencies

```bash
npm install
# or
yarn install
```

### ▶️ Run the App

```bash
npm run dev
# or
yarn dev
```

Visit 👉 http://localhost:3000

---

## 🧩 How to Play

1. Select a difficulty level on the start page (Easy, Medium, or Hard)
2. Click "Play Game" to start
3. Guess letters by clicking on the on-screen keyboard or using your physical keyboard
4. Try to guess the word before the hangman drawing is complete (6 wrong guesses)
5. Win by guessing all letters in the word, or lose if the hangman is completed

---

## 📁 Project Structure

```
src/
├── app/                  # Next.js app directory
│   ├── api/              # API routes
│   │   └── words/        # Words API endpoint
│   ├── game/             # Game page
│   └── page.tsx          # Start page
├── components/           # React components
│   ├── AdsBanner.tsx     # Advertisement banner component
│   ├── GameModal.tsx     # Win/lose modal component
│   ├── Hangman.tsx       # Hangman drawing component
│   ├── Keyboard.tsx      # On-screen keyboard component
│   └── WordDisplay.tsx   # Word display component
├── data/                 # Data files
│   └── words.json        # Word lists by difficulty
└── lib/                  # Utility functions
```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgements

- Word lists compiled from various open sources
- Inspired by the classic Hangman game
- Built with Next.js and React
- UI components from ShadCN UI and Radix UI

---

## 🔮 Future Enhancements

- Add more word categories (animals, countries, etc.)
- Implement hint system
- Add sound effects and background music
- Create user accounts to track scores
- Add multiplayer mode

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Word lists compiled from various open sources
- Next.js team for the amazing framework
- Tailwind CSS for the styling utilities
