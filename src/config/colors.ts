/**
 * FemiSpace Brand Color Scheme
 * This file serves as the single source of truth for the FemiSpace color palette
 */

export const colors = {
  primary: {
    DEFAULT: '#8D43A4', // Base purple - Main brand color
    light: '#A355BC',   // Lighter purple - For hover states and highlights
    dark: '#462152',    // Dark purple - For backgrounds and contrast
  },
  secondary: {
    DEFAULT: '#D3FFF4', // Mint green - Secondary brand color
    light: '#E6FFF8',   // Lighter mint - For subtle backgrounds
    dark: '#A6FFE9',    // Darker mint - For emphasis
  },
  accent: {
    DEFAULT: '#B8FFE9', // Medium mint - For accents and call-to-actions
    light: '#F0FFF9',   // Very light mint - For subtle highlights
    dark: '#8CFFE0',    // Deep mint - For strong emphasis
  },
  background: {
    DEFAULT: '#F7FFFC', // Very light mint - Main background color
    dark: '#E9FFF7',    // Slightly darker mint - Alternative background
  },
} as const

export const gradients = {
  hero: 'linear-gradient(to bottom right, rgba(70, 33, 82, 0.95), rgba(141, 67, 164, 0.9))',
  section: 'linear-gradient(to bottom, rgba(211, 255, 244, 0.3), rgba(230, 255, 248, 0.5))',
  grid: `
    linear-gradient(to right, rgba(211, 255, 244, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(211, 255, 244, 0.1) 1px, transparent 1px)
  `,
} as const

/**
 * Usage Guide:
 * 
 * In Tailwind classes:
 * - Text: text-primary, text-primary-light, text-primary-dark
 * - Background: bg-primary, bg-secondary-light, etc.
 * - Border: border-accent, border-secondary-dark, etc.
 * 
 * In CSS-in-JS or styled-components:
 * import { colors } from '@/config/colors'
 * color: colors.primary.DEFAULT
 * background: colors.secondary.light
 * 
 * For gradients:
 * - Hero sections: bg-hero-pattern
 * - Content sections: bg-section-pattern
 * - Grid overlays: bg-grid-pattern
 */
