"use client";

import { createContext, useContext } from "react";

export type SimpleModeContextType = {
  simpleMode: boolean;
  toggleSimpleMode: () => void;
};

export const SimpleModeContext = createContext<SimpleModeContextType>({
  simpleMode: false,
  toggleSimpleMode: () => {},
});

export function useSimpleMode() {
  return useContext(SimpleModeContext);
}
