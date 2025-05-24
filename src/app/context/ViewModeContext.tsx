"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ViewMode = "artista" | "clases";

type ViewModeContextType = {
  mode: ViewMode;
  toggleMode: () => void;
};

const ViewModeContext = createContext<ViewModeContextType | null>(null);

export const ViewModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ViewMode>("artista");

  const toggleMode = () => {
    setMode((prev) => (prev === "artista" ? "clases" : "artista"));
  };

  return (
    <ViewModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode must be used within ViewModeProvider");
  }
  return context;
};
