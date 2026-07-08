import type { ReactNode } from "react";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/about/credentials");

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
