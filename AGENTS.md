# AGENTS.md

Guidelines for AI agents working with this codebase.

## Project Overview

Next.js 14 portfolio site using the App Router, TypeScript (strict mode), and a hybrid styling system (Tailwind CSS + component CSS with BEM).

**Package manager**: pnpm

## Critical Rules

- **Do NOT** run `dev`, `build`, `start`, or `lint` commands automatically. The user runs these manually.
- **Do NOT** include AI attribution or co-author metadata in git commits.
- **Do NOT** add unnecessary comments, docstrings, or type annotations to unchanged code.
- **Do NOT** introduce global state management — this project uses React local state only by design.

## Tech Stack

| Layer         | Technology                                    |
|---------------|-----------------------------------------------|
| Framework     | Next.js 14 (App Router)                       |
| Language      | TypeScript (strict, `@/*` path alias)         |
| Styling       | Tailwind CSS + Component CSS (BEM) + PostCSS  |
| UI Primitives | Shadcn-style components with CVA + Radix UI   |
| Icons         | FontAwesome (solid + brands)                  |
| Animations    | react-powerglitch, tailwindcss-animate        |
| Analytics     | Vercel Analytics, Umami                        |

## File Structure

```
src/
├── app/                 # Pages and layouts (App Router)
├── components/
│   ├── layout/          # Nav, NavMobile, Footer, Sidebar
│   ├── home/            # HeroSection, HeroButton
│   ├── projects/        # ProjectsSection (dual-mode grid/tree)
│   ├── spotify/         # Song component (API not yet implemented)
│   └── common/
│       ├── ui/          # Shadcn-style primitives (button, card, badge, tabs, toggle)
│       └── buttons/     # Custom button variants
├── styles/
│   ├── main.css         # Entry point — imports base/, layout/, components/
│   ├── globals.css      # CSS variables and global styles
│   ├── base/            # reset.css, typography.css
│   ├── layout/          # navigation.css, navMobile.css, footer.css, containers.css
│   └── components/      # heroSection.css, projectSection.css, buttons.css
├── lib/utils.ts         # cn() class merger
├── types/               # TypeScript type definitions
├── constants/           # Static data (projects list)
└── fontawesome.tsx       # FontAwesome library config
```

## Routing

| Route        | File                        | Status      |
|--------------|-----------------------------|-------------|
| `/`          | `src/app/page.tsx`          | Complete    |
| `/projects`  | `src/app/projects/page.tsx` | Complete    |
| `/about-me`  | `src/app/about-me/page.tsx` | Placeholder |
| `/contact`   | `src/app/contact/page.tsx`  | Placeholder |

## Styling Conventions

### Hybrid approach

1. **Tailwind utilities** for layout, spacing, and simple styling directly in JSX.
2. **Component CSS files** in `src/styles/components/` for complex, component-specific styles.
3. **BEM naming** in all component CSS:
   ```css
   .component-name {
     &__element { }
     &__element--modifier { }
     &--state { }
   }
   ```
4. **PostCSS nesting** is enabled — use `&` for nested selectors.

### Custom theme colors

- `lawn-green` (`#7af42a`) — primary accent
- `turquoise` (`#2ae8c4`) — secondary accent
- `gunmetal` (`#050505`) — dark background
- `french-gray` (`#abb2bf`) — text color

### UI components (src/components/common/ui/)

Follow the Shadcn pattern:
- Use CVA for variant definitions
- Use `cn()` from `@/lib/utils` for class merging
- Use `React.forwardRef` for ref forwarding
- Button variants: `default | destructive | outline | secondary | ghost | link`
- Button sizes: `default | sm | lg | icon`

## Component Patterns

- Import paths must use the `@/*` alias (maps to `src/*`).
- New components should have a companion CSS file if they need non-trivial styling.
- Mobile navigation uses `dynamic(() => import(), { ssr: false })`.
- The projects section supports two display modes: BENTO (grid) and TREE (list).

## Known Incomplete Features

These are intentionally unfinished — don't "fix" them unless explicitly asked:

- Spotify `/api/currently-playing` endpoint does not exist yet
- About Me page is a placeholder
- Contact page is a placeholder
- Blog is referenced in TreeView but not implemented
- Sidebar component exists but is not used in any layout
