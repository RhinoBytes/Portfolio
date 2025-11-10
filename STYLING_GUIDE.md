# Portfolio Styling & Theme System Guide

## Overview

This portfolio now features a professional, accessible multi-theme system with 4 distinct themes (2 light, 2 dark), enhanced typography, and comprehensive accessibility improvements.

## Theme System

### Available Themes

#### Light Themes
1. **Ocean** - Professional blue palette inspired by modern SaaS applications
   - Primary: Sky blue (`#0EA5E9`)
   - Secondary: Indigo (`#6366F1`)
   - Excellent for conveying trust and professionalism

2. **Sage** - Warm, earthy palette with green accents
   - Primary: Emerald green (`#059669`)
   - Secondary: Purple (`#7C3AED`)
   - Professional yet approachable feel

#### Dark Themes
1. **Midnight** - Deep blues with vibrant accents
   - Background: Deep navy (`#0A0E1A`)
   - Primary: Cyan (`#38BDF8`)
   - Secondary: Light indigo (`#818CF8`)
   - Modern and sophisticated

2. **Slate** - Neutral grays with purple/pink accents
   - Background: Dark slate (`#0F172A`)
   - Primary: Purple (`#A78BFA`)
   - Secondary: Pink (`#F472B6`)
   - Clean and professional

### Theme Architecture

The theme system uses CSS custom properties for dynamic theming:

```css
/* Theme colors are applied via CSS variables */
--color-background
--color-surface
--color-surface-hover
--color-border
--color-border-subtle
--color-text
--color-text-muted
--color-text-subtle
--color-primary
--color-primary-hover
--color-secondary
--color-secondary-hover
```

### Using Themes in Components

```tsx
// Apply theme colors via CSS variables
<div style={{ backgroundColor: 'var(--color-surface)' }}>
  <h2 style={{ color: 'var(--color-text)' }}>Heading</h2>
</div>

// Or use Tailwind's custom color classes
<div className="bg-surface text-text">
  <h2 className="text-primary">Heading</h2>
</div>
```

## Typography System

### Font Families

- **Primary (Sans-serif)**: Inter
  - Professional, highly legible
  - Weights: 300, 400, 500, 600, 700, 800
  
- **Monospace**: JetBrains Mono
  - For code snippets and technical content
  - Weights: 400, 500, 600, 700

### Type Scale

```css
--text-xs: 0.75rem    (12px)
--text-sm: 0.875rem   (14px)
--text-base: 1rem     (16px)
--text-lg: 1.125rem   (18px)
--text-xl: 1.25rem    (20px)
--text-2xl: 1.5rem    (24px)
--text-3xl: 1.875rem  (30px)
--text-4xl: 2.25rem   (36px)
--text-5xl: 3rem      (48px)
--text-6xl: 3.75rem   (60px)
--text-7xl: 4.5rem    (72px)
```

### Typography Hierarchy

1. **H1 (Hero)**: 5xl-7xl, font-bold, gradient text
2. **H2 (Section)**: 4xl-5xl, font-bold, gradient text
3. **H3 (Subsection)**: 3xl, font-bold
4. **H4 (Card titles)**: xl-lg, font-bold
5. **Body**: base-lg, regular to medium weight
6. **Muted text**: base-lg, text-muted color
7. **Subtle text**: sm-base, text-subtle color

## Accessibility Features

### WCAG 2.1 AA Compliance

All theme color combinations meet WCAG 2.1 AA contrast requirements:
- Normal text: 4.5:1 contrast ratio minimum
- Large text: 3:1 contrast ratio minimum

### Keyboard Navigation

- **Skip to content link**: Press Tab on page load to access
- **Focus indicators**: All interactive elements have visible focus states
- **Logical tab order**: Follows visual flow of the page

### Focus States

