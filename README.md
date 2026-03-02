🧩 React Memory Game

A highly interactive card-matching game built with React.js. This project focuses on efficient state management, real-time UI updates, and smooth user interactions to test and improve memory skills.

🚀 Features

Dynamic Matching Logic: Implemented using useEffect to compare pairs and track matched cards.

Smart Move Counter: Tracks every attempt with a state-driven counter that updates seamlessly.

Advanced UI Interactions: - Board Locking: Prevents multiple clicks while cards are being compared.

Animated Transitions: Integrated @formkit/auto-animate for fluid card flipping and layout shifts.

Win Condition Modal: A decoupled WinMessage component that triggers upon game completion, displaying final stats.

Instant Reset: A "Play Again" feature that reshuffles the deck, resets the move counter, and clears the game state without refreshing the page.

🛠️ Tech Stack

Framework: React.js (Vite-powered)

State Management: React Hooks (useState, useEffect, useRef)

Styling: CSS Modules (for scoped, maintainable styles)

Logic: JavaScript ES6+ (Array Shuffling, Destructuring, and Spread Operators)

📋 Getting Started

Clone the repository: git clone https://github.com/Murky-night/Memory-game.git

Navigate to the project folder: cd Memory-game/memory-game

Install dependencies: npm install

Run the development server: npm run dev
