# Copilot Instructions for Portfolio Project

## Project Overview

This is a personal portfolio website built with Next.js 15, React 19, and TypeScript. The site showcases projects, skills, and professional experience with a modern, responsive design using Tailwind CSS v4.

## Technology Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript 5 (with some legacy JavaScript files)
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4.1.13 with PostCSS
- **Icons**: lucide-react
- **Theme**: next-themes for dark/light mode
- **Build Tool**: Turbopack (Next.js built-in)

## Development Setup

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`
4. Start production server: `npm start`
5. Run linter: `npm run lint`

The development server runs on [http://localhost:3000](http://localhost:3000).

## Project Structure

```
/src
  /app           # Next.js App Router pages
    layout.tsx   # Root layout with metadata
    page.tsx     # Home page
    globals.css  # Global styles
  /components    # React components
    Portfolio.js # Main portfolio component (to be migrated to TypeScript)
```

## Coding Standards and Conventions

### General Guidelines

- **Prefer TypeScript**: New files should use TypeScript (.tsx/.ts). Gradually migrate JavaScript files to TypeScript.
- **Use functional components**: All React components should be functional with hooks.
- **File naming**: Use PascalCase for components (e.g., `Portfolio.tsx`), camelCase for utilities.
- **Code style**: Follow ESLint configuration (eslint.config.mjs).

### Next.js Specific

- **Use Next.js Image component**: Replace `<img>` tags with `<Image />` from `next/image` for automatic optimization.
- **App Router**: Use the App Router structure (app directory) for new routes.
- **Client components**: Mark components using hooks or browser APIs with `"use client"` directive.
- **Metadata**: Define metadata in layout.tsx or page.tsx using the `Metadata` type.

### React Best Practices

- Use hooks appropriately (useState, useEffect, etc.)
- Avoid prop drilling; consider context for deeply nested state
- Keep components focused and single-responsibility
- Use TypeScript interfaces for component props

### Styling

- **Tailwind CSS**: Use utility classes for styling
- **Dark mode**: Support both light and dark themes using `dark:` prefix
- **Responsive design**: Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
- **Transitions**: Add smooth transitions for interactive elements

## Building and Testing

### Linting

Run `npm run lint` to check for code issues. The project uses ESLint with Next.js configuration.

Current known warnings:
- Some `<img>` tags in Portfolio.js should be migrated to Next.js `<Image />` component

### Building

Build the project with `npm run build`. This uses Next.js with Turbopack for faster builds.

### Testing

Currently, there is no test infrastructure in place. When adding tests, consider:
- Jest for unit testing
- React Testing Library for component testing
- Cypress for E2E testing (as mentioned in skills)

## Important Files

- `package.json`: Dependencies and scripts
- `next.config.ts`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript compiler options
- `eslint.config.mjs`: ESLint configuration
- `.github/workflows/nextjs.yml`: CI/CD workflow

## Common Tasks

### Adding a new page

1. Create a new folder in `src/app/[route-name]`
2. Add a `page.tsx` file with the page component
3. Optionally add `layout.tsx` for route-specific layout

### Adding a new component

1. Create a `.tsx` file in `src/components/`
2. Use TypeScript and functional component pattern
3. Export as default or named export
4. Import and use in pages or other components

### Updating styles

1. Use Tailwind utility classes in className
2. For custom styles, update `src/app/globals.css`
3. Ensure dark mode variants are included

## Dependencies

- Keep dependencies up to date but test thoroughly
- Use `npm install` to add new packages
- Prefer well-maintained packages with TypeScript support
- Check for security vulnerabilities regularly

## Notes

- The portfolio showcases full-stack development skills
- Focus on performance, accessibility, and responsive design
- Maintain consistency with the existing dark/light theme system
- Follow Next.js best practices for optimal performance
