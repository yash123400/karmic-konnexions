import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function readingTime(content: any[]): number {
  if (!content) return 0
  const words = content.reduce((acc, block) => {
    if (block._type !== 'block' || !block.children) return acc
    return acc + block.children.reduce((acc2: number, child: any) => acc2 + (child.text?.split(/\s+/).length || 0), 0)
  }, 0)
  return Math.ceil(words / 200) || 1
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(date))
}
