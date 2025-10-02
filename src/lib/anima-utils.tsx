import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const animaTheme = {
  colors: {
    primary: "hsl(var(--primary))",
    secondary: "hsl(var(--secondary))",
    accent: "hsl(var(--accent))",
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    muted: "hsl(var(--muted))",
    border: "hsl(var(--border))",
    wasselTeal: "var(--wassel-teal)",
    wasselGray: "var(--wassel-gray)",
    wasselDark: "var(--wassel-dark)"
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem"
  },
  borderRadius: {
    sm: "calc(var(--radius) - 4px)",
    md: "calc(var(--radius) - 2px)",
    lg: "var(--radius)"
  }
}

export const animaVariants = {
  button: {
    primary: "anima-button-primary",
    secondary: "anima-button-secondary",
    ghost: "anima-button hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2",
    link: "anima-button text-primary underline-offset-4 hover:underline h-10 px-4 py-2"
  },
  card: {
    default: "anima-card",
    elevated: "anima-card shadow-lg",
    interactive: "anima-card hover:shadow-md transition-shadow cursor-pointer"
  },
  input: {
    default: "anima-input",
    error: "anima-input border-destructive focus-visible:ring-destructive",
    success: "anima-input border-green-500 focus-visible:ring-green-500"
  }
}

export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(amount)
}

export function formatDate(date: Date | string, format = "short"): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: format as "short" | "medium" | "long" | "full"
  }).format(dateObj)
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}