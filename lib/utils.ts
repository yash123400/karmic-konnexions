import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateStr?: string): string {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function readingTime(body: unknown): number {
  if (!body) return 1
  const text = JSON.stringify(body)
  const words = text.split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}
