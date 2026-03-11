# Theme Template

This is the official theme template for the NEUROKLAST band framework.

## 📋 Required Structure

Every theme MUST export a `ThemePackage` conforming to `@/lib/types`.

```typescript
import type { ThemePackage } from '@/lib/types'
```

## 🎯 Required Components

Every theme MUST include these exact components:

### Core UI Slots (6 components)
1. **Hero.tsx** - Main landing section with band name
2. **Navigation.tsx** - Menu structure
3. **Card.tsx** - Reusable wrapper for content blocks
4. **BackgroundEffects.tsx** - Fixed background layer (with `pointer-events-none`)
5. **SectionDivider.tsx** - Visual separator between sections
6. **LoadingScreen.tsx** - Entry animation/preloader

### Content Sections (4 components)
7. **BiographySection.tsx** - Band bio and photo layout
8. **GigsSection.tsx** - Tour dates list/grid
9. **ReleasesSection.tsx** - Album covers grid/carousel
10. **SocialSection.tsx** - Social links and video embed

### Structural Components (3 components)
11. **Footer.tsx** - Copyright and imprint
12. **ThemeModalWrapper.tsx** - Animated modal with {isOpen, onClose, title, children}
13. **GlobalOverlayLayer.tsx** - Pure CSS overlay with effects like scanlines, noise, flicker

## 🎨 Styling Rules

### Use Semantic Tailwind Classes ONLY
❌ NEVER use: `bg-red-500`, `text-blue-300`, `border-purple-600`
✅ ALWAYS use: `bg-background`, `bg-card`, `bg-muted`, `text-foreground`, `text-primary`, `text-accent`, `border-border`

### CSS Encapsulation
- All custom CSS classes MUST be prefixed with theme ID
- Example: `.signal-static-glow`, `.neon-pulse-effect`
- This prevents global CSS collisions

### Required Files
- `index.ts` - Theme registry (see example below)
- `styles.css` - Custom animations and effects
- All 13 component `.tsx` files

## 📦 Theme Registry Structure

```typescript
import type { ThemePackage } from '@/lib/types'
import Hero from './Hero'
import Navigation from './Navigation'
import Card from './Card'
import BackgroundEffects from './BackgroundEffects'
import SectionDivider from './SectionDivider'
import LoadingScreen from './LoadingScreen'
import BiographySection from './BiographySection'
import GigsSection from './GigsSection'
import ReleasesSection from './ReleasesSection'
import SocialSection from './SocialSection'
import Footer from './Footer'
import ThemeModalWrapper from './ThemeModalWrapper'
import GlobalOverlayLayer from './GlobalOverlayLayer'
import './styles.css'

export const yourTheme: ThemePackage = {
  id: 'your-theme-id',
  name: 'Your Theme Name',
  colors: {
    primary: 'oklch(0.7 0.1 250)',
    accent: 'oklch(0.6 0.2 20)',
    background: 'oklch(0.1 0 0)',
    foreground: 'oklch(0.9 0 0)',
    card: 'oklch(0.12 0 0)',
    muted: 'oklch(0.15 0 0)',
    'muted-foreground': 'oklch(0.6 0 0)',
    border: 'oklch(0.25 0 0)'
  },
  slots: {
    Hero,
    Navigation,
    Card,
    BackgroundEffects,
    SectionDivider,
    LoadingScreen,
    BiographySection,
    GigsSection,
    ReleasesSection,
    SocialSection,
    Footer,
    ThemeModalWrapper,
    GlobalOverlayLayer
  }
}
```

## 🔧 Component Requirements

### Card Component
Must accept `{ children?: ReactNode; className?: string }`

### ThemeModalWrapper Component
Must accept `{ isOpen: boolean; onClose: () => void; title: string; children: ReactNode }`

### GlobalOverlayLayer Component
Must accept `{ noiseIntensity?: number; scanlineIntensity?: number; flickerIntensity?: number }`

### BackgroundEffects Component
MUST have `pointer-events-none` to avoid blocking interactions

## 🎭 Data Placeholders

Use clear placeholders for dynamic content:
- `NEUROKLAST` for band name
- `{{GIG_DATE}}`, `{{GIG_VENUE}}` for tour dates
- `{{ALBUM_TITLE}}`, `{{RELEASE_DATE}}` for releases
- `{{BAND_BIO}}` for biography text

## ✅ Checklist for New Themes

- [ ] All 13 required components created
- [ ] `index.ts` exports ThemePackage type
- [ ] All colors use oklch format
- [ ] No hardcoded color values in Tailwind (red-500, etc.)
- [ ] CSS classes prefixed with theme ID
- [ ] `styles.css` contains keyframe animations
- [ ] Card accepts optional children
- [ ] ThemeModalWrapper uses Framer Motion
- [ ] GlobalOverlayLayer has pointer-events-none
- [ ] BackgroundEffects has pointer-events-none

## 🚀 Integration

Themes are imported in `App.tsx`:

```typescript
import { yourTheme } from '@/themes/your-theme'

const { Hero, Navigation, ... } = yourTheme.slots
```
