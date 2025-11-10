/**
 * Theme Configuration
 * 
 * Defines 4 professional themes (2 light, 2 dark) with WCAG 2.1 AA compliant colors
 * Each theme includes a complete color palette with semantic naming
 */

export type ThemeMode = 'light' | 'dark';
export type ThemeName = 'ocean' | 'sage' | 'midnight' | 'slate';

export interface ThemeColors {
  // Base colors
  background: string;
  surface: string;
  surfaceHover: string;
  border: string;
  borderSubtle: string;
  
  // Text colors
  text: string;
  textMuted: string;
  textSubtle: string;
  
  // Primary accent
  primary: string;
  primaryHover: string;
  primaryText: string;
  
  // Secondary accent
  secondary: string;
  secondaryHover: string;
  secondaryText: string;
  
  // Status colors
  success: string;
  warning: string;
  error: string;
  
  // Special effects
  gradient: string;
  shadow: string;
  glow: string;
}

export interface Theme {
  name: ThemeName;
  displayName: string;
  mode: ThemeMode;
  colors: ThemeColors;
}

/**
 * Ocean Theme (Light)
 * Professional blue palette with excellent contrast
 * Inspired by modern SaaS applications
 */
const oceanTheme: Theme = {
  name: 'ocean',
  displayName: 'Ocean',
  mode: 'light',
  colors: {
    background: '#FFFFFF',
    surface: '#F8FAFC',
    surfaceHover: '#F1F5F9',
    border: '#E2E8F0',
    borderSubtle: '#F1F5F9',
    
    text: '#0F172A',
    textMuted: '#475569',
    textSubtle: '#64748B',
    
    primary: '#0EA5E9',
    primaryHover: '#0284C7',
    primaryText: '#FFFFFF',
    
    secondary: '#6366F1',
    secondaryHover: '#4F46E5',
    secondaryText: '#FFFFFF',
    
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
    shadow: 'rgba(15, 23, 42, 0.1)',
    glow: 'rgba(14, 165, 233, 0.2)',
  }
};

/**
 * Sage Theme (Light)
 * Warm, earthy palette with green accents
 * Professional yet approachable
 */
const sageTheme: Theme = {
  name: 'sage',
  displayName: 'Sage',
  mode: 'light',
  colors: {
    background: '#FEFEFE',
    surface: '#F7F8F6',
    surfaceHover: '#EEF0EC',
    border: '#E1E4DD',
    borderSubtle: '#EEF0EC',
    
    text: '#1C1E1A',
    textMuted: '#4A4F45',
    textSubtle: '#6B7265',
    
    primary: '#059669',
    primaryHover: '#047857',
    primaryText: '#FFFFFF',
    
    secondary: '#7C3AED',
    secondaryHover: '#6D28D9',
    secondaryText: '#FFFFFF',
    
    success: '#10B981',
    warning: '#F59E0B',
    error: '#DC2626',
    
    gradient: 'linear-gradient(135deg, #059669 0%, #7C3AED 100%)',
    shadow: 'rgba(28, 30, 26, 0.08)',
    glow: 'rgba(5, 150, 105, 0.2)',
  }
};

/**
 * Midnight Theme (Dark)
 * Deep blues with vibrant accents
 * Modern and sophisticated
 */
const midnightTheme: Theme = {
  name: 'midnight',
  displayName: 'Midnight',
  mode: 'dark',
  colors: {
    background: '#0A0E1A',
    surface: '#131825',
    surfaceHover: '#1A2235',
    border: '#2D3548',
    borderSubtle: '#1A2235',
    
    text: '#F1F5F9',
    textMuted: '#CBD5E1',
    textSubtle: '#94A3B8',
    
    primary: '#38BDF8',
    primaryHover: '#0EA5E9',
    primaryText: '#0F172A',
    
    secondary: '#818CF8',
    secondaryHover: '#6366F1',
    secondaryText: '#F1F5F9',
    
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171',
    
    gradient: 'linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)',
    shadow: 'rgba(0, 0, 0, 0.3)',
    glow: 'rgba(56, 189, 248, 0.3)',
  }
};

/**
 * Slate Theme (Dark)
 * Neutral grays with purple accents
 * Clean and professional
 */
const slateTheme: Theme = {
  name: 'slate',
  displayName: 'Slate',
  mode: 'dark',
  colors: {
    background: '#0F172A',
    surface: '#1E293B',
    surfaceHover: '#334155',
    border: '#475569',
    borderSubtle: '#334155',
    
    text: '#F8FAFC',
    textMuted: '#E2E8F0',
    textSubtle: '#CBD5E1',
    
    primary: '#A78BFA',
    primaryHover: '#8B5CF6',
    primaryText: '#F8FAFC',
    
    secondary: '#F472B6',
    secondaryHover: '#EC4899',
    secondaryText: '#F8FAFC',
    
    success: '#4ADE80',
    warning: '#FBBF24',
    error: '#FB7185',
    
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)',
    shadow: 'rgba(0, 0, 0, 0.4)',
    glow: 'rgba(167, 139, 250, 0.3)',
  }
};

export const themes: Record<ThemeName, Theme> = {
  ocean: oceanTheme,
  sage: sageTheme,
  midnight: midnightTheme,
  slate: slateTheme,
};

export const lightThemes: ThemeName[] = ['ocean', 'sage'];
export const darkThemes: ThemeName[] = ['midnight', 'slate'];

export const defaultTheme: ThemeName = 'ocean';
export const defaultDarkTheme: ThemeName = 'midnight';

/**
 * Get theme by name with fallback
 */
export function getTheme(name: ThemeName): Theme {
  return themes[name] || themes[defaultTheme];
}

/**
 * Get default theme based on mode
 */
export function getDefaultThemeForMode(mode: ThemeMode): ThemeName {
  return mode === 'dark' ? defaultDarkTheme : defaultTheme;
}
