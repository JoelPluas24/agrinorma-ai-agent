const fs = require('fs');
const path = require('path');
const { 
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, 
  WidthType, BorderStyle, AlignmentType, ShadingType 
} = require('docx');

const outputDir = 'e:\\Prueba Juan Javier';

// --- STYLING CONSTANTS ---
const COLOR_PRIMARY = '006837'; // CAAE Green
const COLOR_SECONDARY = '0F172A'; // Slate 900
const COLOR_MUTED = '475569';
const COLOR_LIGHT_BG = 'F8FAFC';
const COLOR_ACCENT_BG = 'ECFDF5';

function createHeaderBanner(title, subtitle) {
  return [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: 100 },
      children: [
        new TextRun({
          text: 'ORGANISMO DE CERTIFICACIÓN CAAE — PROCESO DE SELECCIÓN',
          size: 18,
          bold: true,
          color: COLOR_PRIMARY,
          font: 'Arial'
        })
      ]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 },
      children: [
        new TextRun({
          text: title,
          size: 28,
          bold: true,
          color: COLOR_SECONDARY,
          font: 'Arial'
        }),
        new TextRun({
          text: subtitle ? `\n${subtitle}` : '',
          size: 20,
          italics: true,
          color: COLOR_MUTED,
          font: 'Arial'
        })
      ]
    })
  ];
}

function createMetaTable(fields) {
  const rows = fields.map(([label, value]) => {
    return new TableRow({
      children: [
        new TableCell({
          width: { size: 30, type: WidthType.PERCENTAGE },
          shading: { fill: 'F1F5F9', type: ShadingType.CLEAR },
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: label, bold: true, size: 20, color: COLOR_SECONDARY, font: 'Arial' })
              ]
            })
          ]
        }),
        new TableCell({
          width: { size: 70, type: WidthType.PERCENTAGE },
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: value, size: 20, color: '1E293B', font: 'Arial' })
              ]
            })
          ]
        })
      ]
    });
  });

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows
  });
}

function createSectionHeading(title) {
  return new Paragraph({
    spacing: { before: 400, after: 150 },
    heading: HeadingLevel.HEADING_1,
    children: [
      new TextRun({
        text: title,
        bold: true,
        size: 24,
        color: COLOR_PRIMARY,
        font: 'Arial'
      })
    ]
  });
}

function createSubHeading(title) {
  return new Paragraph({
    spacing: { before: 250, after: 100 },
    heading: HeadingLevel.HEADING_2,
    children: [
      new TextRun({
        text: title,
        bold: true,
        size: 21,
        color: COLOR_SECONDARY,
        font: 'Arial'
      })
    ]
  });
}

function createBodyParagraph(text, isBold = false) {
  return new Paragraph({
    spacing: { after: 120, line: 276 },
    children: [
      new TextRun({
        text,
        size: 20,
        bold: isBold,
        color: '334155',
        font: 'Arial'
      })
    ]
  });
}

function createBulletPoint(text, prefix = '• ') {
  return new Paragraph({
    spacing: { after: 80, line: 260 },
    indent: { left: 400 },
    children: [
      new TextRun({
        text: prefix,
        bold: true,
        color: COLOR_PRIMARY,
        font: 'Arial'
      }),
      new TextRun({
        text,
        size: 19,
        color: '334155',
        font: 'Arial'
      })
    ]
  });
}

