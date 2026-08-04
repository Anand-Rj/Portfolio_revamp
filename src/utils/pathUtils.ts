/**
 * Utility function to get the correct base path for assets
 * In production (GitHub Pages), this will be '/anandPortfolio/'
 * In development, this will be '/'
 */
export const getBasePath = (): string => {
  // Check if we're in production (GitHub Pages)
  if (import.meta.env.PROD) {
    return '/anandPortfolio/';
  }
  return '/';
};

/**
 * Get the correct path for an asset
 * @param assetPath - The asset path (e.g., '/image.png')
 * @returns The correct full path for the asset
 */
export const getAssetPath = (assetPath: string): string => {
  // Remove leading slash if present
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  // Add aggressive cache-busting with timestamp
  const timestamp = Date.now();
  const version = 'v4.0.0';
  return `${getBasePath()}${cleanPath}?v=${version}&t=${timestamp}`;
};
