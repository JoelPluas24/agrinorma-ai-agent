import { NORMATIVE_DATABASE } from '../data/normativeDatabase';
import { NormativeItem } from '../types/agent';

export interface KbSearchResult {
  item: NormativeItem;
  score: number;
  matchReason: string;
}

export class InternalKbEngine {
  /**
   * Tool 1: Base de conocimiento interna
   * Searches loaded official normative documents for GlobalGAP IFA v6, CoC v6, and Ecuadorian Organic Standard.
   */
  public static search(query: string, targetNorm?: string): KbSearchResult[] {
    const cleanQuery = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const tokens = cleanQuery.split(/\W+/).filter(t => t.length > 2);

    // Agricultural technical synonym expansion map
    const SYNONYM_MAP: Record<string, string[]> = {
      'fumigacion': ['aplicacion', 'fitosanitario', 'plaguicida', 'tratamiento'],
      'fumigar': ['aplicar', 'fitosanitario', 'tratamiento'],
      'quimico': ['sintetico', 'agroquimico', 'fitosanitario', 'sustancia'],
      'veneno': ['plaguicida', 'fitosanitario', 'quimico'],
      'transgenico': ['ogm', 'organismos geneticamente modificados', 'semilla transgenica'],
      'transgenicos': ['ogm', 'organismos geneticamente modificados'],
      'ogm': ['transgenico', 'modificacion genetica', 'material de propagacion'],
      'epp': ['equipo de proteccion personal', 'mascarilla', 'guantes', 'overol', 'proteccion'],
      'mascarilla': ['epp', 'equipo de proteccion', 'respirador'],
      'bano': ['inodoro', 'servicios higienicos', 'letrina', 'higiene'],
      'banos': ['inodoro', 'servicios higienicos', 'letrina', 'higiene'],
      'lavamanos': ['estacion de lavado', 'higiene', 'agua potable', 'jabon'],
      'trazabilidad': ['rastreabilidad', 'balance de masas', 'lote', 'segregacion'],
      'bodega': ['almacenamiento', 'almacen', 'deposito', 'fitosanitarios'],
      'calibracion': ['inspeccion anual', 'equipos de aplicacion', 'boquillas', 'pulverizadora'],
      'buffer': ['zona de amortiguamiento', 'barrera viva', 'linderos', 'aislamiento'],
      'amortiguamiento': ['buffer', 'barrera de proteccion', 'distancia minima'],
      'transicion': ['periodo de conversion', 'reconversion', 'tiempo de espera']
    };

    const expandedTokens = [...tokens];
    for (const token of tokens) {
      if (SYNONYM_MAP[token]) {
        expandedTokens.push(...SYNONYM_MAP[token]);
      }
    }

    const results: KbSearchResult[] = [];

    for (const item of NORMATIVE_DATABASE) {
      if (targetNorm && item.norm !== targetNorm) {
        continue;
      }

      let score = 0;
      const reasons: string[] = [];

      // 1. Direct code match (e.g. "FV 08.01", "Art. 14", "CoC 03")
      const cleanCode = item.code.toLowerCase().replace(/\s+/g, '');
      const queryNoSpaces = cleanQuery.replace(/\s+/g, '');
      if (queryNoSpaces.includes(cleanCode) || tokens.some(t => item.code.toLowerCase().includes(t))) {
        score += 50;
        reasons.push(`Coincidencia directa con código normativo: ${item.code}`);
      }

      // 2. Keyword matches
      for (const kw of item.keywords) {
        const cleanKw = kw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (cleanQuery.includes(cleanKw)) {
          score += 20;
          reasons.push(`Coincidencia con término clave: "${kw}"`);
        }
      }

      // 3. Common false premise match
      for (const fp of item.commonFalsePremises) {
        const cleanFp = fp.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const fpTokens = cleanFp.split(/\W+/).filter(t => t.length > 3);
        const sharedTokens = tokens.filter(t => fpTokens.includes(t));
        if (sharedTokens.length >= 2) {
          score += 35;
          reasons.push(`Detección de patrón de consulta vinculado a premisas falsas registradas`);
        }
      }

      // 4. Content and Title token overlap
      const searchableBody = `${item.title} ${item.chapter} ${item.officialText} ${item.simpleExplanation}`
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      let tokenMatches = 0;
      const uniqueTokens = Array.from(new Set(expandedTokens));
      for (const token of uniqueTokens) {
        if (searchableBody.includes(token)) {
          tokenMatches++;
        }
      }

      if (tokenMatches > 0) {
        score += Math.min(tokenMatches * 6, 45);
        reasons.push(`Coincidencia en texto oficial y terminología técnica (${tokenMatches} términos)`);
      }

      if (score > 10) {
        results.push({
          item,
          score,
          matchReason: reasons.slice(0, 3).join('; ')
        });
      }
    }

    // Sort by descending score
    results.sort((a, b) => b.score - a.score);

    // If no strong match, provide the best fallback item based on generic category
    if (results.length === 0) {
      // Fallback: check if query mentions organic, coc, or ifa
      if (cleanQuery.includes('organico') || cleanQuery.includes('ecolog') || cleanQuery.includes('agrocalidad')) {
        const item = NORMATIVE_DATABASE.find(i => i.norm === 'NORMA_ORGANICA_ECUATORIANA') || NORMATIVE_DATABASE[0];
        results.push({ item, score: 15, matchReason: 'Referencia general a normativa orgánica ecuatoriana' });
      } else if (cleanQuery.includes('cadena') || cleanQuery.includes('coc') || cleanQuery.includes('custodia')) {
        const item = NORMATIVE_DATABASE.find(i => i.norm === 'GLOBALGAP_COC_V6') || NORMATIVE_DATABASE[0];
        results.push({ item, score: 15, matchReason: 'Referencia general a Cadena de Custodia CoC v6' });
      } else {
        const item = NORMATIVE_DATABASE.find(i => i.norm === 'GLOBALGAP_IFA_V6') || NORMATIVE_DATABASE[0];
        results.push({ item, score: 15, matchReason: 'Referencia general a GlobalG.A.P. IFA v6' });
      }
    }

    return results;
  }

  public static getAllItems(): NormativeItem[] {
    return NORMATIVE_DATABASE;
  }
}
