# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev          # Start development server at http://localhost:3000

# Build and production
npm run build        # Production build
npm run start        # Start production server

# Code quality
npm run lint         # Run ESLint
```

## Architecture Overview

This is a **Next.js 14** portfolio site using the **App Router** (not Pages Router). Key architectural decisions:

### Routing Structure
- **App Router** with file-based routing in `src/app/`
- Routes: `/` (home), `/projects`, `/about-me`, `/contact`
- Navigation uses `next/link` for client-side transitions
- Metadata API in `layout.tsx` handles SEO and OpenGraph tags

### Component Organization
```
src/
├── app/              # App Router pages and layouts
├── components/       # Reusable UI components
│   ├── ui/          # Shadcn-style primitives (Button, Card, Tabs, Badge)
│   └── buttons/     # Custom button variants
├── layouts/         # Page structure components (nav, footer, navMobile)
├── css/             # Organized CSS architecture
│   ├── base/       # Typography, reset
│   ├── layout/     # Navigation, footer, containers
│   └── components/ # Component-scoped styles
└── lib/            # Utilities (cn class merger)
```

### Styling Architecture

This project uses a **hybrid CSS approach**:

1. **Tailwind CSS** (utility-first): Primary styling system
2. **Component CSS files**: Each major component has a companion CSS file (e.g., `heroSection.tsx` + `heroSection.css`)
3. **PostCSS Nesting**: Enables SCSS-like nesting syntax
4. **BEM Methodology**: Extensively used in component CSS (e.g., `.hero-section__content`, `.hero-section--active`)
5. **Class Variance Authority (CVA)**: Manages UI component variants in `components/ui/`

**Custom Colors** (tailwind.config.ts):
- `lawn-green: #7af42a` - Primary accent
- `turquoise: #2ae8c4` - Secondary accent
- `gunmetal: #050505` - Dark background
- `french-gray: #abb2bf` - Text color

**CSS Import Chain**: `src/css/main.css` → imports from `base/`, `layout/`, `components/`

### State Management

**No global state management** - uses React local state only:
- Navigation menu state (`isOpen`)
- Projects filter state (`activeCategory`, `activeMode`)
- TreeView toggle state
- Spotify song data (client-side fetch)

This is intentional for a portfolio site with simple interactivity.

### Special Features

1. **Projects Grid System** (`projectsSection.tsx`):
   - Dual-mode display: BENTO (grid) vs TREE (list)
   - Category filtering: FEATURED, WORDPRESS, NEXTJS, REACT, GUTENBERG
   - Categories are clickable from project cards

2. **Mobile Navigation**:
   - Dynamic drawer using `dynamic(() => import())` with `ssr: false`
   - File explorer-style TreeView component
   - Body overflow prevention when menu open

3. **Glitch Animation**:
   - Uses `react-powerglitch` library
   - Applied to hero CTA button
   - Initialized with `useGlitch()` hook

4. **Video Background**:
   - `next-video` library for optimized video
   - BackgroundVideo component in AvatarVideo
   - Files in `/videos/` directory

5. **FontAwesome Integration**:
   - Configured in `src/fontawesome.tsx`
   - Solid and brands icon libraries
   - Used throughout nav and footer

### TypeScript Configuration

- Strict mode enabled
- Path alias: `@/*` maps to `src/*`
- Use this alias consistently in imports

### Environment Variables

Spotify credentials are exposed to client via `next.config.mjs`:
- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `SPOTIFY_REFRESH_TOKEN`

Note: The Song component references `/api/currently-playing` but this API route doesn't exist yet.

## Working with CSS

When modifying styles:

1. **Component-specific styles**: Edit the corresponding CSS file in `src/css/components/`
2. **Layout styles**: Edit files in `src/css/layout/`
3. **Utility classes**: Use Tailwind utilities directly in JSX
4. **New components**: Follow the pattern of creating both `.tsx` and `.css` files
5. **BEM naming**: Maintain the existing BEM pattern in component CSS

Example BEM structure:
```css
.component-name {
  &__element { }
  &__element--modifier { }
  &--state { }
}
```

## Component Patterns

### UI Components (Shadcn-style)
Located in `src/components/ui/`, these use:
- CVA for variant management
- `cn()` utility for class merging
- Radix UI primitives as base (Tabs, Toggle)
- Forwardable refs with `React.forwardRef`

### Button Variants
```typescript
variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
size: "default" | "sm" | "lg" | "icon"
```

## Known Incomplete Features

- **Spotify Integration**: Song component exists but API endpoint missing
- **About Page**: Placeholder only
- **Contact Page**: Placeholder only
- **Blog**: Mentioned in TreeView but not implemented
- **Sidebar**: Component exists but not used in layout

## Git Workflow

Current branch: `project-section`
Main branch: `main`

Recent focus areas:
- Navigation mobile refinements
- Project section layout improvements
- OpenGraph/social sharing optimization

### Commit Message Preferences

**IMPORTANT**: Do NOT include Claude Code collaboration messages in commits. Write simple, clear commit messages without:
- "🤖 Generated with [Claude Code]" footers
- "Co-Authored-By: Claude Sonnet" attributions
- Any Claude-related metadata

Example:
```bash
# Good
git commit -m "add projects filtering functionality"

# Bad - Don't do this
git commit -m "add projects filtering

🤖 Generated with [Claude Code](https://claude.com/claude-code)
Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```
