/**
 * Type declarations for CSS imports
 * This tells TypeScript to allow CSS file imports
 */

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}