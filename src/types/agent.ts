export type NormType = 'GLOBALGAP_IFA_V6' | 'GLOBALGAP_COC_V6' | 'NORMA_ORGANICA_ECUATORIANA';

export type ComplianceLevel = 'OBLIGACION_MAYOR' | 'OBLIGACION_MENOR' | 'RECOMENDACION' | 'CRITERIO_CRITICO' | 'ARTICULO_MANDATORIO';

export type AlertSeverity = 'CRITICA' | 'MAYOR' | 'MENOR' | 'ADVERTENCIA' | 'INFORMATIVA';

export interface NormativeItem {
  id: string;
  norm: NormType;
  normName: string;
  code: string; // e.g. "FV 08.01.01", "CoC 03.02", "Art. 14 Res. 034"
  title: string;
  chapter: string;
  complianceLevel: ComplianceLevel;
  officialText: string;
  simpleExplanation: string;
  auditContextExample: string;
  commonFalsePremises: string[]; // Known false premises that producers/auditors mistakenly believe
  keywords: string[];
  officialSourceUrl: string;
  lastUpdated: string;
}

export interface FalsePremiseDetection {
  detected: boolean;
  premiseText: string;
  correction: string;
  riskDescription: string;
  severity: AlertSeverity;
  affectedNormCode: string;
}

export interface AgentAlert {
  id: string;
  type: 'PREMISA_FALSA' | 'RIESGO_NO_CONFORMIDAD_MAYOR' | 'INCONSISTENCIA_NORMATIVA' | 'DESVIACION_TRAZABILIDAD';
  severity: AlertSeverity;
  title: string;
  description: string;
  recommendation: string;
  timestamp: string;
}

export interface ExternalSourceResult {
  title: string;
  url: string;
  sourceOrg: string;
  snippet: string;
  verifiedAt: string;
  relevanceScore: number;
}

export interface AgentStepTrace {
  stepNumber: number;
  name: string;
  description: string;
  status: 'idle' | 'running' | 'completed' | 'warning' | 'error';
  toolUsed?: 'BASE_CONOCIMIENTO' | 'BUSQUEDA_EXTERNA' | 'GENERACION_DOCS' | 'SISTEMA_ALERTAS' | 'ORQUESTADOR';
  outputSnippet?: string;
  executionTimeMs?: number;
}

export interface StructuredAuditResponse {
  queryId: string;
  originalQuery: string;
  matchedNorms: NormativeItem[];
  primaryCitation: {
    norm: string;
    code: string;
    title: string;
    chapter: string;
    level: string;
    exactQuote: string;
    sourceDocument: string;
  };
  simpleExplanation: string;
  auditExample: {
    scenario: string;
    auditorAction: string;
    evidenceToReview: string[];
    potentialFinding: string;
  };
  falsePremisesAnalysis: FalsePremiseDetection[];
  alerts: AgentAlert[];
  externalReferences: ExternalSourceResult[];
  workflowTraces: AgentStepTrace[];
  generationTimestamp: string;
}

export interface PresetScenario {
  id: string;
  title: string;
  category: 'GlobalGAP IFA v6' | 'Cadena de Custodia' | 'Norma Orgánica' | 'Multi-Norma';
  query: string;
  description: string;
  containsFalsePremise: boolean;
  expectedAlertLevel: AlertSeverity;
}
