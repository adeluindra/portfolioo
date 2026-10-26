
function getSiteUrl(): string | null {
  const value = process.env.SITE_URL?.trim();

  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);

    const isValid =
      url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      url.pathname === "/" &&
      !url.search &&
      !url.hash;

    return isValid ? url.origin : null;
  } catch {
    return null;
  }
}

export const siteUrl = getSiteUrl();

export const indexingEnabled =
  siteUrl !== null &&
  process.env.ENABLE_INDEXING === "true";
