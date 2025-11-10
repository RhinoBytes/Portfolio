"use client";

import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useAdvancedTheme } from "./AdvancedThemeProvider";
import { themes } from "@/config/themes";

export function EnhancedThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { currentTheme, setTheme: setAdvancedTheme, availableThemes } = useAdvancedTheme();
  const [mounted, setMounted] = useState(false);
  const [showThemePicker, setShowThemePicker] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.theme-picker-container')) {
        setShowThemePicker(false);
      }
    };

    if (showThemePicker) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showThemePicker]);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <button
          className="p-2.5 rounded-xl transition-all duration-200 bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] border border-[var(--color-border)]"
          aria-label="Toggle theme"
        >
          <Sun size={18} />
        </button>
      </div>
    );
  }

  const toggleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const currentThemeObj = themes[currentTheme];

  return (
    <div className="flex items-center gap-2 theme-picker-container relative">
      {/* Theme Picker Button */}
      <button
        onClick={() => setShowThemePicker(!showThemePicker)}
        className="p-2.5 rounded-xl transition-all duration-200 bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] border border-[var(--color-border)] hover:scale-110 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
        aria-label="Choose theme variant"
        title="Choose theme variant"
      >
        <Palette size={18} className="text-[var(--color-text)]" />
      </button>

      {/* Theme Picker Dropdown */}
      {showThemePicker && (
        <div className="absolute top-full right-0 mt-2 p-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-2xl min-w-[180px] z-50 animate-fade-in">
          <div className="text-xs font-semibold text-[var(--color-text-subtle)] px-3 py-2 uppercase tracking-wider">
            Choose Theme
          </div>
          {availableThemes.map((themeName) => {
            const themeObj = themes[themeName];
            return (
              <button
                key={themeName}
                onClick={() => {
                  setAdvancedTheme(themeName);
                  setShowThemePicker(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-3 group ${
                  currentTheme === themeName
                    ? 'bg-[var(--color-primary)] text-[var(--color-primary-text)] font-semibold'
                    : 'hover:bg-[var(--color-surface-hover)] text-[var(--color-text)]'
                }`}
              >
                <div 
                  className="w-4 h-4 rounded-full border-2 border-current"
                  style={{ 
                    background: themeObj.colors.gradient,
                    opacity: currentTheme === themeName ? 1 : 0.6
                  }}
                />
                <span className="text-sm">{themeObj.displayName}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Mode Toggle Button */}
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
    </div>
  );
}