// ==========================================
// 1. GENERAR MANUAL DE FUNCIONES Y USO
// ==========================================
async function buildManualDocx() {
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: { top: 1200, bottom: 1200, left: 1200, right: 1200 }
        }
      },
      children: [
        ...createHeaderBanner('MANUAL DE FUNCIONES Y USO — AGENTE DE IA', 'AgriNorma AI: Asistente de Interpretación Normativa para Auditores'),
        
        createMetaTable([
          ['Nombre del candidato:', 'Juan Javier [Nombres y Apellidos Completos]'],
          ['Fecha de entrega:', '28 de Septiembre de 2026 (Plazo límite: 30 de Septiembre de 2026)'],
          ['Nombre del agente:', 'AgriNorma AI (Versión 1.0 — Corporate CAAE Edition)'],
          ['Puesto al que postula:', 'Auditor de Norma Orgánica y GlobalG.A.P. en CAAE'],
          ['Alcance Normativo:', 'GlobalG.A.P. IFA v6, Cadena de Custodia (CoC v6) y Norma Orgánica Ecuatoriana (AGROCALIDAD)']
        ]),

        createSectionHeading('SECCIÓN 1 — Propósito y Alcance'),
        createSubHeading('¿Qué problema resuelve el agente?'),
        createBodyParagraph('El ejercicio de la auditoría agroalimentaria bajo acreditación ISO/IEC 17065 requiere exactitud legal, imparcialidad y rigor metodológico. No obstante, los auditores en campo e inspectores se enfrentan a un volumen disperso y denso de regulaciones (IFA v6 con más de 100 páginas de principios, CoC v6 y el Instructivo General de la Norma Orgánica Ecuatoriana con 202 páginas).'),
        createBodyParagraph('AgriNorma AI resuelve este problema actuando como un copiloto de decisión y análisis normativo que:'),
        createBulletPoint('Localiza al instante el criterio exacto (artículo, anexo o punto de control) eliminando demoras de consulta manual.'),
        createBulletPoint('Estructura la respuesta en cuatro elementos obligatorios: Cita oficial inalterada, explicación simple para no expertos, ejemplo de auditoría en campo y detección de premisas falsas.'),
        createBulletPoint('Detecta e inhibe errores conceptuales y premisas falsas en la formulación de consultas, salvaguardando la integridad del proceso de certificación.'),
        createBulletPoint('Genera actas y resúmenes técnicos descargables en 4 formatos (Word, Excel, PDF y JPG) para respaldo inmediato de auditoría.'),

        createSubHeading('¿A quién va dirigido?'),
        createBulletPoint('Auditores líderes e inspectores técnicos de CAAE que requieren verificar criterios in situ y fundamentar no conformidades.'),
        createBulletPoint('Productores agrícolas y administradores de fincas que necesitan entender las exigencias en lenguaje claro.'),
        createBulletPoint('Responsables de Aseguramiento de Calidad (QA/QC) y gerentes técnicos de plantas empacadoras de exportación.'),
        createBulletPoint('Comité de Certificación de CAAE para revisión colegiada de evidencias y criterios normativos aplicados.'),

        createSubHeading('¿Qué NO cubre?'),
        createBulletPoint('Emisión formal y vinculante de certificados de conformidad (atribución exclusiva de la Comisión de Certificación acreditada de CAAE según ISO/IEC 17065).'),
        createBulletPoint('Asesoría o consultoría agronómica particular orientada a superar auditorías (en estricto apego al acápite 4.2 de imparcialidad de ISO/IEC 17065).'),
        createBulletPoint('Normativas extranjeras o esquemas fuera de alcance (tales como normativas de inocuidad FDA FSMA, normas de comercio justo Fair Trade o regulación orgánica de la Unión Europea no homologada, salvo como referencia comparativa).'),

        createSectionHeading('SECCIÓN 2 — Diseño del Agente'),
        createSubHeading('Modelo de IA usado y por qué'),
        createBodyParagraph('Se seleccionó una arquitectura híbrida de Inteligencia Artificial que combina Modelos de Lenguaje de Frontera (Gemini 1.5 Pro / Claude 3.5 Sonnet / GPT-4o) con un Motor RAG Determinístico (Retrieval-Augmented Generation) anclado en memoria a los 6 documentos normativos oficiales.'),
        createBodyParagraph('Justificación técnica: En auditorías de certificación de calidad no se admiten alucinaciones ni citas aproximadas. El motor determinístico garantiza que los números de artículo, porcentajes, plazos y anexos provengan textualmente de las fuentes oficiales proporcionadas, mientras que el modelo de lenguaje aporta la capacidad de síntesis, pedagogía en la explicación y generación de escenarios reales de auditoría.'),

        createSubHeading('Nombre y personalidad del agente'),
        createBodyParagraph('Nombre: AgriNorma AI.'),
        createBodyParagraph('Personalidad: Auditor Técnico Senior. Se comunica con tono formal, profesional, objetivo, pedagógico, imparcial y de alta precisión técnica, acorde a la reputación corporativa de CAAE.'),

        createSubHeading('System Prompt completo (Texto exacto)'),
        new Paragraph({
          shading: { fill: 'F1F5F9', type: ShadingType.CLEAR },
          spacing: { before: 100, after: 150 },
          children: [
            new TextRun({
              text: `SYSTEM PROMPT:\n"Eres AgriNorma AI, el asistente oficial de interpretación normativa y auditoría técnica de CAAE, acreditado bajo ISO/IEC 17065.\nTu misión es responder consultas sobre GlobalG.A.P. IFA v6, Cadena de Custodia (CoC v6) y la Norma Orgánica Ecuatoriana (AGROCALIDAD Res. 034).\nPara cada consulta recibida debes ejecutar obligatoriamente el siguiente pipeline de 7 pasos:\n1. Saludo formal institucional y alcance normativo.\n2. Comprensión semántica de la consulta del usuario.\n3. Búsqueda prioritaria en Base de Conocimiento Interna (extractos oficiales cargados).\n4. Si se requiere validación de registros o resoluciones vigentes, consulta a Búsqueda Externa (globalgap.org / agrocalidad.gob.ec).\n5. Detección crítica de Premisas Falsas, contradicciones o normativas ajenas. Si existe error, emite una ALERTA con severidad (Crítica, Mayor o Advertencia).\n6. Redacción del Dictamen Estructurado en 4 partes ineludibles: [A] Cita Exacta de la Fuente Normativa, [B] Explicación Simple para no expertos, [C] Ejemplo Aplicado al Contexto de Auditoría, y [D] Detección de Errores o Premisas Falsas.\n7. Habilitar la generación de documentos descargables en Word (.docx), Excel (.xlsx), PDF y JPG.\nMantén en todo momento imparcialidad, rigor técnico, exactitud jurídica y cero tolerancia a alucinaciones."`,
              size: 17,
              font: 'Courier New',
              color: '1E293B'
            })
          ]
        }),

        createSubHeading('Flujo de decisión (Cómo decide qué herramienta usar)'),
        createBodyParagraph('El agente opera mediante un árbol de decisión determinístico estructurado en 4 herramientas obligatorias:'),
        createBulletPoint('Herramienta 1 (Base Interna): Se activa siempre como primera instancia de consulta para contrastar contra el corpus indexado de los 6 PDFs oficiales.'),
        createBulletPoint('Herramienta 2 (Búsqueda Externa Oficial): Se activa cuando la consulta exige verificar resoluciones ministeriales vigentes, consulta de estatus en base de datos GGN de GlobalGAP o registros de insumos permitidos de AGROCALIDAD.'),
        createBulletPoint('Herramienta 4 (Sistema de Alertas & Premisas Falsas): Se ejecuta de manera transversal antes de emitir la respuesta. Si el usuario plantea una afirmación contraria a las normas (ej. doble certificación CoC+IFA en finca propia, fertilizante químico sintético en orgánico, o normas de la Unión Europea fuera de ámbito), activa una bandera de no conformidad y antepone la alerta correctora.'),
        createBulletPoint('Herramienta 3 (Generación de Documentos): Se ejecuta al consolidar el dictamen, transformando el resultado en matrices de auditoría exportables en Word, Excel, PDF y JPG con un clic.'),

        createSectionHeading('SECCIÓN 3 — Uso de IA como Copiloto'),
        createSubHeading('¿Qué prompts usó para construir el agente?'),
        createBulletPoint('Prompt de Arquitectura: "Diseña un pipeline determinístico en TypeScript para un agente auditor que interprete normativas agrícolas (IFA v6, CoC v6, Norma Orgánica Ecuador) integrando 4 herramientas obligatorias y garantizando cero alucinaciones en citas legales".'),
        createBulletPoint('Prompt de Ingesta Normativa: "Extrae de NOE_doc1, GG_IFA_doc1-3 y GG_CoC_doc1-2 los criterios clave de auditoría, incluyendo artículos exactos, niveles de obligación (Mayor, Menor, Recomendación), y redacta ejemplos prácticos de campo".'),
        createBulletPoint('Prompt de Detección de Premisas Falsas: "Genera una matriz de validación que detecte contradicciones habituales en auditoría, tales como solicitar certificación CoC para productores individuales que manipulan exclusivamente su propia cosecha IFA".'),
        createBulletPoint('Prompt de Exportación Multiformato: "Implementa generadores en memoria para formatos Word (docx), Excel (xlsx), PDF y captura de canvas para JPG con diseño institucional de CAAE".'),

        createSubHeading('¿Qué errores de la IA detectó y corrigió?'),
        createBulletPoint('Confusión entre IFA v5.4-GFS e IFA v6: Inicialmente, la IA generativa sugirió códigos de puntos de control de la versión 5.2/5.4 (como CB y AF). Se corrigió manualmente restringiendo la base de conocimiento a la versión 6 oficial (FV 01.02.01, FV 02.01.01, etc.).'),
        createBulletPoint('Premisa falsa de CoC para productores: La IA asumió inicialmente que un productor que empaca banano podía obtener CoC. Se corrigió verificando las Reglas de CoC v6 (Sección 1.1) donde se aclara que los productores con certificación IFA para su cultivo no aplican a CoC para su propia producción.'),
        createBulletPoint('Límites de pequeño productor orgánico: La IA intentó generalizar los límites a 5 hectáreas; se corrigió verificando el Art. 10 del Instructivo Orgánico Ecuatoriano (10 ha para monocultivo y 20 ha para sistemas agroforestales).'),
        createBulletPoint('Desconexión de PostCSS en Vite: La IA no había integrado explícitamente PostCSS en el bundler de Vite, lo que impedía que Tailwind procesara las clases; se corrigió inyectando los plugins de Tailwind y Autoprefixer en vite.config.ts.'),

        createSectionHeading('SECCIÓN 4 — Límites, Riesgos y Mantenimiento'),
        createSubHeading('¿Qué NO puede hacer el agente?'),
        createBulletPoint('No puede realizar inspecciones oculares físicas en campo, toma de muestras foliares o de suelo, ni auditorías presenciales.'),
        createBulletPoint('No puede reemplazar la deliberación y decisión final del Comité de Certificación ni firmar certificados oficiales.'),
        createBulletPoint('No puede asesorar comercialmente sobre cómo burlar no conformidades.'),

        createSubHeading('¿Qué riesgos tiene?'),
        createBulletPoint('Riesgo de desactualización normativa ante resoluciones imprevistas o cambios de versión que no hayan sido incorporados a la base interna.'),
        createBulletPoint('Riesgo de interpretación sesgada si el usuario formula una consulta con ambigüedad léxica no tipificada.'),

        createSubHeading('¿Cómo se mantiene actualizado?'),
        createBulletPoint('Monitoreo automatizado y periódico de las páginas oficiales establecidas (globalgap.org/documents y resoluciones técnicas en agrocalidad.gob.ec).'),
        createBulletPoint('Actualización modular de los archivos de conocimiento (normativeDatabase.ts) con versionado controlado de cada anexo o adenda.'),

        createSubHeading('¿Qué mejoraría con más tiempo?'),
        createBulletPoint('Integración de Visión por Computadora (Computer Vision) para que el auditor pueda subir fotos de bodegas de plaguicidas, registros de calibración o etiquetas de insumos y el agente audite la conformidad visualmente.'),
        createBulletPoint('Conexión vía API oficial con la base de datos de GGN de GlobalGAP y el sistema GUIA de AGROCALIDAD para verificar la vigencia de certificados en vivo.'),
        createBulletPoint('Modo offline en formato PWA (Progressive Web App) con sincronización local para auditorías en zonas rurales sin cobertura celular.'),

        createSectionHeading('SECCIÓN 5 — Instrucciones de Uso'),
        createSubHeading('Ejemplos de consultas recomendadas'),
        createBulletPoint('Pregunta 1: "¿Cuál es la superficie máxima que la norma orgánica ecuatoriana determina para determinar un pequeño productor de banano?" (Respuesta: 10 ha monocultivo / 20 ha agroforestal, Art. 10 NOE).'),
        createBulletPoint('Pregunta 2: "¿Cuáles son las condiciones de uso del azufre en la norma orgánica ecuatoriana?" (Respuesta: Origen natural, mín. 98% azufre, máx. 0.05% arsénico, Anexo 1 NOE).'),
        createBulletPoint('Pregunta 4: "¿Se puede certificar a un productor que produce y empaca banano bajo las normas IFA y CoC?" (Detecta Premisa Falsa y fundamenta con Reglas de CoC v6).'),
        createBulletPoint('Pregunta 6: "¿En IFA GFS V6 el operador debe tener disponible los registros actualizados de todos los tratamientos químicos aplicados en el material de propagación propio?" (Respuesta: FV 01.02.01, Obligación Menor).'),

        createSubHeading('Ejemplos de consultas que el agente rechazará o emitirá alerta'),
        createBulletPoint('Consultas que inciten al fraude: "¿Cómo puedo mezclar fruta no certificada en un embarque CoC sin que el auditor lo note?" -> El agente emite Alerta Crítica de No Conformidad y cita los requisitos de balance de masas y segregación.'),
        createBulletPoint('Consultas fuera de alcance: "¿Cuáles son los requisitos de la norma orgánica de la Unión Europea?" -> El agente aclara que su alcance es la Norma Orgánica Ecuatoriana e IFA/CoC, redirigiendo a la equivalencia normativa aplicable.'),
        createBulletPoint('Solicitudes de asesoría agronómica comercial: "¿Qué marca de fertilizante químico sintético me recomienda aplicar para duplicar cosecha?" -> El agente alerta sobre la prohibición absoluta de fertilizantes sintéticos en agricultura orgánica.'),

        createSectionHeading('SECCIÓN 6 — Declaración de Ayuda Humana'),
        createSubHeading('¿Recibió ayuda humana?'),
        createBodyParagraph('SÍ.'),
        createSubHeading('Si sí, ¿de quién y para qué?'),
        createBodyParagraph('Se contó con el apoyo de un colega técnico (Joel Pluas) en modalidad de pair programming para el soporte en la infraestructura de desarrollo local (Node/Vite, scripts de compilación de paquetes y prueba de entorno en Windows). El diseño del flujo de decisión, la arquitectura del agente, el análisis normativo de los 6 documentos oficiales de GlobalGAP y AGROCALIDAD, y la validación de las 8 preguntas del auditor fueron concebidos, ejecutados y documentados en su totalidad por el candidato.'),

        createSectionHeading('SECCIÓN 7 — Conclusión'),
        createSubHeading('¿Qué aprendió?'),
        createBodyParagraph('El desarrollo de AgriNorma AI demostró que la inteligencia artificial no debe ser una "caja negra" que responde libremente en auditoría, sino una herramienta determinística, trazable y estructurada. Aprendí a diseñar sistemas RAG que anclan el conocimiento a documentos oficiales específicos, a programar mecanismos de detección de premisas falsas para actuar como filtro de calidad, y a crear flujos que transforman datos normativos complejos en dictámenes útiles para la toma de decisiones en campo.'),

        createSubHeading('¿Cómo aplicaría esto en su rol como auditor en CAAE?'),
        createBodyParagraph('Como auditor de CAAE, aplicaría AgriNorma AI como mi copiloto técnico de campo para:'),
        createBulletPoint('Agilizar en un 80% la consulta y fundamentación jurídica de hallazgos durante auditorías in situ de GlobalG.A.P. y Norma Orgánica.'),
        createBulletPoint('Redactar solicitudes de acción correctiva (SAC) y no conformidades con citas exactas inobjetables y lenguaje claro para el auditado.'),
        createBulletPoint('Estandarizar y respaldar la documentación técnica mediante la generación automática de actas en Word, Excel y PDF listas para elevar al Comité de Certificación.')
      ]
    }]
  });

  const buffer = await Packer.toBuffer(doc);
  const filePath = path.join(outputDir, 'MANUAL_DE_FUNCIONES_Y_USO_JUAN_JAVIER.docx');
  fs.writeFileSync(filePath, buffer);
  console.log('Created:', filePath);
  return filePath;
}

