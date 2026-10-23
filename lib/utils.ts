export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === 'production' ? '/etrm-website' : '');

/**
 * Returns the correct asset path, prepending the base path in production/GitHub Pages
 * while avoiding double-prefixing and leaving remote URLs unchanged.
 */
export function getAssetPath(path: string): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }
  if (BASE_PATH && path.startsWith(BASE_PATH)) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}
