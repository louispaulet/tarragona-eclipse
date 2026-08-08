"use client";

import type { ReactNode } from "react";
import { HashRouter } from "react-router-dom";

export default function ClientHashRouter({ children }: { children: ReactNode }) {
  return <HashRouter>{children}</HashRouter>;
}
