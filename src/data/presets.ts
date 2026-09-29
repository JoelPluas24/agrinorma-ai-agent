import { PresetScenario } from '../types/agent';

export const PRESET_AUDIT_SCENARIOS: PresetScenario[] = [
  {
    id: 'test-1-superficie-banano-ec',
    title: 'Pregunta 1: Superficie pequeña producción banano (Ecuador)',
    category: 'Norma Orgánica',
    description: 'Pregunta de auditor: Superficie máxima para determinar pequeño productor de banano en norma orgánica ecuatoriana.',
    query: '¿Cuál es la superficie máxima que la norma orgánica ecuatoriana determina para determinar un pequeño productor de banano?',
    containsFalsePremise: false,
    expectedAlertLevel: 'INFORMATIVA'
  },
  {
    id: 'test-2-condiciones-azufre-ec',
    title: 'Pregunta 2: Condiciones de uso del azufre (Ecuador)',
    category: 'Norma Orgánica',
    description: 'Pregunta de auditor: Condiciones y pureza de uso del azufre en la norma orgánica ecuatoriana.',
    query: '¿Cuáles son las condiciones de uso del azufre en la norma orgánica ecuatoriana?',
    containsFalsePremise: false,
    expectedAlertLevel: 'INFORMATIVA'
  },
  {
    id: 'test-3-superficie-banano-ue',
    title: 'Pregunta 3: Búsqueda Externa — Banano en Unión Europea',
    category: 'Multi-Norma',
    description: 'Pregunta de auditor: Requiere activar la Herramienta 2 (Búsqueda Externa) al no estar en documentos internos.',
    query: '¿Cuál es la superficie máxima que la norma orgánica de la Unión Europea determina para determinar un pequeño productor de banano?',
    containsFalsePremise: false,
    expectedAlertLevel: 'INFORMATIVA'
  },
  {
    id: 'test-4-productor-ifa-y-coc',
    title: 'Pregunta 4: Falsa Premisa — Productor bajo IFA y CoC',
    category: 'Cadena de Custodia',
    description: 'Pregunta de auditor: Compatibilidad y reglas de alcance entre IFA y CoC para un productor de banano.',
    query: '¿Se puede certificar a un productor que produce y empaca banano bajo las normas IFA y CoC?',
    containsFalsePremise: true,
    expectedAlertLevel: 'MAYOR'
  },
  {
    id: 'test-5-coc-registros-compra-ventas',
    title: 'Pregunta 5: CoC registros de compras y ventas',
    category: 'Cadena de Custodia',
    description: 'Pregunta de auditor: Obligatoriedad de registros de compras y ventas en Cadena de Custodia.',
    query: '¿En CoC la empresa debe mantener registros precisos de compra y ventas?',
    containsFalsePremise: false,
    expectedAlertLevel: 'INFORMATIVA'
  },
  {
    id: 'test-6-ifa-gfs-tratamiento-quimico',
    title: 'Pregunta 6: IFA GFS v6 químicos en propagación propia',
    category: 'GlobalGAP IFA v6',
    description: 'Pregunta de auditor: Registros de tratamientos químicos en material de propagación propio.',
    query: '¿En IFA GFS V6 el operador debe tener disponible los registros actualizados de todos los tratamientos químicos aplicados en el material de propagación propio?',
    containsFalsePremise: false,
    expectedAlertLevel: 'INFORMATIVA'
  },
  {
    id: 'test-7-auditorias-acompanamiento-oc',
    title: 'Pregunta 7: Competencia de auditor en Opción 1',
    category: 'GlobalGAP IFA v6',
    description: 'Pregunta de auditor: Aceptabilidad de auditorías de acompañamiento para mantener competencia.',
    query: '¿Las auditorias de acompañamiento de la finca realizadas por el OC pueden ser consideradas aceptables para mantener la competencia de un auditor del OC de la finca globalgap opción 1?',
    containsFalsePremise: false,
    expectedAlertLevel: 'INFORMATIVA'
  },
  {
    id: 'test-8-manipulacion-del-producto-plantas',
    title: 'Pregunta 8: Qué incluye la manipulación del producto',
    category: 'GlobalGAP IFA v6',
    description: 'Pregunta de auditor: Definición y alcance de manipulación del producto en el ámbito de plantas.',
    query: '¿En el ámbito de plantas qué incluye la manipulación del producto?',
    containsFalsePremise: false,
    expectedAlertLevel: 'INFORMATIVA'
  }
];
