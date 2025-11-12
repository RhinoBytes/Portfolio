"use client";

import React, { useEffect, useState } from 'react';
import { themes, defaultTheme, defaultDarkTheme } from '@/config/themes';
import { useTheme as useNextTheme } from 'next-themes';

export function AdvancedThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme: mode } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const currentTheme = mode === 'dark' ? defaultDarkTheme : defaultTheme;
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
  }, [mode, mounted]);

  return <>{children}</>;
}
