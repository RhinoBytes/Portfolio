"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeName, themes, defaultTheme, defaultDarkTheme, lightThemes, darkThemes } from '@/config/themes';
import { useTheme as useNextTheme } from 'next-themes';

interface ThemeContextType {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  availableThemes: ThemeName[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function AdvancedThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme: mode } = useNextTheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('advanced-theme') as ThemeName;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    } else {
      // Set default based on mode
      setCurrentTheme(mode === 'dark' ? defaultDarkTheme : defaultTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Auto-switch theme when mode changes if current theme doesn't match mode
    const currentThemeObj = themes[currentTheme];
    if (currentThemeObj) {
      if (mode === 'dark' && currentThemeObj.mode === 'light') {
        setCurrentTheme(defaultDarkTheme);
      } else if (mode === 'light' && currentThemeObj.mode === 'dark') {
        setCurrentTheme(defaultTheme);
      }
    }
  }, [mode, currentTheme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    const theme = themes[currentTheme];
    if (!theme) return;

    // Apply CSS custom properties
    const root = document.documentElement;
    const colors = theme.colors;

    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-surface-hover', colors.surfaceHover);
    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-border-subtle', colors.borderSubtle);
    
    root.style.setProperty('--color-text', colors.text);
    root.style.setProperty('--color-text-muted', colors.textMuted);
    root.style.setProperty('--color-text-subtle', colors.textSubtle);
    
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-hover', colors.primaryHover);
    root.style.setProperty('--color-primary-text', colors.primaryText);
    
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-secondary-hover', colors.secondaryHover);
    root.style.setProperty('--color-secondary-text', colors.secondaryText);
    
    root.style.setProperty('--color-success', colors.success);
    root.style.setProperty('--color-warning', colors.warning);
    root.style.setProperty('--color-error', colors.error);
    
    root.style.setProperty('--gradient', colors.gradient);
    root.style.setProperty('--shadow', colors.shadow);
    root.style.setProperty('--glow', colors.glow);

    // Save to localStorage
    localStorage.setItem('advanced-theme', currentTheme);
  }, [currentTheme, mounted]);

  const handleSetTheme = (theme: ThemeName) => {
    setCurrentTheme(theme);
  };

  const availableThemes = mode === 'dark' ? darkThemes : lightThemes;

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: handleSetTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAdvancedTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useAdvancedTheme must be used within AdvancedThemeProvider');
  }
  return context;
}
