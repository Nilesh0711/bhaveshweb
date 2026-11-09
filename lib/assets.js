/**
 * Helper to ensure image and asset paths include the GitHub Pages repository subpath (basePath)
 * if deployed to https://<username>.github.io/<repo>/, while working seamlessly on localhost and custom domains.
 */
export const getAssetPath = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};

export default getAssetPath;
