import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function for combining class names with Tailwind CSS.
 * Merges multiple class names and resolves Tailwind CSS conflicts.
 * 
 * // Basic usage
 * cn('text-red-500', 'bg-blue-500') // => 'text-red-500 bg-blue-500'
 * 
 * // With conditional classes
 * cn('text-red-500', { 'bg-blue-500': isBlue }) 
 * 
 * // With component props
 * cn('base-class', props.className)
 * 
 * // Resolving Tailwind conflicts
 * cn('text-red-500', 'text-blue-500') // => 'text-blue-500'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
} 