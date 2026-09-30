import { AgentAlert, AlertSeverity, FalsePremiseDetection, NormativeItem } from '../types/agent';

export class AlertEngine {
  /**
   * Tool 4: Sistema de Alertas
   * Evaluates queries for false premises, regulatory inconsistencies, and critical audit non-compliances.
   */
  public static evaluateQuery(
    query: string,
    matchedNorm: NormativeItem
  ): {
    falsePremises: FalsePremiseDetection[];
    alerts: AgentAlert[];
  } {
    const cleanQuery = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const falsePremises: FalsePremiseDetection[] = [];
    const alerts: AgentAlert[] = [];

    // Rule 1: Question 4 - Dual certification IFA and CoC for a producer-packer of bananas
    if (
      (cleanQuery.includes('produce y empaca') || (cleanQuery.includes('productor') && cleanQuery.includes('empaca'))) &&
      (cleanQuery.includes('ifa') && cleanQuery.includes('coc'))
    ) {
      falsePremises.push({
        detected: true,
        premiseText: 'Premisa errónea: "Un productor que produce y empaca su propio banano debe o puede certificarse bajo las normas IFA y CoC simultáneamente."',
        correction: 'No. Los requisitos de trazabilidad y segregación para los productores que participan en la propiedad o en la producción paralela de productos certificados y no certificados ya están incluidos en el ámbito de la certificación IFA.',
        riskDescription: 'Inconsistencia de alcance: CoC no es aplicable a productores para su propia cosecha. Solicitar CoC generaría una duplicidad innecesaria y no conforme con el Reglamento General de GlobalG.A.P.',
        severity: 'MAYOR',
        affectedNormCode: 'Reglamento CoC / Ámbito IFA'
      });

      alerts.push({
        id: `alert-${Date.now()}-coc-ifa`,
        type: 'INCONSISTENCIA_NORMATIVA',
        severity: 'MAYOR',
        title: '⚠️ ALERTA DE ALCANCE: Improcedencia de Doble Certificación IFA + CoC',
        description: 'No se puede certificar a un productor que produce y empaca banano bajo ambas normas. La norma IFA ya cubre de forma integral la manipulación, empaque y segregación en finca.',
        recommendation: 'Mantener la certificación bajo el ámbito de GlobalG.A.P. IFA (Opción 1 o 2). Reservar Cadena de Custodia (CoC) únicamente para comercializadoras o empacadoras que adquieran fruta de terceros.',
        timestamp: new Date().toLocaleTimeString('es-EC')
      });
    }

    // Rule 0: Fraud, evasion, hiding chemicals or tampering records
    if (
      (cleanQuery.includes('ocultar') || cleanQuery.includes('esconder') || cleanQuery.includes('falsear') || cleanQuery.includes('adulterar') || cleanQuery.includes('enganar') || cleanQuery.includes('trampa')) &&
      (cleanQuery.includes('glifosato') || cleanQuery.includes('quimico') || cleanQuery.includes('caneca') || cleanQuery.includes('auditor') || cleanQuery.includes('registro') || cleanQuery.includes('insumo'))
    ) {
      falsePremises.push({
        detected: true,
        premiseText: 'Premisa fraudulenta e ilícita: "Se pueden o deben ocultar canecas de glifosato o agroquímicos antes de que llegue el auditor para aprobar la inspección."',
        correction: 'La Norma Orgánica Ecuatoriana (Res. 034 de Agrocalidad) y el Reglamento General de GlobalG.A.P. establecen la prohibición absoluta de glifosato y tipifican la ocultación deliberada de insumos como fraude flagrante e intento de engaño al Organismo de Certificación CAAE.',
        riskDescription: 'No Conformidad Crítica Insubsanable. Supone la terminación fulminante de la auditoría, la pérdida irrevocable del estatus orgánico/GlobalGAP y la notificación obligatoria a AGROCALIDAD para inicio de sumario sancionatorio legal.',
        severity: 'CRITICA',
        affectedNormCode: 'Res. 034 Arts. 13-15 / Código de Integridad CAAE'
      });

      alerts.push({
        id: `alert-${Date.now()}-fraude-critico`,
        type: 'PREMISA_FALSA',
        severity: 'CRITICA',
        title: '🚨 ALERTA CRÍTICA: Intento de Ocultación de Insumos Prohibidos y Fraude de Auditoría',
        description: 'La consulta solicita métodos para ocultar recipientes de glifosato ante la inspección de auditoría. Este acto constituye fraude flagrante contra las normas de certificación agroalimentaria.',
        recommendation: 'Rechazar tajantemente la solicitud. El personal auditado debe entregar un inventario transparente y fidedigno. Todo hallazgo de glifosato oculto acarrea suspensión o revocación inmediata.',
        timestamp: new Date().toLocaleTimeString('es-EC')
      });
    }

    // Rule Direct Certification: Extralimitation
    if (
      (cleanQuery.includes('emite') || cleanQuery.includes('emitir') || cleanQuery.includes('dame') || cleanQuery.includes('certificame')) &&
      (cleanQuery.includes('certificado') || cleanQuery.includes('certificacion') || cleanQuery.includes('exportar manana'))
    ) {
      alerts.push({
        id: `alert-${Date.now()}-direct-cert`,
        type: 'INCONSISTENCIA_NORMATIVA',
        severity: 'MAYOR',
        title: '⚠️ ADVERTENCIA DE GOBERNANZA: Emisión de Certificados No Delegable',
        description: 'La emisión formal de certificados es potestad exclusiva e indelegable del Comité de Decisión de Certificación de CAAE bajo la norma internacional ISO/IEC 17065.',
        recommendation: 'Completar el proceso formal de auditoría in situ, subsanar las No Conformidades y aguardar la resolución técnica del Comité de Certificación.',
        timestamp: new Date().toLocaleTimeString('es-EC')
      });
    }

    // Rule 2: Glyphosate or synthetic chemicals in organic farming
    if (
      (cleanQuery.includes('glifosato') || cleanQuery.includes('herbicida') || cleanQuery.includes('paraquat') || cleanQuery.includes('urea')) &&
      (matchedNorm.norm === 'NORMA_ORGANICA_ECUATORIANA' || cleanQuery.includes('organico') || cleanQuery.includes('organica') || cleanQuery.includes('borde') || cleanQuery.includes('finca') || cleanQuery.includes('cultivo')) &&
      !cleanQuery.includes('ocultar') && !cleanQuery.includes('esconder')
    ) {
      falsePremises.push({
        detected: true,
        premiseText: 'Premisa errónea: "Se puede usar o tener glifosato / agroquímicos sintéticos en la producción orgánica (en bordes, zanjas o cultivo)."',
        correction: 'La Norma Orgánica Ecuatoriana (Res. 034 de Agrocalidad, Arts. 13 y 14) prohíbe de forma total el ingreso, almacenamiento y uso de sustancias de síntesis química en cualquier área dentro del perímetro de la unidad productiva registrada, incluidos linderos, zanjas y vías de acceso.',
        riskDescription: 'Riesgo crítico de pérdida fulminante de la certificación orgánica de la finca completa y sanción legal de Agrocalidad por contaminación intencional.',
        severity: 'CRITICA',
        affectedNormCode: 'Art. 13-14 Res. 034'
      });

      alerts.push({
        id: `alert-${Date.now()}-glifosato-critico`,
        type: 'PREMISA_FALSA',
        severity: 'CRITICA',
        title: '🚨 ALERTA CRÍTICA: Prohibición Absoluta de Glifosato en Producción Orgánica',
        description: 'La consulta plantea el uso o presencia de glifosato/herbicidas sintéticos. Este acto constituye causal de descertificación inmediata.',
        recommendation: 'Detener de inmediato cualquier uso de herbicidas sintéticos. Utilice métodos mecánicos (desbrozadora, machete) o coberturas vegetales vivas aprobadas en el Anexo 1 de Agrocalidad.',
        timestamp: new Date().toLocaleTimeString('es-EC')
      });
    }

    // Rule 3: Child labor under 15 with parent consent in GlobalGAP IFA v6
    if (
      (cleanQuery.includes('14') || cleanQuery.includes('menor') || cleanQuery.includes('infantil') || cleanQuery.includes('joven')) &&
      (cleanQuery.includes('permiso') || cleanQuery.includes('padres') || cleanQuery.includes('papa') || cleanQuery.includes('mama') || cleanQuery.includes('autorizacion') || cleanQuery.includes('vacaciones') || cleanQuery.includes('familiar') || cleanQuery.includes('trabajar') || cleanQuery.includes('empacando'))
    ) {
      falsePremises.push({
        detected: true,
        premiseText: 'Premisa errónea: "Es legal que un joven de 14 años trabaje en labores de campo o empaque si cuenta con permiso o autorización firmada de sus padres."',
        correction: 'GlobalG.A.P. IFA v6 (FV-GFS 20) y el Convenio 138 de la OIT establecen que la edad mínima de admisión al empleo en explotaciones comerciales es de 15 años cumplidos. Una carta, permiso o autorización de los padres NO exonera a la empresa de la prohibición de trabajo infantil.',
        riskDescription: 'No Conformidad Mayor que paraliza el proceso de auditoría y genera reporte inmediato al Comité de Integridad de GlobalG.A.P. y Ministerio del Trabajo.',
        severity: 'CRITICA',
        affectedNormCode: 'FV-GFS 20'
      });

      alerts.push({
        id: `alert-${Date.now()}-2`,
        type: 'PREMISA_FALSA',
        severity: 'CRITICA',
        title: '🚨 ALERTA CRÍTICA: Detección de Trabajo Infantil No Conforme (IFA v6)',
        description: 'La autorización de los progenitores no convalida la vinculación laboral de menores de 15 años en actividades de cosecha o empaque agrícola comercial.',
        recommendation: 'No contratar bajo ninguna modalidad a menores de 15 años. Para jóvenes entre 15 y 17 años, verificar contrato legal de aprendizaje juvenil sin labores peligrosas ni nocturnas.',
        timestamp: new Date().toLocaleTimeString('es-EC')
      });
    }

    // Rule 5: PPE / Fumigation clothing entering packhouse
    if (
      (cleanQuery.includes('ropa') || cleanQuery.includes('epi') || cleanQuery.includes('overol') || cleanQuery.includes('fumiga')) &&
      (cleanQuery.includes('empacadora') || cleanQuery.includes('entrar') || cleanQuery.includes('poscosecha') || cleanQuery.includes('manipulacion'))
    ) {
      falsePremises.push({
        detected: true,
        premiseText: 'Premisa errónea: "Los trabajadores pueden entrar a la empacadora de fruta con la vestimenta o ropa de fumigación si ya se secó."',
        correction: 'GlobalG.A.P. IFA v6 (criterio FV-GFS 20.03.02) prohíbe terminantemente ingresar con ropa o equipos de protección individual (EPI) utilizados en aplicaciones de plaguicidas a las áreas de empaque o poscosecha. La ropa protectora debe lavarse y guardarse en un lugar separado y exclusivo para evitar contaminación cruzada de la fruta.',
        riskDescription: 'No Conformidad Mayor inmediata por riesgo inminente de contaminación química cruzada directa sobre el producto fresco cosechado.',
        severity: 'MAYOR',
        affectedNormCode: 'FV-GFS 20.03.02'
      });

      alerts.push({
        id: `alert-${Date.now()}-epi-empacadora`,
        type: 'PREMISA_FALSA',
        severity: 'MAYOR',
        title: '⚠️ ALERTA DE BIOSEGURIDAD: Prohibición de Ropa de Fumigación en Empacadora',
        description: 'La ropa de aplicación fitosanitaria nunca debe ingresar a áreas de empaque, almacenamiento o poscosecha, sin importar si está seca.',
        recommendation: 'Exigir cambio completo de vestimenta antes de que el personal ingrese a la empacadora. Disponer de casilleros y áreas de lavado independientes.',
        timestamp: new Date().toLocaleTimeString('es-EC')
      });
    }

    // Rule 4: Mixing certified and non-certified goods in same pallet with tape in CoC v6
    if (
      (cleanQuery.includes('pallet') || cleanQuery.includes('estibar') || cleanQuery.includes('mezcl')) &&
      (cleanQuery.includes('convencional') || cleanQuery.includes('no certificado') || cleanQuery.includes('cinta'))
    ) {
      falsePremises.push({
        detected: true,
        premiseText: 'Premisa errónea: "Se pueden consolidar cajas certificadas y convencionales en el mismo pallet físico marcándolas con una cinta adhesiva para ahorrar flete."',
        correction: 'GlobalG.A.P. Cadena de Custodia CoC v6 (Sección 3.1) prohíbe la estiba mixta no segregada en una misma unidad de carga (pallet) a menos que exista un sistema de barrera física inviolable y validado en el procedimiento de segregación de la planta.',
        riskDescription: 'No Conformidad Mayor por riesgo de contaminación cruzada y sustitución indebida en el punto de destino comercial.',
        severity: 'MAYOR',
        affectedNormCode: 'CoC 03.01'
      });

      alerts.push({
        id: `alert-${Date.now()}-3`,
        type: 'INCONSISTENCIA_NORMATIVA',
        severity: 'MAYOR',
        title: '⚠️ ALERTA MAYOR: Pérdida de Integridad en Cadena de Custodia',
        description: 'La consolidación de productos certificados con convencionales en un pallet unitario sin barrera certificada viola el principio de segregación física.',
        recommendation: 'Paletizar en unidades completas y separadas el producto certificado del no certificado, con rotulación y código CoC en al menos dos caras del pallet.',
        timestamp: new Date().toLocaleTimeString('es-EC')
      });
    }

    // If no specific false premise was detected, generate standard compliance advisory (unless special cases or alerts present)
    const isSpecialCase = 
      matchedNorm.id === 'fuera-de-alcance' || 
      matchedNorm.id === 'org-ec-fraude-ocultamiento-insumos' || 
      matchedNorm.id === 'caae-gobernanza-emision-certificados';

    if (falsePremises.length === 0 && !isSpecialCase && alerts.length === 0) {
      alerts.push({
        id: `alert-${Date.now()}-info`,
        type: 'INCONSISTENCIA_NORMATIVA',
        severity: 'INFORMATIVA',
        title: '✅ DICTAMEN DE CONFORMIDAD: Verificación Técnica Aprobada',
        description: 'La consulta se formula sobre bases normativas válidas conforme a los reglamentos oficiales vigentes.',
        recommendation: 'Consulte el informe estructurado a continuación para revisar la cita formal, procedimiento de auditoría y registros obligatorios.',
        timestamp: new Date().toLocaleTimeString('es-EC')
      });
    }

    return { falsePremises, alerts };
  }
}