```css
/* All interactive elements */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

### Semantic HTML

- Proper heading hierarchy (H1 → H2 → H3 → H4)
- Landmark roles (`navigation`, `main`, `contentinfo`)
- ARIA labels for interactive elements
- Descriptive alt text for images

### Screen Reader Support

- Skip navigation link for quick content access
- Descriptive button labels (e.g., "Toggle light/dark mode")
- Section headings with proper ARIA labelledby

## Component Patterns

### Buttons

```tsx
// Primary gradient button
<a
  href="#"
  className="px-8 py-4 text-white rounded-xl transition-all duration-200 
             font-semibold shadow-lg hover:shadow-xl hover:scale-105"
  style={{ background: 'var(--gradient)' }}
>
  Button Text
</a>

// Secondary outline button
<a
  href="#"
  className="px-8 py-4 border-2 rounded-xl transition-all duration-200 
             font-semibold hover:scale-105"
  style={{ 
    borderColor: 'var(--color-border)',
    color: 'var(--color-text)'
  }}
>
  Button Text
</a>
```

### Cards

```tsx
<div 
  className="p-8 rounded-2xl hover:shadow-xl transition-all duration-300 
             hover:scale-105 border"
  style={{ 
    backgroundColor: 'var(--color-surface)',
    borderColor: 'var(--color-border)'
  }}
>
  {/* Card content */}
</div>
```

### Gradients

All themes include a custom gradient accessible via `var(--gradient)`:

```tsx
<h1 
  className="bg-clip-text text-transparent"
  style={{ backgroundImage: 'var(--gradient)' }}
>
  Gradient Text
</h1>
```

## Design Principles

### Professional & Distinctive

- **Subtle effects**: Gradients, shadows, and hover states enhance without overwhelming
- **Consistent spacing**: Uses a defined spacing scale
- **Smooth transitions**: 150-300ms for interactive elements
- **Modern aesthetics**: Rounded corners, soft shadows, clean layouts

### Visual Hierarchy

1. **Gradient headings**: Draw attention to key sections
2. **Card grouping**: Related content in visual containers
3. **Whitespace**: Generous padding and margins for readability
4. **Color coding**: Skills cards use theme colors for visual variety

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible layouts with grid and flexbox
- Responsive typography scaling

## Customization Guide

### Adding a New Theme

1. Define theme colors in `/src/config/themes.ts`:

```typescript
const newTheme: Theme = {
  name: 'mytheme',
  displayName: 'My Theme',
  mode: 'light', // or 'dark'
  colors: {
    background: '#FFFFFF',
    surface: '#F5F5F5',
    // ... define all required colors
  }
};
```

2. Add to themes object:

```typescript
export const themes: Record<ThemeName, Theme> = {
  // ... existing themes
  mytheme: newTheme,
};
```

3. Update light or dark themes array:

```typescript
export const lightThemes: ThemeName[] = ['ocean', 'sage', 'mytheme'];
```

### Modifying Existing Themes

Edit color values in `/src/config/themes.ts`. Changes will apply immediately via CSS custom properties.

### Adjusting Typography

Modify font imports in `/src/app/layout.tsx` or adjust the type scale in `/src/app/globals.css`.

## Best Practices

### Color Contrast

Always verify color combinations using a contrast checker:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Aim for AAA compliance where possible (7:1 for normal text)

### Hover & Focus States

Every interactive element should have:
- Hover state (subtle background change, scale, or shadow)
- Focus state (visible outline via focus-visible)
- Smooth transition between states

### Animation Performance

- Use `transform` and `opacity` for animations (GPU-accelerated)
- Add `will-change` for frequently animated properties
- Keep animations under 300ms for responsiveness

### Theme Consistency

When adding new components:
1. Use CSS custom properties for colors
2. Follow the established spacing scale
3. Apply consistent border radius values
4. Maintain hover/focus state patterns

## Testing Checklist

- [ ] All themes load correctly
- [ ] Theme switching works without page reload
- [ ] Theme preference persists across sessions
- [ ] Colors meet WCAG 2.1 AA contrast requirements
- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus indicators are visible on all themes
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] Animations are smooth and performant
- [ ] Screen reader announces content correctly

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [React Accessibility](https://react.dev/learn/accessibility)
