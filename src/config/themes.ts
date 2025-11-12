export type ThemeMode = 'light' | 'dark';
export type ThemeName = 'ocean' | 'sage' | 'midnight' | 'slate';

export interface ThemeColors {
  background: string;
  surface: string;
  surfaceHover: string;
  alternateBackground: string;
  border: string;
  
  text: string;
  textMuted: string;
  textSubtle: string;
  
  primary: string;
  primaryHover: string;
  primaryText: string;
  
  secondary: string;
  secondaryHover: string;
  
  gradient: string;
  shadow: string;
}

export interface Theme {
  name: ThemeName;
  displayName: string;
  mode: ThemeMode;
  colors: ThemeColors;
}

const oceanTheme: Theme = {
  name: 'ocean',
  displayName: 'Ocean',
  mode: 'light',
  colors: {
    background: '#FFFFFF',
    surface: '#F8FAFB',
    surfaceHover: '#F1F5F9',
    alternateBackground: '#F0F7FF',
    border: '#E2E8F0',
    
    text: '#0F172A',
    textMuted: '#475569',
    textSubtle: '#64748B',
    
    primary: '#0EA5E9',
    primaryHover: '#0284C7',
    primaryText: '#FFFFFF',
    
    secondary: '#6366F1',
    secondaryHover: '#4F46E5',
    
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
    shadow: 'rgba(15, 23, 42, 0.1)',
  }
};

const sageTheme: Theme = {
  name: 'sage',
  displayName: 'Sage',
  mode: 'light',
  colors: {
    background: '#FFFFFF',
    surface: '#F5F7F4',
    surfaceHover: '#EEF0EC',
    alternateBackground: '#F1F6EE',
    border: '#E1E4DD',
    
    text: '#1C1E1A',
    textMuted: '#4A4F45',
    textSubtle: '#6B7265',
    
    primary: '#059669',
    primaryHover: '#047857',
    primaryText: '#FFFFFF',
    
    secondary: '#7C3AED',
    secondaryHover: '#6D28D9',
    
    gradient: 'linear-gradient(135deg, #059669 0%, #7C3AED 100%)',
    shadow: 'rgba(28, 30, 26, 0.08)',
  }
};

const midnightTheme: Theme = {
  name: 'midnight',
  displayName: 'Midnight',
  mode: 'dark',
  colors: {
    background: '#0A0E1A',
    surface: '#131825',
    surfaceHover: '#1A2235',
    alternateBackground: '#121623',
    border: '#2D3548',
    
    text: '#F1F5F9',
    textMuted: '#CBD5E1',
    textSubtle: '#94A3B8',
    
    primary: '#38BDF8',
    primaryHover: '#0EA5E9',
    primaryText: '#0F172A',
    
    secondary: '#818CF8',
    secondaryHover: '#6366F1',
    
    gradient: 'linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)',
    shadow: 'rgba(0, 0, 0, 0.3)',
  }
};

const slateTheme: Theme = {
  name: 'slate',
  displayName: 'Slate',
  mode: 'dark',
  colors: {
    background: '#0F172A',
    surface: '#1E293B',
    surfaceHover: '#334155',
    alternateBackground: '#192031',
    border: '#475569',
    
    text: '#F8FAFC',
    textMuted: '#E2E8F0',
    textSubtle: '#CBD5E1',
    
    primary: '#A78BFA',
    primaryHover: '#8B5CF6',
    primaryText: '#F8FAFC',
    
    secondary: '#F472B6',
    secondaryHover: '#EC4899',
    
    gradient: 'linear-gradient(135deg, #A78BFA 0%, #F472B6 100%)',
    shadow: 'rgba(0, 0, 0, 0.4)',
  }
};

export const themes: Record<ThemeName, Theme> = {
  ocean: oceanTheme,
  sage: sageTheme,
  midnight: midnightTheme,
  slate: slateTheme,
};

export const defaultTheme: ThemeName = 'sage';
export const defaultDarkTheme: ThemeName = 'slate';
