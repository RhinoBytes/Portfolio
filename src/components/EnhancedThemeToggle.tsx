"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function EnhancedThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2.5 rounded-xl transition-all duration-200 bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] border border-[var(--color-border)]"
        aria-label="Toggle theme"
      >
        <Sun size={18} />
      </button>
    );
  }

  const toggleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleMode}
      className="p-2.5 rounded-xl transition-all duration-200 bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] border border-[var(--color-border)] hover:scale-110 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
      aria-label="Toggle light/dark mode"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-[var(--color-text)]" />
      ) : (
        <Moon size={18} className="text-[var(--color-text)]" />
      )}
    </button>
  );
}
