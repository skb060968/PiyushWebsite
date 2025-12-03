/**
 * Utility function to get the correct image path for GitHub Pages deployment
 */
export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production (GitHub Pages), prepend the repository name
  if (process.env.NODE_ENV === 'production') {
    return `/PiyushWebsite/${cleanPath}`;
  }
  
  // In development, use the path as-is
  return `/${cleanPath}`;
}

/**
 * Utility function for base path
 */
export function getBasePath(): string {
  return process.env.NODE_ENV === 'production' ? '/PiyushWebsite' : '';
}