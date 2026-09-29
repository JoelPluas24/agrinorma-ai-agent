import { ExternalSourceResult } from '../types/agent';

export interface ExternalRegistry {
  id: string;
  sourceOrg: string;
  officialDomain: string;
  portalName: string;
  description: string;
  verifiedUrls: string[];
}

export const OFFICIAL_EXTERNAL_REGISTRIES: ExternalRegistry[] = [
  {
    id: 'globalgap-official',
    sourceOrg: 'GLOBALG.A.P. Secretariat / FoodPLUS GmbH',
    officialDomain: 'globalgap.org',
    portalName: 'Portal Oficial GlobalG.A.P. (Documentos IFA v6, CoC v6 y Reglas Generales OC)',
    description: 'Repositorio oficial para verificación de normas, criterios de inocuidad, glosario técnico y base de datos de productores certificados. Documentos fuente: GG_IFA_doc1.pdf (P&C FV v6.0-GFS_Ago24), GG_IFA_doc2.pdf (Reglas para OC v6.0_Ago24), GG_IFA_doc3.pdf (Reglas para Ámbito Plantas v6.0_Sep22), GG_CoC_doc1.pdf (PCCC CoC v6.1_Nov22), GG_CoC_doc2.pdf (Reglamento General CoC).',
    verifiedUrls: [
      'https://globalgap.org/',
      'https://www.globalgap.org/standards/ifa-v6/',
      'https://www.globalgap.org/standards/chain-of-custody/',
      'https://database.globalgap.org/'
    ]
  },
  {
    id: 'agrocalidad-official',
    sourceOrg: 'AGROCALIDAD — Agencia de Regulación y Control Fito y Zoosanitario del Ecuador',
    officialDomain: 'agrocalidad.gob.ec',
    portalName: 'Portal Oficial AGROCALIDAD — Dirección de Producción Orgánica',
    description: 'Autoridad Nacional Competente en Ecuador. Registro de operadores, Resoluciones 034, Instructivo General (NOE_doc1.pdf, 202 páginas) y Anexos de insumos permitidos. Contiene: Normas Generales de Producción (Art. 7-16), Producción Vegetal (Art. 17-26), Producción Animal (Art. 27-56), Procesamiento (Art. 77-89), Certificación y SIC (Art. 100-109), Anexos I-XI.',
    verifiedUrls: [
      'https://www.agrocalidad.gob.ec/',
      'https://www.agrocalidad.gob.ec/organicos/',
      'https://guia.agrocalidad.gob.ec/'
    ]
  },
  {
    id: 'caae-certificacion',
    sourceOrg: 'CAAE — Entidad Líder de Certificación Agroalimentaria y Orgánica',
    officialDomain: 'caae.es / caae.ec',
    portalName: 'Servicio de Certificación Oficial GlobalGAP, Orgánico UE y Agrocalidad',
    description: 'Organismo de Certificación internacional acreditado ISO/IEC 17065 para auditorías en fincas, cadena de custodia y equivalencias internacionales.',
    verifiedUrls: [
      'https://www.caae.es/',
      'https://www.caae.es/normas-y-protocolos/'
    ]
  },
  {
    id: 'ue-organico-eurlex',
    sourceOrg: 'Unión Europea — Comisión Europea / EUR-Lex',
    officialDomain: 'eur-lex.europa.eu',
    portalName: 'Reglamento (UE) 2018/848 del Parlamento Europeo y del Consejo',
    description: 'Norma comunitaria europea sobre producción ecológica, certificación de grupos de operadores y umbrales para pequeños productores.',
    verifiedUrls: [
      'https://eur-lex.europa.eu/eli/reg/2018/848/oj'
    ]
  }
];

