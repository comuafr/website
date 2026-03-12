export type Locale = 'fr' | 'en' | 'de' | 'es' | 'it';

export const routeMap: Record<Locale, Record<string, string>> = {
  fr: {
    usinage: 'usinage',
    soudure: 'soudure',
    poterie: 'poterie',
    ingenierie: 'ingenierie',
    contact: 'contact',
    'mentions-legales': 'mentions-legales',
    'politique-retours': 'politique-retours',
  },
  en: {
    usinage: 'machining',
    soudure: 'welding',
    poterie: 'pottery',
    ingenierie: 'engineering',
    contact: 'contact',
    'mentions-legales': 'legal-notice',
    'politique-retours': 'return-policy',
  },
  de: {
    usinage: 'zerspanung',
    soudure: 'schweissen',
    poterie: 'toepferei',
    ingenierie: 'ingenieurwesen',
    contact: 'kontakt',
    'mentions-legales': 'impressum',
    'politique-retours': 'rueckgaberichtlinie',
  },
  es: {
    usinage: 'mecanizado',
    soudure: 'soldadura',
    poterie: 'alfareria',
    ingenierie: 'ingenieria',
    contact: 'contacto',
    'mentions-legales': 'aviso-legal',
    'politique-retours': 'politica-devoluciones',
  },
  it: {
    usinage: 'lavorazione',
    soudure: 'saldatura',
    poterie: 'ceramica',
    ingenierie: 'ingegneria',
    contact: 'contatto',
    'mentions-legales': 'note-legali',
    'politique-retours': 'politica-resi',
  },
};

// Build reverse maps (translated slug -> french slug) for each locale
function buildReverse(map: Record<string, string>): Record<string, string> {
  const reverse: Record<string, string> = {};
  for (const [fr, translated] of Object.entries(map)) {
    reverse[translated] = fr;
  }
  return reverse;
}

export const reverseRouteMap: Record<Locale, Record<string, string>> = {
  fr: buildReverse(routeMap.fr),
  en: buildReverse(routeMap.en),
  de: buildReverse(routeMap.de),
  es: buildReverse(routeMap.es),
  it: buildReverse(routeMap.it),
};

/**
 * Map activity IDs to their route keys.
 * Activity IDs in content collections use French names.
 */
export const activityRouteKeys: Record<string, string> = {
  usinage: 'usinage',
  soudure: 'soudure',
  poterie: 'poterie',
  ingenierie: 'ingenierie',
};
