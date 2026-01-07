import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * This prevents class conflicts and ensures proper class precedence
 * 
 * @param inputs - Class names to merge
 * @returns Merged class string
 * 
 * Example usage:
 * cn("bg-red-500", "bg-blue-500") // Returns "bg-blue-500" (no conflict)
 * cn("px-4 py-2", condition && "bg-primary-500") // Conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
