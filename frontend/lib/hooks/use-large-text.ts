"use client";

import { createContext, useContext } from "react";

export type LargeTextContextType = {
  largeText: boolean;
  toggleLargeText: () => void;
};

export const LargeTextContext = createContext<LargeTextContextType>({
  largeText: false,
  toggleLargeText: () => {},
});

export function useLargeText() {
  return useContext(LargeTextContext);
}