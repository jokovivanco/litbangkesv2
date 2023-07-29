"use client";

import { createContext, createElement } from "react";

export const AdminStore = createContext<{
  sideActive: number;
  onMenuClick: (id: number) => void;
  sideActiveData: {
    id: number;
    name: string;
    component: React.ReactNode;
  };
}>({
  sideActive: 0,
  onMenuClick: () => undefined,
  sideActiveData: {
    id: 0,
    name: "",
    component: createElement("div"),
  },
});