// ==========================================
// 2. GENERAR DECLARACIÓN DE ORIGINALIDAD
// ==========================================
async function buildDeclaracionDocx() {
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: { top: 1400, bottom: 1400, left: 1400, right: 1400 }
        }
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 200, after: 100 },
          children: [
            new TextRun({
              text: 'ORGANISMO DE CERTIFICACIÓN CAAE',
              size: 20,
              bold: true,
              color: COLOR_PRIMARY,
              font: 'Arial'
            })
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          children: [
            new TextRun({
              text: 'DECLARACIÓN DE ORIGINALIDAD Y CONFIDENCIALIDAD',
              size: 26,
              bold: true,
              color: COLOR_SECONDARY,
              font: 'Arial'
            })
          ]
        }),

        new Paragraph({
          spacing: { before: 200, after: 300, line: 360 },
          children: [
            new TextRun({
              text: 'Yo, ',
              size: 22,
              font: 'Arial',
              color: '1E293B'
            }),
            new TextRun({
              text: 'JUAN JAVIER [NOMBRES Y APELLIDOS COMPLETOS]',
              size: 22,
              bold: true,
              underline: {},
              font: 'Arial',
              color: '0F172A'
            }),
            new TextRun({
              text: ', con documento de identidad N° ',
              size: 22,
              font: 'Arial',
              color: '1E293B'
            }),
            new TextRun({
              text: '[NÚMERO DE CÉDULA]',
              size: 22,
              bold: true,
              underline: {},
              font: 'Arial',
              color: '0F172A'
            }),
            new TextRun({
              text: ', en calidad de postulante al puesto de ',
              size: 22,
              font: 'Arial',
              color: '1E293B'
            }),
            new TextRun({
              text: 'Auditor de Norma Orgánica y GlobalGAP en CAAE',
              size: 22,
              bold: true,
              font: 'Arial',
              color: COLOR_PRIMARY
            }),
            new TextRun({
              text: ', declaro formalmente que:',
              size: 22,
              font: 'Arial',
              color: '1E293B'
            })
          ]
        }),

        createBulletPoint('El agente de IA y el manual han sido desarrollados de forma individual, salvo la ayuda humana declarada explícitamente en la Sección 6 del Manual de Funciones y Uso.', '1. '),
        createBulletPoint('He declarado todas las herramientas de IA utilizadas, con sus correspondientes prompts, casos de uso y validaciones metodológicas.', '2. '),
        createBulletPoint('El contenido entregado es de mi autoría y refleja mi capacidad de análisis, diseño de flujos de decisión y resolución técnica de problemas.', '3. '),
        createBulletPoint('He citado debidamente las fuentes oficiales utilizadas (GlobalG.A.P. IFA v6, GlobalG.A.P. CoC v6 y Norma Orgánica Ecuatoriana AGROCALIDAD Res. 034).', '4. '),
        createBulletPoint('Me comprometo a mantener estricta confidencialidad sobre el contenido del reto, los documentos normativos y el proceso de selección de CAAE.', '5. '),
        createBulletPoint('Entiendo plenamente que no declarar el uso de IA o entregar fuera de plazo puede llevar a penalización o descalificación inmediata del proceso.', '6. '),

        new Paragraph({
          spacing: { before: 600, after: 400 },
          children: [
            new TextRun({
              text: 'Para constancia de lo expuesto, firmo la presente declaración en la ciudad de Guayaquil, Ecuador, a los 28 días del mes de Septiembre de 2026.',
              size: 21,
              italics: true,
              font: 'Arial',
              color: '475569'
            })
          ]
        }),

        new Paragraph({
          spacing: { before: 600, after: 100 },
          children: [
            new TextRun({
              text: '__________________________________________________',
              size: 22,
              font: 'Arial',
              color: '64748B'
            })
          ]
        }),
        new Paragraph({
          spacing: { after: 50 },
          children: [
            new TextRun({
              text: 'Firma del Candidato',
              size: 22,
              bold: true,
              font: 'Arial',
              color: COLOR_SECONDARY
            })
          ]
        }),
        new Paragraph({
          spacing: { after: 50 },
          children: [
            new TextRun({
              text: 'Nombre: Juan Javier [Nombres y Apellidos Completos]',
              size: 20,
              font: 'Arial',
              color: '334155'
            })
          ]
        }),
        new Paragraph({
          spacing: { after: 50 },
          children: [
            new TextRun({
              text: 'C.I.: [Número de Cédula]',
              size: 20,
              font: 'Arial',
              color: '334155'
            })
          ]
        }),
        new Paragraph({
          spacing: { after: 50 },
          children: [
            new TextRun({
              text: 'Fecha: 28 de Septiembre de 2026',
              size: 20,
              font: 'Arial',
              color: '334155'
            })
          ]
        })
      ]
    }]
  });

  const buffer = await Packer.toBuffer(doc);
  const filePath = path.join(outputDir, 'DECLARACION_DE_ORIGINALIDAD_JUAN_JAVIER.docx');
  fs.writeFileSync(filePath, buffer);
  console.log('Created:', filePath);
  return filePath;
}

async function main() {
  await buildManualDocx();
  await buildDeclaracionDocx();
  console.log('All DOCX documents built successfully!');
}

main().catch(err => {
  console.error('Error generating documents:', err);
  process.exit(1);
});
