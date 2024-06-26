/*
  * A custom loader is needed to handle the CDN URLs
  * You don't need to prepend the CDN URL in the src attribute, since the custom loader respects the assetPrefix (weird, but it works)
  * This works with both `/example` or `https://cdn.example.com` prefixes
 */
export default function cdnLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`
}
