import fr from './translations/fr.json';
import en from './translations/en.json';
import de from './translations/de.json';
import es from './translations/es.json';
import it from './translations/it.json';
import { routeMap, reverseRouteMap, type Locale } from './routes';

export { routeMap, reverseRouteMap };
export type { Locale };

const translations: Record<Locale, Record<string, any>> = { fr, en, de, es, it };

export const locales: Locale[] = ['fr', 'en', 'de', 'es', 'it'];

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano',
};

export const ogLocales: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_US',
  de: 'de_DE',
  es: 'es_ES',
  it: 'it_IT',
};

export function getLocale(Astro: { currentLocale?: string }): Locale {
  const loc = Astro.currentLocale;
  if (loc && locales.includes(loc as Locale)) return loc as Locale;
  return 'fr';
}

/**
 * Get a translated string by dot-path key.
 * Falls back to French if the key is missing in the target locale.
 */
export function t(key: string, locale: Locale = 'fr'): string {
  const get = (obj: Record<string, any>, path: string): string | undefined => {
    const parts = path.split('.');
    let current: any = obj;
    for (const part of parts) {
      if (current == null || typeof current !== 'object') return undefined;
      current = current[part];
    }
    return typeof current === 'string' ? current : undefined;
  };

  return get(translations[locale], key) ?? get(translations.fr, key) ?? key;
}

/**
 * Build a localized path.
 * For French (default locale), no prefix is added.
 * For other locales, the prefix and translated slug are used.
 */
export function localePath(frPath: string, locale: Locale): string {
  if (locale === 'fr') return frPath;

  // Remove leading slash and split
  const clean = frPath.replace(/^\//, '');

  if (clean === '' || clean === '/') return `/${locale}`;

  // Check route map for translated slug
  const segments = clean.split('/');
  const firstSegment = segments[0];
  const map = routeMap[locale];

  if (map && firstSegment in map) {
    const translatedFirst = map[firstSegment as keyof typeof map];
    segments[0] = translatedFirst;
    return `/${locale}/${segments.join('/')}`;
  }

  return `/${locale}/${clean}`;
}

/**
 * Given a localized path and locale, return the base French path key.
 * E.g., "/en/machining" -> "usinage"
 */
export function frenchPath(localizedPath: string, locale: Locale): string {
  if (locale === 'fr') return localizedPath;

  const clean = localizedPath.replace(new RegExp(`^/${locale}/?`), '');
  if (!clean) return '/';

  const segments = clean.split('/');
  const firstSegment = segments[0];
  const reverse = reverseRouteMap[locale];

  if (reverse && firstSegment in reverse) {
    segments[0] = reverse[firstSegment as keyof typeof reverse];
    return '/' + segments.join('/');
  }

  return '/' + clean;
}

/**
 * Get all alternate URLs for a given French path (for hreflang tags).
 */
export function getAlternateUrls(frPath: string, site: string): Array<{ locale: Locale; url: string }> {
  return locales.map(locale => ({
    locale,
    url: `${site}${localePath(frPath, locale)}`,
  }));
}
