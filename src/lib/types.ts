import type { ComponentType, ReactNode } from 'react'

export interface ThemeColors {
  accent: string
  foreground: string
  background: string
  card: string
  muted: string
  'muted-foreground': string
  border: string
  [key: string]: string
}

export interface ThemeSlots {
  Hero: ComponentType
  Navigation: ComponentType
  Card: ComponentType
  BackgroundEffects: ComponentType
  SectionDivider: ComponentType
  LoadingScreen: ComponentType
  BiographySection: ComponentType
  GigsSection: ComponentType
  ReleasesSection: ComponentType
  SocialSection: ComponentType
  Footer: ComponentType
  ThemeModalWrapper: ComponentType<{
    isOpen: boolean
    onClose: () => void
    title?: string
    children: ReactNode
  }>
  GlobalOverlayLayer: ComponentType<{
    noiseIntensity?: number
    scanlineIntensity?: number
    flickerIntensity?: number
  }>
}

export interface Theme {
  id: string
  name: string
  colors: ThemeColors
  slots: ThemeSlots
}

export type ThemePackage = Theme
