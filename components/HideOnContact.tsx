"use client";

import { usePathname } from "next/navigation";

export default function HideOnContact({ children }: { children: React.ReactNode }) {
  return usePathname() === "/contact" ? null : <>{children}</>;
}
