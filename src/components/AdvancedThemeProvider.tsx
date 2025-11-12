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
    const savedTheme = localStorage.getItem('advanced-theme') as ThemeName;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    } else {
      setCurrentTheme(mode === 'dark' ? defaultDarkTheme : defaultTheme);
    }
  }, [mode]);

  useEffect(() => {
    if (!mounted) return;
    
    const currentThemeObj = themes[currentTheme];
    if (!currentThemeObj) return;
    
    if (mode === 'dark' && currentThemeObj.mode === 'light') {
      setCurrentTheme(defaultDarkTheme);
    } else if (mode === 'light' && currentThemeObj.mode === 'dark') {
      setCurrentTheme(defaultTheme);
    }
  }, [mode, currentTheme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    const theme = themes[currentTheme];
    if (!theme) return;

    const root = document.documentElement;
    const colors = theme.colors;

    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-surface-hover', colors.surfaceHover);
    root.style.setProperty('--color-alternate-background', colors.alternateBackground);
    root.style.setProperty('--color-border', colors.border);
    
    root.style.setProperty('--color-text', colors.text);
    root.style.setProperty('--color-text-muted', colors.textMuted);
    root.style.setProperty('--color-text-subtle', colors.textSubtle);
    
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-hover', colors.primaryHover);
    root.style.setProperty('--color-primary-text', colors.primaryText);
    
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-secondary-hover', colors.secondaryHover);
    
    root.style.setProperty('--gradient', colors.gradient);
    root.style.setProperty('--shadow', colors.shadow);

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
