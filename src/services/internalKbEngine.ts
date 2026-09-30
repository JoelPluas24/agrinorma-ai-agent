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
      'ocultar': ['esconder', 'camuflar', 'tapar', 'fraude', 'canecas de glifosato'],
      'esconder': ['ocultar', 'camuflar', 'tapar', 'fraude'],
      'caneca': ['canecas', 'recipiente', 'envase', 'glifosato', 'agroquimico'],
      'canecas': ['caneca', 'recipiente', 'envase', 'glifosato', 'agroquimico'],
      'glifosato': ['herbicida', 'quimico', 'sintetico', 'insumo prohibido'],
      'fumigacion': ['aplicacion', 'fitosanitario', 'plaguicida', 'tratamiento', 'ropa de fumigacion'],
      'fumigar': ['aplicar', 'fitosanitario', 'tratamiento'],
      'quimico': ['sintetico', 'agroquimico', 'fitosanitario', 'sustancia'],
      'veneno': ['plaguicida', 'fitosanitario', 'quimico'],
      'transgenico': ['ogm', 'organismos geneticamente modificados', 'semilla transgenica'],
      'transgenicos': ['ogm', 'organismos geneticamente modificados'],
      'ogm': ['transgenico', 'modificacion genetica', 'material de propagacion'],
      'epp': ['equipo de proteccion personal', 'mascarilla', 'guantes', 'overol', 'proteccion', 'vestimenta', 'ropa'],
      'epi': ['equipo de proteccion personal', 'mascarilla', 'guantes', 'overol', 'proteccion', 'vestimenta', 'ropa'],
      'ropa': ['epi', 'vestimenta', 'overol', 'equipo de proteccion', 'ropa de fumigacion'],
      'vestimenta': ['ropa', 'epi', 'overol', 'equipo de proteccion'],
      'empacadora': ['empaque', 'poscosecha', 'manipulacion del producto'],
      'mascarilla': ['epp', 'equipo de proteccion', 'respirador'],
      'bano': ['inodoro', 'servicios higienicos', 'letrina', 'higiene'],
      'banos': ['inodoro', 'servicios higienicos', 'letrina', 'higiene'],
      'lavamanos': ['estacion de lavado', 'higiene', 'agua potable', 'jabon'],
      'trazabilidad': ['rastreabilidad', 'balance de masas', 'lote', 'segregacion'],
      'bodega': ['almacenamiento', 'almacen', 'deposito', 'fitosanitarios'],
      'calibracion': ['inspeccion anual', 'equipos de aplicacion', 'boquillas', 'pulverizadora'],
      'buffer': ['zona de amortiguamiento', 'barrera viva', 'linderos', 'aislamiento'],
      'amortiguamiento': ['buffer', 'barrera de proteccion', 'distancia minima'],
      'transicion': ['conversion', 'reconversion', 'periodo de conversion', 'meses', '36 meses', 'tiempo'],
      'conversion': ['transicion', 'reconversion', 'periodo de transicion', 'meses', '36 meses'],
      'joven': ['menor', '14 anos', 'trabajo infantil', 'menores de 15', 'edad minima'],
      '14': ['14 anos', 'menor de edad', 'trabajo infantil', 'menores de 15', 'joven'],
      'papa': ['padre', 'padres', 'tutor', 'autorizacion', 'permiso'],
      'autorizacion': ['permiso', 'consentimiento', 'padres', 'papa'],
      'permiso': ['autorizacion', 'consentimiento', 'padres', 'papa']
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
      const cleanCode = item.code.toLowerCase().replace(/[\s\-_.:]/g, '');
      const queryNoSpaces = cleanQuery.replace(/[\s\-_.:]/g, '');
      if (cleanCode.length > 4 && queryNoSpaces.includes(cleanCode)) {
        score += 50;
        reasons.push(`Coincidencia directa con código normativo: ${item.code}`);
      }

      // 2. Keyword matches (multi-word phrases weighted +45, single words +25)
      for (const kw of item.keywords) {
        const cleanKw = kw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (cleanQuery.includes(cleanKw)) {
          const isMultiWord = cleanKw.includes(' ');
          score += isMultiWord ? 45 : 25;
          reasons.push(`Coincidencia con término clave: "${kw}"`);
        }
      }

      // 3. Domain topic-specific boosts
      // A) Fraud / Evasion / Hiding chemicals
      if (
        (cleanQuery.includes('ocultar') || cleanQuery.includes('esconder') || cleanQuery.includes('fraude') || cleanQuery.includes('enganar')) &&
        (cleanQuery.includes('glifosato') || cleanQuery.includes('auditor') || cleanQuery.includes('quimico') || cleanQuery.includes('caneca')) &&
        item.id === 'org-ec-fraude-ocultamiento-insumos'
      ) {
        score += 95;
        reasons.push('Coincidencia temática prioritaria: Política de Integridad y Rechazo por Fraude/Evasión');
      }

      // B) Direct certification request
      if (
        (cleanQuery.includes('emite') || cleanQuery.includes('emitir') || cleanQuery.includes('dame') || cleanQuery.includes('certificame')) &&
        (cleanQuery.includes('certificado') || cleanQuery.includes('certificacion') || cleanQuery.includes('exportar manana')) &&
        item.id === 'caae-gobernanza-emision-certificados'
      ) {
        score += 95;
        reasons.push('Coincidencia temática prioritaria: Gobernanza ISO/IEC 17065 y Potestad del Comité');
      }

      // C) Glyphosate / Synthetic chemicals in organic farming
      if (
        (cleanQuery.includes('glifosato') || cleanQuery.includes('herbicida') || cleanQuery.includes('urea') || cleanQuery.includes('sintetico')) &&
        !cleanQuery.includes('ocultar') && !cleanQuery.includes('esconder') &&
        item.id === 'org-ec-art-14-prohibicion-sinteticos'
      ) {
        score += 75;
        reasons.push('Coincidencia temática prioritaria: Prohibición de Agroquímicos Sintéticos (Art. 13-15 NOE)');
      }

      // D) Transition / conversion
      if (
        (cleanQuery.includes('transicion') || cleanQuery.includes('conversion') || cleanQuery.includes('meses')) &&
        item.id === 'org-ec-art-17-transicion'
      ) {
        score += 70;
        reasons.push('Coincidencia temática prioritaria: Periodo de Transición/Conversión (Art. 17)');
      }

      // E) PPE / Clothing in packhouse
      if (
        (cleanQuery.includes('ropa') || cleanQuery.includes('vestimenta') || cleanQuery.includes('overol') || cleanQuery.includes('epi')) &&
        (cleanQuery.includes('fumiga') || cleanQuery.includes('empacadora') || cleanQuery.includes('entrar')) &&
        item.id === 'ifa6-fv-20-03-epi'
      ) {
        score += 70;
        reasons.push('Coincidencia temática prioritaria: Equipos de Protección Individual y Vestimenta (FV-GFS 20.03)');
      }

      // F) Child labor / Age 14
      if (
        (cleanQuery.includes('14') || cleanQuery.includes('menor') || cleanQuery.includes('infantil') || cleanQuery.includes('joven')) &&
        (cleanQuery.includes('trabaj') || cleanQuery.includes('empac') || cleanQuery.includes('papa') || cleanQuery.includes('autoriza')) &&
        item.id === 'ifa6-fv-02-04-trabajo-infantil'
      ) {
        score += 70;
        reasons.push('Coincidencia temática prioritaria: Prohibición de Trabajo Infantil y Edad Mínima (FV-GFS 20)');
      }

      // G) Small banana producer area (only if asking specifically about area, size, or small producer)
      if (
        (cleanQuery.includes('superficie') || cleanQuery.includes('hectarea') || cleanQuery.includes('pequeno productor') || cleanQuery.includes('monocultivo')) &&
        cleanQuery.includes('banano') &&
        item.id === 'org-ec-pequeno-productor-banano'
      ) {
        score += 50;
        reasons.push('Coincidencia temática prioritaria: Superficie Pequeño Productor de Banano (Anexo XI)');
      }

      // 4. Common false premise match
      for (const fp of item.commonFalsePremises) {
        const cleanFp = fp.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const fpTokens = cleanFp.split(/\W+/).filter(t => t.length > 3);
        const sharedTokens = tokens.filter(t => fpTokens.includes(t));
        if (sharedTokens.length >= 2) {
          score += 35;
          reasons.push(`Detección de patrón de consulta vinculado a premisas falsas registradas`);
        }
      }

      // 5. Content and Title token overlap
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

      // Only include if score is strong enough to be a meaningful match
      // (threshold raised from 10 to 25 to prevent garbage or off-topic queries from matching)
      if (score > 25) {
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
