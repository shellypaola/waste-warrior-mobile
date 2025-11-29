/**
 * Waste Warrior - Design System Colors
 * Version 1.0 - Classic Blue Theme
 * 
 * This is the single source of truth for all colors in the application.
 * Import this file instead of defining colors locally to prevent drift.
 * 
 * Usage:
 *   import { colors } from './colors';
 *   style={{ backgroundColor: colors.primary }}
 */

// ==================== PRIMARY BRAND COLORS ====================
// Classic Blue - Main brand identity
export const primary = {
  main: '#3B82F6',      // blue-600 - Primary brand color (buttons, active states)
  dark: '#2563EB',      // blue-700 - Hover states, emphasis
  light: '#DBEAFE',     // blue-100 - Backgrounds, subtle accents
  bg: '#EFF6FF',        // blue-50 - Very light backgrounds
};

// ==================== SEMANTIC COLORS ====================
// Alert States - Used for item cards and notifications

export const critical = {
  main: '#EF4444',      // red-500 - Critical alerts (expires today)
  bg: '#FEF2F2',        // red-50 - Critical backgrounds
  light: '#FEE2E2',     // red-100 - Critical cards
};

export const warning = {
  main: '#F59E0B',      // amber-500 - Warning alerts (expires soon)
  bg: '#FFFBEB',        // amber-50 - Warning backgrounds
  light: '#FEF3C7',     // amber-100 - Warning cards
};

export const fresh = {
  main: '#10B981',      // emerald-500 - Success states (fresh items)
  bg: '#ECFDF5',        // emerald-50 - Success backgrounds
};

// ==================== SECONDARY COLORS ====================
// Used for gamification, accents, and special features

export const secondary = {
  main: '#FBBF24',      // amber-400 - Secondary actions, gamification
  light: '#FEF3C7',     // amber-100 - Secondary backgrounds
};

// ==================== NEUTRAL COLORS ====================
// Text, backgrounds, and borders

export const text = {
  primary: '#111827',   // gray-900 - Main text
  secondary: '#6B7280', // gray-500 - Secondary text, labels
  light: '#9CA3AF',     // gray-400 - Disabled text, placeholders
};

export const background = {
  white: '#FFFFFF',     // white - Card backgrounds
  gray: '#F9FAFB',      // gray-50 - Page backgrounds
};

export const border = {
  main: '#E5E7EB',      // gray-200 - Default borders
  light: '#F3F4F6',     // gray-100 - Subtle dividers
};

// ==================== UNIFIED COLORS OBJECT ====================
// Legacy support - flat structure for easy migration from old code

export const colors = {
  // Primary - Classic Blue
  primary: '#3B82F6',
  primaryDark: '#2563EB',
  primaryLight: '#DBEAFE',
  primaryBg: '#EFF6FF',
  
  // Semantic - Alerts
  critical: '#EF4444',
  criticalBg: '#FEF2F2',
  criticalLight: '#FEE2E2',
  
  warning: '#F59E0B',
  warningBg: '#FFFBEB',
  warningLight: '#FEF3C7',
  
  fresh: '#10B981',
  freshBg: '#ECFDF5',
  
  // Secondary
  secondary: '#FBBF24',
  secondaryLight: '#FEF3C7',
  
  // Neutrals - Text
  text: '#111827',
  textSecondary: '#6B7280',
  textLight: '#9CA3AF',
  
  // Neutrals - Backgrounds
  bg: '#FFFFFF',
  bgGray: '#F9FAFB',
  
  // Neutrals - Borders
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
};

// ==================== GRADIENTS ====================
// Pre-defined gradients for consistent styling

export const gradients = {
  // Primary gradient (header, splash screen)
  primary: ['#3B82F6', '#1D4ED8'],  // Converted to array for React Native LinearGradient
  
  // Primary light gradient (subtle backgrounds)
  primaryLight: ['#DBEAFE', '#EFF6FF'],
  
  // Silver level (rewards)
  silver: ['#C0C0C0', '#A8A8A8'],
  
  // Gold level (rewards)
  gold: ['#FFD700', '#FFC700'],
  
  // Bronze level (rewards)
  bronze: ['#CD7F32', '#B8732E'],
  
  // Platinum level (rewards)
  platinum: ['#E5E4E2', '#D3D3D3'],
  
  // Streak/fire gradient
  fire: ['#F59E0B', '#D97706'],
};

// ==================== SHADOWS ====================
// Consistent shadow definitions (React Native compatible)

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 8,
  },
  
  // Colored shadows for special elements
  primary: {
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  fresh: {
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
};

// ==================== OPACITY VALUES ====================
// Standard opacity levels for consistency

export const opacity = {
  disabled: 0.4,
  hover: 0.8,
  subtle: 0.6,
  overlay: 0.5,
};

// ==================== HELPER FUNCTIONS ====================

/**
 * Add alpha channel to hex color
 * @param {string} hex - Hex color (e.g., '#3B82F6')
 * @param {number} alpha - Alpha value 0-1 (e.g., 0.5)
 * @returns {string} rgba color string
 */
export const addAlpha = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Get status color based on days until expiry
 * @param {number} daysUntilExpiry - Days until item expires
 * @returns {object} { bg, text, border } colors
 */
export const getExpiryColors = (daysUntilExpiry) => {
  if (daysUntilExpiry < 0) {
    return {
      bg: background.gray,
      text: text.light,
      border: border.main,
      status: 'expired'
    };
  }
  if (daysUntilExpiry <= 1) {
    return {
      bg: critical.light,
      text: critical.main,
      border: critical.main,
      status: 'critical'
    };
  }
  if (daysUntilExpiry <= 3) {
    return {
      bg: warning.light,
      text: warning.main,
      border: warning.main,
      status: 'warning'
    };
  }
  return {
    bg: fresh.bg,
    text: fresh.main,
    border: border.main,
    status: 'fresh'
  };
};

// ==================== DEFAULT EXPORT ====================
// Export everything for convenience

export default {
  // Color objects
  primary,
  critical,
  warning,
  fresh,
  secondary,
  text,
  background,
  border,
  
  // Unified flat object (for legacy code)
  colors,
  
  // Additional utilities
  gradients,
  shadows,
  opacity,
  
  // Helper functions
  addAlpha,
  getExpiryColors,
};
