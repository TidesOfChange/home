import React, { useState, useEffect } from "react";
import pkg from "file-saver";
const { saveAs } = pkg;

const defaultState = {
  characters: [],
  notes: "",
  gold: 100,
  wounds: 0,
  equipment: [],
  skills: [],
};

const GameStateManager = ({ children }) => {
  const [gameState, setGameState] = useState(defaultState);

  // Load game data on mount
  useEffect(() => {
    const savedState = localStorage.getItem("gameState");
    if (savedState) {
      setGameState(JSON.parse(savedState));
    }
  }, []);

  // Save game data to local storage
  useEffect(() => {
    localStorage.setItem("gameState", JSON.stringify(gameState));
  }, [gameState]);

  const updateGameState = (key, value) => {
    setGameState((prev) => ({ ...prev, [key]: value }));
  };

  const exportGameState = () => {
    const jsonData = JSON.stringify(gameState, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    saveAs(blob, "game_state.json");
  };

  const importGameState = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      setGameState(data);
    };
    reader.readAsText(file);
  };

  return (
    <GameContext.Provider
      value={{ gameState, updateGameState, exportGameState, importGameState }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const GameContext = React.createContext();
export default GameStateManager;