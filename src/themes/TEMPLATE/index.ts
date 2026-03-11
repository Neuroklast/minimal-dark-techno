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

export const templateTheme: ThemePackage = {
  id: 'template-theme',
  name: 'Template Theme',
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