export const EXTERNAL_KNOWLEDGE_SNIPPETS: Record<string, ExternalSourceResult[]> = {
  ue: [
    {
      title: 'Reglamento (UE) 2018/848 — Artículo 36: Certificación de Grupos de Operadores y Umbrales',
      url: 'https://eur-lex.europa.eu/eli/reg/2018/848/oj',
      sourceOrg: 'Unión Europea / EUR-Lex',
      snippet: 'En la normativa orgánica de la Unión Europea (Reglamento UE 2018/848, Art. 36), la definición de pequeño productor para certificación en grupo no fija un límite específico exclusivo para el cultivo de banano, sino que establece un umbral general de hasta 5 hectáreas de superficie agraria útil (SAU) o un volumen de negocios máximo de 25.000 euros anuales de producción ecológica.',
      verifiedAt: '2026-03-20',
      relevanceScore: 0.99
    }
  ],
  glifosato: [
    {
      title: 'Resolución Técnica Agrocalidad: Prohibición de Herbicidas Sintéticos en Producción Orgánica',
      url: 'https://www.agrocalidad.gob.ec/resoluciones-organicos/',
      sourceOrg: 'AGROCALIDAD Ecuador',
      snippet: 'El glifosato y sus sales son sustancias de síntesis química expresamente excluidas del Anexo I de insumos permitidos del Instructivo NOE. Su presencia o aplicación en cualquier parte de la unidad productiva (incluidos linderos) invalida la certificación orgánica conforme al Artículo 13-15 del Instructivo.',
      verifiedAt: '2026-03-15',
      relevanceScore: 0.98
    }
  ],
  azufre: [
    {
      title: 'Instructivo NOE — Anexo I y Anexo II: Azufre Elemental como Insumo Permitido',
      url: 'https://www.agrocalidad.gob.ec/organicos/',
      sourceOrg: 'AGROCALIDAD Ecuador (NOE_doc1.pdf, página 162 y 165)',
      snippet: 'Anexo I (Fertilizantes): Azufre elemental - Producto de origen natural o industrial más o menos refinado. Contenido mínimo en elementos nutrientes (porcentaje en masa): 98% S (245%: SO3).\nAnexo II (Fitosanitarios): Azufre - Fungicida, acaricida, repelente.',
      verifiedAt: '2026-03-10',
      relevanceScore: 0.99
    }
  ],
  coc: [
    {
      title: 'PCCC CoC v6.1_Nov22: Alcance de la Certificación CoC y Métodos de Segregación',
      url: 'https://globalgap.org/standards/chain-of-custody/',
      sourceOrg: 'GlobalG.A.P. FoodPLUS (GG_CoC_doc1.pdf)',
      snippet: 'Parte I del PCCC CoC establece que la certificación CoC aplica a empresas en la cadena de suministro que toman propiedad legal o control físico de productos certificados. Los productores que producen y empacan su propio producto bajo IFA no requieren CoC adicional. CoC-SC 3.1 define los métodos de segregación (permite mezcla entre certificados) y preservación de identidad (prohíbe toda mezcla). CoC-SC 4 establece que los registros de compras y ventas son Obligación Mayor.',
      verifiedAt: '2026-03-01',
      relevanceScore: 0.97
    }
  ],
  ogm: [
    {
      title: 'Instructivo NOE — Artículo 7: Prohibición de Organismos Genéticamente Modificados',
      url: 'https://www.agrocalidad.gob.ec/organicos/',
      sourceOrg: 'AGROCALIDAD Ecuador (NOE_doc1.pdf, páginas 37-38)',
      snippet: 'Artículo 7: En la producción orgánica no podrán utilizarse OGM ni productos obtenidos a partir de o mediante OGM como alimentos, piensos, semillas, plántulas, material de reproducción vegetativa, microorganismos ni animales, a excepción de medicamentos veterinarios. Los operadores deben exigir al vendedor una declaración de no-OGM conforme al modelo del Anexo 10.',
      verifiedAt: '2026-03-20',
      relevanceScore: 0.98
    }
  ],
  transicion: [
    {
      title: 'Instructivo NOE — Artículo 17: Periodos de Conversión a Producción Orgánica',
      url: 'https://www.agrocalidad.gob.ec/organicos/',
      sourceOrg: 'AGROCALIDAD Ecuador (NOE_doc1.pdf, páginas 44-45)',
      snippet: 'Artículo 17: Cultivos perennes (cacao, café, banano, frutales): mínimo 36 meses de manejo orgánico antes de la primera cosecha orgánica. Cultivos anuales o de ciclo corto: mínimo 24 meses antes de la siembra. El OC puede reconocer periodos anteriores donde no se aplicaron insumos prohibidos, con testimonio de terceros. La conversión puede ser progresiva pero no se permite alternar entre orgánico y convencional.',
      verifiedAt: '2026-03-15',
      relevanceScore: 0.97
    }
  ],
  epi: [
    {
      title: 'IFA GFS v6 — FV-GFS 20.03: Equipos de Protección Individual (EPI)',
      url: 'https://globalgap.org/standards/ifa-v6/',
      sourceOrg: 'GlobalG.A.P. FoodPLUS (GG_IFA_doc1.pdf, páginas 38-39)',
      snippet: 'FV-GFS 20.03.01 (Obligación Mayor): Los trabajadores, visitantes y subcontratistas deben llevar EPI adecuados conforme a requisitos legales e instrucciones de etiqueta. Incluye: ropa impermeable, monos, guantes de goma, mascarillas, protección respiratoria con filtros de sustitución, protección ocular y auditiva. FV-GFS 20.03.02 (Obligación Mayor): Los EPI se mantienen limpios y almacenados separados de químicos. La vestimenta protectora se lava separada de artículos personales.',
      verifiedAt: '2026-03-01',
      relevanceScore: 0.96
    }
  ],
  trazabilidad: [
    {
      title: 'IFA GFS v6 — FV-GFS 06.01: Sistema de Trazabilidad "Un Paso Adelante, Un Paso Atrás"',
      url: 'https://globalgap.org/standards/ifa-v6/',
      sourceOrg: 'GlobalG.A.P. FoodPLUS (GG_IFA_doc1.pdf, página 13)',
      snippet: 'FV-GFS 06.01 (Obligación Mayor): Sistema de identificación y trazabilidad documentado que permite rastrear productos hacia atrás (finca/proveedor) y hacia adelante (cliente inmediato). La información de cosecha debe vincular un lote con los registros de producción. Se requiere verificación anual del sistema mediante recuperación real o simulacro de recuperación y retirada.',
      verifiedAt: '2026-03-01',
      relevanceScore: 0.96
    }
  ],
  trabajo_infantil: [
    {
      title: 'IFA GFS v6 — FV-GFS 20: Prohibición de Trabajo Infantil',
      url: 'https://globalgap.org/standards/ifa-v6/',
      sourceOrg: 'GlobalG.A.P. FoodPLUS (GG_IFA_doc1.pdf, página 34)',
      snippet: 'FV-GFS 20 (Salud, Seguridad y Bienestar de los Trabajadores): La empresa no debe emplear ni utilizar trabajo infantil bajo ninguna circunstancia. Edad mínima de admisión al empleo: 15 años. Trabajadores jóvenes (15-18 años) no deben realizar trabajos peligrosos. El consentimiento de los padres no exonera a la empresa. Evaluación de riesgos laborales obligatoria y actualizable anualmente.',
      verifiedAt: '2026-03-01',
      relevanceScore: 0.98
    }
  ],
  auditoria_duracion: [
    {
      title: 'Reglas para Ámbito Plantas v6 — Sección 3.3: Duración de la Auditoría de Finca',
      url: 'https://globalgap.org/standards/ifa-v6/',
      sourceOrg: 'GlobalG.A.P. FoodPLUS (GG_IFA_doc3.pdf, página 8)',
      snippet: 'Sección 3.3: Duración habitual de la auditoría IFA ámbito plantas: entre 3 y 8 horas en sitio (productor individual Opción 1 sin SGC). Mínimo 3 horas para circunstancias más sencillas. Para grupo Opción 2 o multisitio con SGC: al menos 2 horas por miembro/sitio. Factores que aumentan duración: auditoría inicial, nuevos productos, almacenamiento, manipulación del producto, múltiples sitios, subcontratistas.',
      verifiedAt: '2026-03-01',
      relevanceScore: 0.95
    }
  ]
};
