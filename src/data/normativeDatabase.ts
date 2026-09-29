import { NormativeItem } from '../types/agent';

export const NORMATIVE_DATABASE: NormativeItem[] = [
  // =========================================================================
  // 1. NORMA ORGÁNICA ECUATORIANA (AGROCALIDAD - Instructivo NOE)
  //    Fuente: NOE_doc1.pdf (202 páginas)
  // =========================================================================
  {
    id: 'org-ec-pequeno-productor-banano',
    norm: 'NORMA_ORGANICA_ECUATORIANA',
    normName: 'Norma Orgánica Ecuatoriana (AGROCALIDAD / Instructivo NOE)',
    code: 'Anexo XI – Tabla 1: Definición de pequeños productores por tipo de cultivo y área',
    chapter: 'Capítulo VI: Certificación Grupal y Sistema Interno de Control',
    title: 'Superficie Máxima para Determinar Pequeño Productor de Banano',
    complianceLevel: 'ARTICULO_MANDATORIO',
    officialText: 'Anexo XI, Tabla 1 – Definición de pequeños productores por tipo de cultivo y área:\n• Musáceas en monocultivo: Hasta 10 Ha\n• Musáceas en sistemas agroforestales: Hasta 20 Ha, densidad de plantación máxima de 600 p/Ha\n• Café: Hasta 10 Ha\n• Cacao nacional: Hasta 10 Ha\n• Cacao CCN51: Hasta 5 Ha\n• Cereales: Hasta 2,5 Ha\n• Hortalizas: Hasta 0,75 Ha\n• Plantas medicinales cultivadas/hierbas aromáticas y especias: Hasta 0,6 Ha\n• Caña de azúcar: Hasta 5 Ha\n• Mango: Hasta 5 Ha',
    simpleExplanation: '10 hectáreas en monocultivo y 20 hectáreas en sistemas agroforestales. La norma orgánica ecuatoriana (Instructivo NOE, Anexo XI, Tabla 1) determina que para el cultivo de musáceas (banano), la superficie máxima para clasificar como pequeño productor en certificación grupal con Sistema Interno de Control (SIC) es de hasta 10 Ha en monocultivo, o hasta 20 Ha en sistemas agroforestales con una densidad de plantación máxima de 600 plantas por hectárea.',
    auditContextExample: 'El auditor del Organismo de Certificación (OC) revisa el listado del Sistema Interno de Control (SIC) de una asociación de bananeros orgánicos en El Oro. Un miembro registrado posee 14 hectáreas dedicadas exclusivamente a banano en monocultivo. El auditor observa que excede el límite de 10 ha para monocultivo establecido en el Anexo XI y levanta una No Conformidad, obligando al productor a certificarse como operador individual independiente.',
    commonFalsePremises: [
      'Un pequeño productor de banano puede tener hasta 50 hectáreas si los ingresos son bajos.',
      'El límite de 10 hectáreas aplica igual para sistemas agroforestales que para monocultivo.',
      'No existe límite de hectáreas para banano si el productor pertenece a una cooperativa.'
    ],
    keywords: [
      'superficie maxima', 'pequeno productor', 'pequeno productor banano', 'hectareas banano', '10 hectareas', '20 hectareas',
      'monocultivo', 'agroforestal', 'sistemas agroforestales', 'tamano pequeno productor', 'extension maxima',
      'musaceas', 'anexo xi', 'tabla 1', 'certificacion grupal', 'sic', 'densidad 600'
    ],
    officialSourceUrl: 'https://www.agrocalidad.gob.ec/organicos/',
    lastUpdated: '2026'
  },
  {
    id: 'org-ec-condiciones-azufre',
    norm: 'NORMA_ORGANICA_ECUATORIANA',
    normName: 'Norma Orgánica Ecuatoriana (AGROCALIDAD / Instructivo NOE)',
    code: 'Anexo I (Fertilizantes) y Anexo II (Fitosanitarios) del Instructivo NOE',
    chapter: 'Anexos Técnicos: Insumos Permitidos para Nutrición y Protección Fitosanitaria',
    title: 'Condiciones de Uso del Azufre en la Norma Orgánica Ecuatoriana',
    complianceLevel: 'ARTICULO_MANDATORIO',
    officialText: 'ANEXO I – Fertilizantes y acondicionadores del suelo:\nAzufre elemental: Producto de origen natural o industrial más o menos refinado. Contenido mínimo en elementos nutrientes (porcentaje en masa): 98 % S (245 %: SO3).\n\nANEXO II – Productos fitosanitarios:\nAzufre: Fungicida, acaricida, repelente.',
    simpleExplanation: 'Producto de origen natural o industrial más o menos refinado Contenido mínimo en elementos nutrientes (porcentaje en masa): 98 % S (245 %: SO3) como fertilizante; y, Fungicida, acaricida, repelente. En la norma orgánica ecuatoriana (Instructivo NOE, Anexo I y II), el azufre elemental se autoriza bajo estas especificaciones técnicas: pureza mínima del 98% en masa para nutrición y acondicionamiento del suelo, y acción fungicida, acaricida o repelente para protección fitosanitaria.',
    auditContextExample: 'Durante la auditoría a una finca de cacao orgánico, el auditor inspecciona la bodega de insumos y encuentra sacos de "Azufre Agrícola". Revisa la ficha técnica y la etiqueta del fabricante registrada en Agrocalidad, confirmando que contiene 98.5% de S y que su uso está registrado como fungicida y fertilizante conforme a los Anexos I y II del Instructivo. El auditor verifica que la dosis y aplicación están registradas en el cuaderno de campo y emite conformidad.',
    commonFalsePremises: [
      'El azufre está totalmente prohibido en la norma orgánica ecuatoriana por ser un mineral químico.',
      'Se puede usar azufre con cualquier pureza sin importar el porcentaje de azufre elemental.',
      'El azufre solo se permite como fungicida y está prohibido como fertilizante en el suelo.'
    ],
    keywords: [
      'azufre', 'condiciones de uso', 'origen natural', '98 % s', 'fertilizante', 'fungicida',
      'acaricida', 'repelente', 'anexo i', 'anexo ii', 'so3', 'insumos permitidos',
      'azufre elemental', 'acondicionador del suelo'
    ],
    officialSourceUrl: 'https://www.agrocalidad.gob.ec/organicos/',
    lastUpdated: '2026'
  },
  {
    id: 'org-ec-art-7-ogm',
    norm: 'NORMA_ORGANICA_ECUATORIANA',
    normName: 'Norma Orgánica Ecuatoriana (AGROCALIDAD / Instructivo NOE)',
    code: 'Artículo 7 del Instructivo NOE',
    chapter: 'Capítulo III: Producción Orgánica – Normas Generales de Producción',
    title: 'Prohibición de Organismos Genéticamente Modificados (OGM)',
    complianceLevel: 'ARTICULO_MANDATORIO',
    officialText: 'Artículo 7. De la prohibición de los organismos genéticamente modificados (OGM):\na) En la producción orgánica no podrán utilizarse OGM ni productos obtenidos a partir de o mediante OGM como alimentos, piensos, coadyuvantes tecnológicos, productos fitosanitarios, abonos, acondicionadores del suelo, semillas, plántulas, material de reproducción vegetativa, microorganismos ni animales a excepción de que sean utilizados como medicamentos veterinarios.\nb) Los operadores podrán basarse en las etiquetas que acompañan al producto o en cualquier otro documento adjunto, siempre y cuando estos exigirán al vendedor la confirmación de que los productos suministrados no han sido obtenidos a partir de o mediante OGM de acuerdo al modelo de declaración indicado en el Anexo 10, garantizando la trazabilidad de los mismos.',
    simpleExplanation: 'En la producción orgánica ecuatoriana está absolutamente prohibido usar transgénicos (OGM) en cualquier forma: como semillas, abonos, plaguicidas, alimento animal o ingrediente. La única excepción son los medicamentos veterinarios que contengan OGM, si no hay alternativa. Todo insumo comprado debe venir con una declaración del vendedor confirmando que no es transgénico (Anexo 10 del Instructivo).',
    auditContextExample: 'El auditor inspecciona el almacén de semillas de una finca de maíz orgánico y solicita las declaraciones de no-OGM del proveedor de semillas conforme al Anexo 10. El productor no cuenta con esta documentación. El auditor levanta No Conformidad Mayor por incumplimiento del Artículo 7.',
    commonFalsePremises: [
      'Se pueden usar semillas transgénicas si se demuestra que no hay alternativa convencional disponible.',
      'La prohibición de OGM solo aplica a cultivos alimentarios, no a ornamentales o forestales.',
      'No se necesita declaración escrita del proveedor si las semillas "no parecen transgénicas".'
    ],
    keywords: [
      'ogm', 'transgenicos', 'organismos geneticamente modificados', 'semillas', 'prohibicion',
      'articulo 7', 'declaracion', 'anexo 10', 'produccion organica'
    ],
    officialSourceUrl: 'https://www.agrocalidad.gob.ec/organicos/',
    lastUpdated: '2026'
  },
  {
    id: 'org-ec-art-14-prohibicion-sinteticos',
    norm: 'NORMA_ORGANICA_ECUATORIANA',
    normName: 'Norma Orgánica Ecuatoriana (AGROCALIDAD / Instructivo NOE)',
    code: 'Artículos 13-15 del Instructivo NOE',
    chapter: 'Capítulo III: Producción Vegetal Orgánica',
    title: 'Prohibición Expresa de Agroquímicos de Síntesis Química y Fertilizantes Sintéticos',
    complianceLevel: 'ARTICULO_MANDATORIO',
    officialText: 'Queda terminantemente prohibido en todas las etapas de la producción orgánica el uso de fertilizantes químicos sintéticos (ej. urea sintética, nitrato de amonio) y de cualquier producto fitosanitario de síntesis química, incluidos herbicidas (ej. glifosato, paraquat), insecticidas sintéticos, nematicidas y fungicidas no autorizados expresamente en los Anexos I y II del Instructivo NOE. Artículo 16 establece adicionalmente que la producción hidropónica no se considera agricultura orgánica y no es certificable.',
    simpleExplanation: 'En agricultura orgánica está absolutamente prohibido usar cualquier veneno químico sintético como el glifosato para matar malezas, o abonos químicos sintéticos como la urea. No importa si los aplicas en los bordes, caminos o en poca cantidad: usar cualquier químico sintético anula de inmediato la certificación orgánica. Además, los cultivos hidropónicos no pueden certificarse como orgánicos.',
    auditContextExample: 'En una finca orgánica certificada de pitahaya, el auditor inspecciona las zanjas perimetrales y detecta malezas completamente quemadas con patrón de aplicación de herbicida sistémico. Se halla una caneca de Glifosato en bodega. El auditor suspende de inmediato la certificación orgánica y emite notificación a AGROCALIDAD.',
    commonFalsePremises: [
      'Se puede aplicar glifosato en los bordes o caminos de la finca orgánica si no toca las plantas del cultivo.',
      'Está permitido aplicar urea sintética en dosis muy bajas si el suelo tiene deficiencia severa.',
      'Un pase de emergencia con insecticida sintético está permitido en la norma orgánica.',
      'Los cultivos hidropónicos pueden ser orgánicos si no se usan químicos.'
    ],
    keywords: ['glifosato', 'herbicida', 'quimico', 'urea', 'sintesis quimica', 'borde', 'lindero', 'prohibicion', 'hidroponia'],
    officialSourceUrl: 'https://www.agrocalidad.gob.ec/organicos/',
    lastUpdated: '2026'
  },
  {
    id: 'org-ec-art-17-transicion',
    norm: 'NORMA_ORGANICA_ECUATORIANA',
    normName: 'Norma Orgánica Ecuatoriana (AGROCALIDAD / Instructivo NOE)',
    code: 'Artículo 17 del Instructivo NOE',
    chapter: 'Capítulo III: Producción Vegetal Orgánica – De la transición',
    title: 'Plazos Mandatorios del Periodo de Transición hacia la Producción Orgánica',
    complianceLevel: 'ARTICULO_MANDATORIO',
    officialText: 'Artículo 17. De la transición en la producción vegetal:\na) El período de transición o conversión se inicia con la primera inspección del organismo de certificación.\nb) Cultivos perennes: período mínimo de 36 meses de manejo orgánico antes de la primera cosecha comercializable como orgánica.\nc) Cultivos anuales o de ciclo corto: período mínimo de 24 meses antes de la siembra.\nd) Pastos: 24 meses antes de su explotación como pienso orgánico.\ne-g) El OC puede reconocer como parte del período de conversión un período anterior durante el cual se demuestre que no se aplicaron insumos prohibidos. Se podrá presentar testimonios o declaraciones de terceros.\nh) Si el proceso de conversión de una unidad productiva no se realiza de una vez, podrá hacerse progresivamente.\ni) En las unidades en curso de conversión y en las ya convertidas, no se deben alternar métodos de producción orgánica y convencional.',
    simpleExplanation: 'Para cultivos perennes como cacao, café o banano, la tierra debe manejarse 100% orgánicamente durante 3 años (36 meses) antes de cosechar el primer fruto orgánico. Para ciclo corto son 2 años (24 meses). La conversión puede ser progresiva (por lotes) pero nunca se puede alternar entre orgánico y convencional en la misma unidad.',
    auditContextExample: 'Un productor de cacao inició su manejo orgánico hace 14 meses y ya vende su grano seco como orgánico. El auditor del OC y la Autoridad Competente (AGROCALIDAD) retiran las etiquetas y abren proceso sancionatorio por comercialización indebida fuera del periodo reglamentario de 36 meses del Artículo 17.',
    commonFalsePremises: [
      'Un cultivo de banano o cacao puede certificarse en 6 meses si la tierra descansó.',
      'Durante el periodo de conversión de 36 meses ya se puede usar el sello oficial de Agrocalidad.',
      'Se puede alternar entre manejo convencional y orgánico en la misma parcela durante la transición.'
    ],
    keywords: [
      'conversion', 'transicion', 'meses de transicion', 'periodo de transicion', 'periodo de conversion',
      'cuantos meses', '36 meses', '24 meses', 'pase a ser organica', 'pasar a organica', 'convencional a organica',
      'finca de banano convencional', 'tiempo de transicion', 'perennes', 'anuales', 'cacao', 'periodo', 'articulo 17'
    ],
    officialSourceUrl: 'https://www.agrocalidad.gob.ec/organicos/',
    lastUpdated: '2026'
  },
  {
    id: 'org-ec-art-8-radiaciones',
    norm: 'NORMA_ORGANICA_ECUATORIANA',
    normName: 'Norma Orgánica Ecuatoriana (AGROCALIDAD / Instructivo NOE)',
    code: 'Artículo 8 del Instructivo NOE',
    chapter: 'Capítulo III: Producción Orgánica – Normas Generales',
    title: 'Prohibición de Radiaciones Ionizantes',
    complianceLevel: 'ARTICULO_MANDATORIO',
    officialText: 'Artículo 8. De la prohibición de uso de radiaciones ionizantes: Queda prohibida la utilización de radiaciones ionizantes para tratar alimentos o piensos orgánicos, o materias primas utilizadas en alimentos y piensos orgánicos.',
    simpleExplanation: 'No se puede irradiar con radiación ionizante ningún producto orgánico ni materia prima que se use en alimentos orgánicos. Esta prohibición aplica tanto a los alimentos como a los piensos para animales en producción orgánica.',
    auditContextExample: 'Una planta procesadora de especias orgánicas recibe un pedido de irradiación para exportación. El auditor del OC verifica y determina que el uso de radiaciones ionizantes invalida la certificación orgánica conforme al Artículo 8.',
    commonFalsePremises: [
      'Se puede irradiar si es para cumplir con requisitos fitosanitarios de exportación.',
      'La irradiación UV es lo mismo que la ionizante y ambas están prohibidas.'
    ],
    keywords: ['radiaciones ionizantes', 'irradiacion', 'prohibicion', 'articulo 8', 'tratamiento'],
    officialSourceUrl: 'https://www.agrocalidad.gob.ec/organicos/',
    lastUpdated: '2026'
  },
  {
    id: 'org-ec-art-9-registros',
    norm: 'NORMA_ORGANICA_ECUATORIANA',
    normName: 'Norma Orgánica Ecuatoriana (AGROCALIDAD / Instructivo NOE)',
    code: 'Artículo 9 del Instructivo NOE',
    chapter: 'Capítulo III: Producción Orgánica – Normas Generales',
    title: 'Mantenimiento Obligatorio de Registros por 5 Años',
    complianceLevel: 'ARTICULO_MANDATORIO',
    officialText: 'Artículo 9. Del mantenimiento de registros:\nEn las unidades de producción orgánica se deberá mantener registros concernientes a la producción, elaboración y manipulación. Los registros deberán:\na) Adaptarse a la actividad particular que conduce la unidad de producción.\nb) Revelar completamente todas las actividades y transacciones con detalle suficiente para que sean comprendidas y auditadas de inmediato.\nc) Mantenerse durante no menos de 5 años más allá de su creación; y\nd) Ser suficientes para demostrar cumplimiento con el presente Instructivo.',
    simpleExplanation: 'Todo productor orgánico debe guardar registros completos de sus actividades por al menos 5 años. Los registros deben cubrir producción, procesamiento y manejo, y deben ser lo suficientemente detallados para que un auditor los entienda y verifique de inmediato.',
    auditContextExample: 'El auditor solicita los registros de aplicación de insumos de hace 3 años. El productor dice que los desechó porque "ya pasó mucho tiempo". El auditor levanta No Conformidad porque el Artículo 9 exige mantener los registros por un mínimo de 5 años.',
    commonFalsePremises: [
      'Los registros solo se deben mantener por 1 año o hasta la siguiente auditoría.',
      'Basta con mantener un resumen anual y no se necesitan los registros detallados originales.'
    ],
    keywords: ['registros', '5 anos', 'mantenimiento', 'articulo 9', 'auditoria', 'documentacion'],
    officialSourceUrl: 'https://www.agrocalidad.gob.ec/organicos/',
    lastUpdated: '2026'
  },
  {
    id: 'org-ec-art-89-transporte',
    norm: 'NORMA_ORGANICA_ECUATORIANA',
    normName: 'Norma Orgánica Ecuatoriana (AGROCALIDAD / Instructivo NOE)',
    code: 'Artículo 89 del Instructivo NOE',
    chapter: 'Capítulo IV: Procesamiento, Transporte, Almacenamiento',
    title: 'Principios del Envase, Transporte y Almacenamiento Orgánico',
    complianceLevel: 'ARTICULO_MANDATORIO',
    officialText: 'Artículo 89. De los principios del envase, transporte y almacenamiento:\na) Se debe evitar al máximo el transporte y almacenamiento en forma conjunta de productos orgánicos y convencionales.\nb) Garantizar la identificación de los productos orgánicos a lo largo de la cadena de transporte y almacenamiento.\nc) Impedir cualquier tipo de contaminación por agentes externos o internos inherentes al medio de transporte y almacenamiento.\nd) Se deben evitar tratamientos con productos prohibidos en los medios de transporte y almacenamiento destinados a los productos orgánicos.\ne) El empaque de todo producto orgánico deberá utilizar materiales preferiblemente biodegradables o reciclables. En ningún caso se podrá usar los que hayan contenido productos de agricultura convencional.',
    simpleExplanation: 'Los productos orgánicos no pueden transportarse ni almacenarse junto con productos convencionales. Deben estar identificados en todo momento, protegidos de contaminación, y los empaques no pueden ser reciclados de agricultura convencional.',
    auditContextExample: 'El auditor descubre que cajas usadas para banano convencional se reutilizan para empacar banano orgánico. Levanta No Conformidad Mayor por violar el Artículo 89 literal e) que prohíbe el uso de empaques que hayan contenido productos convencionales.',
    commonFalsePremises: [
      'Se pueden compartir contenedores entre producto orgánico y convencional si van en estibas separadas.',
      'Las cajas usadas de producto convencional se pueden reutilizar para orgánico si se lavan.'
    ],
    keywords: ['transporte', 'almacenamiento', 'empaque', 'segregacion', 'contaminacion', 'articulo 89', 'convencional'],
    officialSourceUrl: 'https://www.agrocalidad.gob.ec/organicos/',
    lastUpdated: '2026'
  },
  {
    id: 'org-ec-art-109-obligaciones-oc',
    norm: 'NORMA_ORGANICA_ECUATORIANA',
    normName: 'Norma Orgánica Ecuatoriana (AGROCALIDAD / Instructivo NOE)',
    code: 'Artículo 109 del Instructivo NOE',
    chapter: 'Capítulo VI: Acreditación, Certificación, Control y Registro',
    title: 'Obligaciones de los Organismos de Certificación en Ecuador',
    complianceLevel: 'ARTICULO_MANDATORIO',
    officialText: 'Artículo 109. Obligaciones de los Organismos de Certificación:\n1. Estar registrada como OC ante la Autoridad Nacional Competente, tener sede y representante legal en el país.\n2. Cumplir la Norma ISO/IEC 17065 y acreditación del OAE.\n3. Mantener registro actualizado de operadores, áreas productivas y productos certificados.\n4. Brindar facilidades a la Autoridad Nacional Competente.\n5-8. Informar sobre cambios, rendimientos estimados anuales (Kg/ha), cancelaciones/suspensiones dentro de 5 días hábiles.\n9. Informe anual de actividades antes del 31 de marzo de cada año.\n10. Contar con Plan de Monitoreo de Residuos.\n11-12. Verificar uso adecuado de certificados y mantener registro de importaciones.',
    simpleExplanation: 'Los organismos de certificación orgánica en Ecuador deben: tener sede en el país, cumplir ISO 17065, estar acreditados por el OAE, mantener registros actualizados de productores, informar a AGROCALIDAD sobre cualquier cancelación o suspensión en 5 días hábiles, y presentar un informe anual antes del 31 de marzo.',
    auditContextExample: 'Durante una auditoría de supervisión, AGROCALIDAD verifica que un OC no presentó su informe anual de actividades antes del 31 de marzo. Se inicia proceso sancionatorio conforme al Artículo 109, numeral 9.',
    commonFalsePremises: [
      'Los OC extranjeros pueden operar en Ecuador sin tener sede local.',
      'No se necesita acreditación ISO 17065 para certificar orgánico en Ecuador.'
    ],
    keywords: ['organismo de certificacion', 'oc', 'obligaciones', 'iso 17065', 'oae', 'agrocalidad', 'articulo 109', 'informe anual'],
    officialSourceUrl: 'https://www.agrocalidad.gob.ec/organicos/',
    lastUpdated: '2026'
  },

  // =========================================================================
  // 2. GLOBALG.A.P. IFA v6 (Frutas y Hortalizas - GFS)
  //    Fuentes: GG_IFA_doc1.pdf (P&C), GG_IFA_doc2.pdf (Reglas OC), GG_IFA_doc3.pdf (Reglas Plantas)
  // =========================================================================
  {
    id: 'ifa6-gfs-tratamiento-quimico-propagacion',
    norm: 'GLOBALGAP_IFA_V6',
    normName: 'GlobalG.A.P. IFA GFS v6 (Frutas y Hortalizas)',
    code: 'P&C FV-GFS 01 – Material de Propagación (IFA GFS v6)',
    chapter: 'Sección FV-GFS 01: Material de Propagación Vegetal',
    title: 'Registros de Tratamientos Químicos en Material de Propagación Propio',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'FV-GFS 01: El operador debe tener disponible los registros actualizados de todos los tratamientos químicos aplicados en el material de propagación propio. Es una Obligación Mayor. El operador debe mantener un registro completo de todos los productos fitosanitarios aplicados durante la fase de propagación en vivero propio, indicando fecha, ingrediente activo, dosis comercial y operador responsable.',
    simpleExplanation: 'Si. Es una obligación mayor. En IFA GFS v6 (criterio FV-GFS 01), el operador debe tener disponible los registros actualizados de todos los tratamientos químicos aplicados en el material de propagación propio, registrando fecha, producto fitosanitario, dosis y operador responsable.',
    auditContextExample: 'Durante la auditoría GlobalG.A.P. IFA GFS v6 en una finca de banano que cuenta con vivero de multiplicación de meristemos e hijuelos, el auditor solicita los registros de desinfección química de las plantas madre. El encargado de campo indica que aplicaron nematicidas pero no llevaron bitácora escrita porque el material era para uso interno de la misma finca. El auditor levanta de inmediato una No Conformidad Mayor bajo FV-GFS 01.',
    commonFalsePremises: [
      'El material de propagación propio no requiere registros químicos, solo el material comprado a viveros externos.',
      'Los registros de tratamientos químicos en vivero son una recomendación o una obligación menor.',
      'Si se trata de desinfección preventiva de hijuelos, no se necesita anotar la dosis exacta.'
    ],
    keywords: [
      'ifa gfs v6', 'material de propagacion', 'tratamientos quimicos', 'vivero propio', 'obligacion mayor',
      'registros actualizados', 'propagacion propio', 'plantas madre', 'hijuelos', 'desinfeccion', 'fv-gfs 01'
    ],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'ifa6-manipulacion-del-producto-definicion',
    norm: 'GLOBALGAP_IFA_V6',
    normName: 'GlobalG.A.P. IFA v6 (Frutas y Hortalizas)',
    code: 'Reglamento General - Reglas para Ámbito Plantas, Sección 2.3',
    chapter: 'Reglamento General: Exclusión de Manipulación del Producto Postcosecha',
    title: 'Definición y Alcance de la Manipulación del Producto en el Ámbito de Plantas',
    complianceLevel: 'ARTICULO_MANDATORIO',
    officialText: 'Sección 2.3 del Reglamento General (Reglas para Plantas): La manipulación del producto incluye cualquier tipo de manipulación postcosecha de los productos, tal como el almacenamiento, el tratamiento químico, el recorte, el lavado o cualquier manipulación donde el producto cosechado pueda tener contacto físico con otros materiales y sustancias. Si el producto se almacena durante la noche o más tiempo, esto se considerará almacenamiento y se aplicarán los requisitos pertinentes. Si un producto se encuentra en el punto de recogida en la finca durante el día, esperando a ser recogido, esto no se considerará almacenamiento.',
    simpleExplanation: 'Incluye cualquier tipo de manipulación postcosecha de los productos, tal como almacenamiento, el tratamiento químico, el recorte, el lavado o cualquier manipulación donde el producto cosechado pueda tener contacto físico con otros materiales y sustancias. Conforme a las Reglas para Plantas del Reglamento General de GlobalG.A.P. IFA v6 (Sección 2.3), cualquier contacto físico o acondicionamiento postcosecha entra formalmente en este ámbito.',
    auditContextExample: 'Un productor de mango indica en su solicitud que "no realiza manipulación de producto" porque solo lava y desinfecta la fruta en tina antes de enviarla a granel a un tercero. El auditor le aclara que según la Sección 2.3 de las Reglas para Plantas del Reglamento General IFA v6, el lavado y tratamiento en tina constituye formalmente manipulación del producto, por lo que audita todos los criterios de higiene del agua, desinfección y manipuladores.',
    commonFalsePremises: [
      'La manipulación de producto solo aplica si hay una empacadora industrial con bandas transportadoras.',
      'El simple lavado o recorte en el campo no se considera manipulación de producto en GlobalGAP.',
      'El almacenamiento en cámaras frías no cuenta como manipulación del producto.',
      'Si la fruta espera en la finca durante el día no se aplican requisitos de almacenamiento.'
    ],
    keywords: [
      'manipulacion del producto', 'ambito de plantas', 'postcosecha', 'almacenamiento',
      'tratamiento quimico', 'recorte', 'lavado', 'contacto fisico', 'seccion 2.3', 'reglamento general'
    ],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'ifa6-reglas-oc-auditorias-acompanamiento',
    norm: 'GLOBALGAP_IFA_V6',
    normName: 'GlobalG.A.P. IFA v6 (Reglas para Organismos de Certificación)',
    code: 'Reglamento General OC v6, Sección 12-13 (Competencias)',
    chapter: 'Reglas para OC: Requisitos de Calificación y Mantenimiento de Competencias',
    title: 'Aceptabilidad de Auditorías de Acompañamiento del OC en Finca Opción 1',
    complianceLevel: 'ARTICULO_MANDATORIO',
    officialText: 'Sección 12-13 del Reglamento General para OC: Las auditorías de acompañamiento (witness/shadow audits) realizadas por un evaluador competente del Organismo de Certificación en fincas de Opción 1 son expresamente válidas y aceptables para demostrar y mantener la competencia técnica anual del auditor. Para el ámbito plantas se requiere: formación en APPCC (mínimo 8 horas), higiene alimentaria (mínimo 8 horas), protección de plantas, gestión del suelo, fertilizantes y manejo integrado de plagas. Los cursos en línea de GLOBALG.A.P. deben aprobarse en un plazo de tres meses desde su publicación.',
    simpleExplanation: 'Si. Las auditorías de acompañamiento de la finca realizadas por el OC pueden ser consideradas aceptables para mantener la competencia de un auditor del OC de la finca GlobalG.A.P. Opción 1, según lo establecido en el Reglamento General para Organismos de Certificación (Sección 12-13).',
    auditContextExample: 'En la auditoría de integridad realizada por FoodPLUS al Organismo de Certificación CAAE, el inspector revisa los expedientes anuales de los auditores de campo. Constata que un auditor renovó su competencia mediante 2 auditorías de acompañamiento presenciales en fincas bananeras Opción 1, supervisado por el auditor senior del OC conforme a las Secciones 12-13 del Reglamento General. La evidencia es validada y aceptada.',
    commonFalsePremises: [
      'Las auditorías de acompañamiento solo sirven para auditores nuevos en formación y no para mantener la competencia anual.',
      'Solo se aceptan exámenes teóricos escritos para renovar la competencia de un auditor de Opción 1.',
      'Una auditoría de acompañamiento en Opción 1 no es válida si no es presenciada por personal directo de FoodPLUS.'
    ],
    keywords: [
      'auditorias de acompanamiento', 'finca', 'oc', 'competencia de un auditor', 'opcion 1',
      'organismo de certificacion', 'witness audit', 'mantenimiento de competencia', 'reglas oc',
      'appcc', 'seccion 12', 'seccion 13'
    ],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'ifa6-fv-02-04-trabajo-infantil',
    norm: 'GLOBALGAP_IFA_V6',
    normName: 'GlobalG.A.P. IFA v6 (Frutas y Hortalizas)',
    code: 'FV-GFS 20 – Salud, Seguridad y Bienestar de los Trabajadores',
    chapter: 'Sección FV-GFS 20: Salud, Seguridad y Bienestar Laboral',
    title: 'Prohibición Absoluta de Trabajo Infantil y Requisitos de Edad Mínima',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'FV-GFS 20: Salud, Seguridad y Bienestar de los Trabajadores. La empresa no debe emplear ni utilizar trabajo infantil bajo ninguna circunstancia. La edad mínima de admisión al empleo no debe ser inferior a 15 años cumplidos. Los trabajadores jóvenes (entre 15 y 18 años) no deben realizar trabajos peligrosos ni operar maquinaria pesada. El consentimiento de los padres no exonera a la empresa del cumplimiento de este requisito.',
    simpleExplanation: 'Está terminantemente prohibido que niños menores de 15 años trabajen en la finca bajo ninguna justificación, incluso con permiso de los padres. Los jóvenes entre 15 y 18 años pueden trabajar pero NO en labores peligrosas como aplicar químicos, operar maquinaria pesada o trabajar en alturas.',
    auditContextExample: 'El auditor constata la presencia de un adolescente de 14 años cargando cajas de fruta con permiso firmado de su padre. Se levanta de inmediato una No Conformidad Mayor bajo FV-GFS 20 porque la edad mínima es 15 años y el consentimiento parental no exonera la prohibición.',
    commonFalsePremises: [
      'Los menores de 15 años pueden trabajar con permiso escrito de sus padres en vacaciones.',
      'Un joven de 16 años puede aplicar productos fitosanitarios si tiene capacitación.',
      'El trabajo infantil solo está prohibido si el menor trabaja más de 4 horas diarias.'
    ],
    keywords: [
      'trabajo infantil', 'menores de 15', 'edad minima', 'contratacion', 'permiso padres', '14 anos', 'fv-gfs 20', 'trabajadores jovenes',
      'joven de 14', 'joven de 14 anos', 'papa firma', 'autorizacion', 'permiso del papa', 'firma una autorizacion', 'empacando banano', 'trabajar empacando'
    ],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'ifa6-fv-20-01-evaluacion-riesgos-trabajadores',
    norm: 'GLOBALGAP_IFA_V6',
    normName: 'GlobalG.A.P. IFA GFS v6 (Frutas y Hortalizas)',
    code: 'FV-GFS 20.01.01',
    chapter: 'Sección FV-GFS 20: Salud, Seguridad y Bienestar Laboral',
    title: 'Evaluación de Riesgos Documentada para Salud y Seguridad de Trabajadores',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'FV-GFS 20.01.01: Hay una evaluación de riesgos documentada para la salud y seguridad de los trabajadores. La evaluación de riesgos documentada debe reflejar las condiciones en la finca e incluir las instalaciones de los trabajadores y cualquier alojamiento. Se debe revisar y actualizar anualmente y cuando se produzca algún cambio (nueva maquinaria, nuevos PF, modificaciones en prácticas de cultivo, nuevos riesgos). Se deben registrar los incidentes y accidentes. Ejemplos de peligros: movimiento de piezas de máquina, electricidad, tráfico de vehículos, sustancias inflamables, fertilizantes, exposición a productos químicos, ruido excesivo, polvo, vibraciones, temperaturas extremas, escaleras, almacenamiento de combustible.',
    simpleExplanation: 'Toda finca certificada debe tener un documento escrito que identifique todos los peligros para los trabajadores (químicos, maquinaria, electricidad, calor extremo, etc.), y este documento debe actualizarse cada año o cuando haya cambios. Además, se deben registrar todos los accidentes e incidentes.',
    auditContextExample: 'El auditor solicita la evaluación de riesgos laborales de la finca bananera. El administrador presenta un documento de hace 3 años que no incluye la nueva maquinaria de empaque adquirida el año pasado. Se levanta No Conformidad Mayor bajo FV-GFS 20.01.01 por no actualizar la evaluación.',
    commonFalsePremises: [
      'La evaluación de riesgos solo es necesaria si hay más de 20 trabajadores.',
      'No se necesita actualizar si no ha habido accidentes en el último año.'
    ],
    keywords: ['evaluacion de riesgos', 'salud', 'seguridad', 'trabajadores', 'fv-gfs 20.01', 'accidentes', 'peligros'],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'ifa6-fv-20-03-epi',
    norm: 'GLOBALGAP_IFA_V6',
    normName: 'GlobalG.A.P. IFA GFS v6 (Frutas y Hortalizas)',
    code: 'FV-GFS 20.03.01 a 20.03.04',
    chapter: 'Sección FV-GFS 20.03: Equipos de Protección Individual',
    title: 'Requisitos de Equipos de Protección Individual (EPI)',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'FV-GFS 20.03.01 (Obligación Mayor): Los trabajadores, visitantes y subcontratistas llevan EPI adecuados. Los EPI deben ajustarse a los requisitos legales, a las instrucciones de la etiqueta y/o a lo establecido por una autoridad competente. Pueden incluir: ropa impermeable, monos de protección, guantes de goma, mascarillas, dispositivos de protección respiratoria (incluidos filtros de sustitución), ocular y auditiva.\nFV-GFS 20.03.02 (Obligación Mayor): Los EPI se mantienen limpios y almacenados correctamente. La vestimenta protectora se debe lavar separada de los artículos personales.\nFV-GFS 20.03.03 (Obligación Menor): Hay evidencia de que los trabajadores utilizan los EPI provistos.\nFV-GFS 20.03.04 (Obligación Menor): Las instalaciones adecuadas para cambiarse están disponibles.',
    simpleExplanation: 'La finca debe proporcionar equipos de protección (guantes, mascarillas, gafas, botas, monos) a todos los que trabajen en ella, incluyendo visitantes y subcontratistas. Los equipos deben estar limpios, en buen estado, almacenados lejos de químicos, y la ropa de protección debe lavarse separada de la ropa personal.',
    auditContextExample: 'El auditor encuentra que los EPI para aplicación de fitosanitarios se guardan dentro del mismo cuarto donde se almacenan los productos químicos. Levanta No Conformidad Mayor bajo FV-GFS 20.03.02 por riesgo de contaminación cruzada de los EPI.',
    commonFalsePremises: [
      'Los EPI solo son obligatorios para quienes aplican plaguicidas, no para otros trabajadores.',
      'Los visitantes no necesitan EPI si solo están de paso.',
      'Se puede lavar la ropa de protección junto con la ropa personal.'
    ],
    keywords: [
      'epi', 'equipo de proteccion', 'mascarilla', 'guantes', 'gafas', 'proteccion personal', 'fv-gfs 20.03',
      'ropa de fumigacion', 'ropa', 'vestimenta', 'empacadora', 'entrar a la empacadora', 'ropa contaminada', 'fumigacion', 'ropa de aplicacion'
    ],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'ifa6-fv-20-02-primeros-auxilios',
    norm: 'GLOBALGAP_IFA_V6',
    normName: 'GlobalG.A.P. IFA GFS v6 (Frutas y Hortalizas)',
    code: 'FV-GFS 20.02.01 a 20.02.04',
    chapter: 'Sección FV-GFS 20.02: Peligros y Primeros Auxilios',
    title: 'Procedimientos de Emergencia y Primeros Auxilios',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'FV-GFS 20.02.01 (Obligación Mayor): Los procedimientos de emergencia y accidentes se exhiben y se comunican. Las instrucciones deben estar claramente exhibidas en lugares accesibles y visibles, disponibles en el/los idiomas predominantes de los trabajadores y/o en pictogramas. Deben cubrir: dirección de la finca o coordenadas GPS, personas de contacto, lista actualizada de números de teléfono (policía, ambulancia, hospital, bomberos), procedimientos de evacuación.\nFV-GFS 20.02.02 (Obligación Mayor): Los botiquines de primeros auxilios están presentes en todos los lugares de trabajo permanentes y cerca de las áreas de trabajo en campo.\nFV-GFS 20.02.04 (Obligación Menor): Siempre hay al menos una persona con formación en primeros auxilios (recibida en los últimos 5 años) presente. Guía: una persona por cada 50 trabajadores.',
    simpleExplanation: 'Toda finca debe tener señales visibles de emergencia en el idioma de los trabajadores, botiquines completos de primeros auxilios en todos los puntos de trabajo, y al menos una persona capacitada en primeros auxilios (certificación vigente de máximo 5 años). Se recomienda una persona capacitada por cada 50 trabajadores.',
    auditContextExample: 'El auditor inspecciona el campo y no encuentra botiquín de primeros auxilios cerca del área de aplicación de fitosanitarios. Levanta No Conformidad Mayor bajo FV-GFS 20.02.02.',
    commonFalsePremises: [
      'Solo se necesita botiquín en la oficina central de la finca.',
      'La formación en primeros auxilios no tiene fecha de vencimiento.',
      'Los pictogramas de emergencia solo son necesarios si hay trabajadores extranjeros.'
    ],
    keywords: ['primeros auxilios', 'botiquin', 'emergencia', 'procedimientos', 'fv-gfs 20.02', 'pictogramas', 'evacuacion'],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'ifa6-fv-06-trazabilidad',
    norm: 'GLOBALGAP_IFA_V6',
    normName: 'GlobalG.A.P. IFA GFS v6 (Frutas y Hortalizas)',
    code: 'FV-GFS 06.01',
    chapter: 'Sección FV-GFS 06: Trazabilidad',
    title: 'Sistema de Trazabilidad: Un Paso Adelante, Un Paso Atrás',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'FV-GFS 06.01 (Obligación Mayor): Todos los productos registrados se pueden rastrear hasta y desde la finca registrada. Debe haber un sistema de identificación y de trazabilidad documentado que permita rastrear los productos hacia atrás, hasta la finca o proveedor registrado, y hacia adelante, hasta el cliente inmediato ("un paso adelante y un paso atrás"). La información de la cosecha debe poder vincular un lote con los registros de producción o con las fincas de los productores específicos. Debe haber registros de la verificación anual del sistema de trazabilidad mediante una recuperación real o un ejercicio de simulación.',
    simpleExplanation: 'Toda finca certificada debe poder rastrear cada caja de fruta "un paso atrás" (de dónde vino, de qué lote de campo) y "un paso adelante" (a quién se le vendió). Cada año se debe hacer un simulacro de retiro de producto para verificar que el sistema funciona.',
    auditContextExample: 'El auditor pide hacer un ejercicio de trazabilidad: toma una caja de banano al azar del contenedor y solicita rastrearla hasta el lote de campo específico y el registro de aplicaciones. El productor no puede vincular el número de lote con un campo específico. Se levanta No Conformidad Mayor bajo FV-GFS 06.01.',
    commonFalsePremises: [
      'La trazabilidad solo se necesita para exportación, no para mercado local.',
      'No es necesario hacer simulacros anuales de retiro de producto.',
      'Basta con identificar la finca sin necesidad de vincular a lotes específicos de campo.'
    ],
    keywords: ['trazabilidad', 'rastrear', 'lote', 'un paso adelante', 'un paso atras', 'simulacro', 'fv-gfs 06', 'retiro'],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'ifa6-fv-07-propiedad-paralela',
    norm: 'GLOBALGAP_IFA_V6',
    normName: 'GlobalG.A.P. IFA GFS v6 (Frutas y Hortalizas)',
    code: 'FV-GFS 07.01 a 07.03',
    chapter: 'Sección FV-GFS 07: Propiedad Paralela, Trazabilidad y Segregación',
    title: 'Segregación de Productos Certificados y No Certificados',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'FV-GFS 07.01 (Obligación Mayor): Hay establecido un sistema eficaz para identificar todos los productos que proceden de procesos con certificación GLOBALG.A.P. y segregarlos de los productos sin certificación.\nFV-GFS 07.02 (Obligación Mayor): Cuando el productor está registrado para propiedad paralela, todos los productos certificados en empaque para consumidor final deben estar identificados con un GGN. El GGN no se debe utilizar para etiquetar productos sin certificación.\nFV-GFS 07.03 (Obligación Mayor): Hay un paso de verificación final para garantizar el envío correcto de productos certificados y no certificados.',
    simpleExplanation: 'Si produces fruta certificada y no certificada (propiedad paralela), debes tener un sistema claro para separarlas. Toda caja certificada para consumidor final debe llevar el GGN. Antes de enviar, debe haber una verificación final documentada de que no se mezcló producto certificado con no certificado.',
    auditContextExample: 'El auditor encuentra cajas con GGN en producto que proviene de fincas no certificadas. Se levanta No Conformidad Mayor bajo FV-GFS 07.02 por uso indebido del GGN.',
    commonFalsePremises: [
      'No se necesita segregación si toda la producción es certificada.',
      'El GGN puede usarse en toda la producción de la empresa incluyendo la no certificada.',
      'La verificación final de segregación es opcional si hay un buen sistema de trazabilidad.'
    ],
    keywords: ['propiedad paralela', 'segregacion', 'ggn', 'certificado', 'no certificado', 'fv-gfs 07', 'verificacion final'],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'ifa6-fv-13-equipos-mantenimiento',
    norm: 'GLOBALGAP_IFA_V6',
    normName: 'GlobalG.A.P. IFA GFS v6 (Frutas y Hortalizas)',
    code: 'FV-GFS 13.01 a 13.03',
    chapter: 'Sección FV-GFS 13: Equipos',
    title: 'Mantenimiento, Calibración y Almacenamiento de Equipos',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'FV-GFS 13.01 (Obligación Mayor): Los equipos se mantienen en buen estado y se calibran. Equipos de aplicación de PF: calibración verificada anualmente. Equipos de riego/fertirrigación: registros anuales de mantenimiento.\nFV-GFS 13.02 (Obligación Mayor): Los equipos se almacenan de manera que se prevenga la contaminación del producto.\nFV-GFS 13.03 (Obligación Mayor): Los vehículos y equipos utilizados para carga, transporte o almacenamiento de productos cosechados se limpian, se mantienen y son apropiados para su uso.',
    simpleExplanation: 'Todos los equipos de la finca (fumigadoras, equipos de riego, vehículos de transporte) deben estar bien mantenidos, calibrados anualmente y almacenados de forma que no contaminen la fruta. Los vehículos de transporte deben estar limpios y libres de contaminantes como estiércol o combustible.',
    auditContextExample: 'El auditor solicita los registros de calibración de la fumigadora de mochila y descubre que no se ha calibrado en 2 años. Levanta No Conformidad Mayor bajo FV-GFS 13.01.',
    commonFalsePremises: [
      'La calibración de equipos de aplicación solo es necesaria cuando se compran nuevos.',
      'Los vehículos de transporte interno de la finca no requieren limpieza documentada.'
    ],
    keywords: ['equipos', 'calibracion', 'mantenimiento', 'fumigadora', 'riego', 'fv-gfs 13', 'vehiculos', 'almacenamiento'],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'ifa6-fv-21-manejo-sitio',
    norm: 'GLOBALGAP_IFA_V6',
    normName: 'GlobalG.A.P. IFA GFS v6 (Frutas y Hortalizas)',
    code: 'FV-GFS 21.01 y 21.02',
    chapter: 'Sección FV-GFS 21: Manejo del Sitio',
    title: 'Evaluación de Riesgos y Plan de Gestión del Sitio de Producción',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'FV-GFS 21.01 (Obligación Mayor): Se completa una evaluación de riesgos para todos los sitios registrados. Debe estar disponible para todos los sitios, revisarse anualmente, considerar peligros biológicos, físicos y químicos (incluidos alérgenos), riesgo de contaminación cruzada desde sitios cercanos, historial del sitio (al menos un año, se recomiendan cinco), e impacto de actividades propuestas en cultivos adyacentes.\nFV-GFS 21.02 (Obligación Mayor): Se ha desarrollado e implementado un plan de gestión que establece estrategias con el objetivo de minimizar los riesgos identificados. El plan debe revisarse junto con la evaluación de riesgos y describir las medidas de control implementadas.',
    simpleExplanation: 'Cada sitio de producción registrado debe tener una evaluación de riesgos documentada que considere peligros biológicos, físicos, químicos y de contaminación cruzada. Se debe conocer el historial del terreno (mínimo 1 año, idealmente 5). Además, debe existir un plan de gestión escrito con medidas concretas para cada riesgo identificado.',
    auditContextExample: 'Un productor incorpora un nuevo lote de terreno a su certificación pero no tiene evaluación de riesgos ni conoce el historial del suelo. El auditor levanta No Conformidad Mayor bajo FV-GFS 21.01 porque todo sitio debe evaluarse antes de iniciar la producción.',
    commonFalsePremises: [
      'La evaluación de riesgos del sitio solo se hace una vez al inicio de la certificación.',
      'No se necesita conocer el historial del terreno si se hacen análisis de suelo.',
      'El plan de gestión es lo mismo que la evaluación de riesgos.'
    ],
    keywords: ['manejo del sitio', 'evaluacion de riesgos', 'plan de gestion', 'historial', 'contaminacion cruzada', 'fv-gfs 21'],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'ifa6-duracion-auditoria-finca',
    norm: 'GLOBALGAP_IFA_V6',
    normName: 'GlobalG.A.P. IFA v6 (Reglas para Ámbito Plantas)',
    code: 'Reglamento General - Reglas para Ámbito Plantas, Sección 3.3',
    chapter: 'Sección 3: Auditoría Realizada por el OC',
    title: 'Duración Mínima de la Auditoría de Finca por el OC',
    complianceLevel: 'ARTICULO_MANDATORIO',
    officialText: 'Sección 3.3 del Reglamento General (Reglas para Plantas):\na) La auditoría debe durar lo suficiente para completar reunión de inicio, evaluación completa de todos los requisitos, lista de verificación y presentación de resultados.\nb) La duración habitual para IFA ámbito plantas es de entre 3 y 8 horas en sitio (para productor individual Opción 1 sin SGC).\nc) La duración mínima de 3 horas se aplica a las circunstancias más sencillas (un solo sitio, uno o pocos productos, maquinaria sencilla, pocos trabajadores, sin manipulación del producto, auditoría posterior, documentación bien organizada). Excluye preparación, traslados y evaluación GRASP.\nd) Para miembro de grupo Opción 2 o productor multisitio Opción 1 con SGC: al menos 2 horas por miembro/sitio.\ne) Factores que aumentan la duración: auditoría inicial, nuevos productos, nuevos lugares, almacenamiento incluido, manipulación del producto, diferentes tipos de productos, múltiples sitios, subcontratistas.',
    simpleExplanation: 'Una auditoría de finca GlobalGAP para un productor individual sencillo dura mínimo 3 horas y puede llegar hasta 8 horas en el sitio. Si es parte de un grupo (Opción 2), son mínimo 2 horas por miembro. Estas horas no incluyen tiempo de preparación, viajes ni evaluaciones adicionales como GRASP. Las auditorías iniciales o con mayor complejidad deben durar más.',
    auditContextExample: 'Un OC reporta que su auditor completó la auditoría inicial de una finca de banano con empacadora propia y 50 trabajadores en solo 2 horas. FoodPLUS cuestiona la duración ya que la Sección 3.3 establece un mínimo de 3 horas para las circunstancias más sencillas, y una auditoría inicial con manipulación del producto requiere significativamente más tiempo.',
    commonFalsePremises: [
      'No hay tiempo mínimo establecido para la auditoría de finca GlobalGAP.',
      'Las 3 horas mínimas incluyen el tiempo de preparación y traslados.',
      'La evaluación GRASP se cuenta como parte de las 3 horas mínimas.'
    ],
    keywords: ['duracion auditoria', 'horas', 'minimo 3 horas', 'finca', 'opcion 1', 'opcion 2', 'seccion 3.3', 'sgc'],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'ifa6-fv-14-politica-inocuidad',
    norm: 'GLOBALGAP_IFA_V6',
    normName: 'GlobalG.A.P. IFA GFS v6 (Frutas y Hortalizas)',
    code: 'FV-GFS 14.01',
    chapter: 'Sección FV-GFS 14: Declaración de la Política de Inocuidad Alimentaria',
    title: 'Declaración de Política de Inocuidad Alimentaria del Productor',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'FV-GFS 14.01 (Obligación Mayor): El productor ha completado y firmado la declaración de la política de inocuidad alimentaria. Debe:\n- Respaldar la existencia de una cultura de inocuidad alimentaria, a través de comunicación, formación, escucha activa y objetivos mensurables.\n- Completarse anualmente y firmarse por el productor/encargado responsable.\n- Indicar las personas cuyas actividades afectan a la inocuidad alimentaria.',
    simpleExplanation: 'Cada año, el productor o encargado responsable debe firmar un documento donde se compromete con la inocuidad alimentaria, estableciendo objetivos medibles, identificando quiénes en la finca afectan la seguridad de los alimentos, y promoviendo una cultura de seguridad alimentaria entre los trabajadores.',
    auditContextExample: 'El auditor solicita la declaración de política de inocuidad y el productor presenta una del año anterior sin actualizar ni firmar para el año en curso. Se levanta No Conformidad Mayor bajo FV-GFS 14.01.',
    commonFalsePremises: [
      'La política de inocuidad solo se firma una vez y no necesita renovación anual.',
      'Solo las grandes empresas necesitan una política de inocuidad alimentaria formal.',
      'La política puede ser verbal, no necesita estar documentada y firmada.'
    ],
    keywords: ['politica de inocuidad', 'inocuidad alimentaria', 'declaracion', 'firmada', 'anual', 'fv-gfs 14', 'cultura'],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'ifa6-fv-05-especificaciones-proveedores',
    norm: 'GLOBALGAP_IFA_V6',
    normName: 'GlobalG.A.P. IFA GFS v6 (Frutas y Hortalizas)',
    code: 'FV-GFS 05.01 y 05.02',
    chapter: 'Sección FV-GFS 05: Especificaciones, Proveedores y Gestión de Existencias',
    title: 'Control de Proveedores e Inventario de Existencias',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'FV-GFS 05.01 (Obligación Mayor): Se debe implementar y mantener un procedimiento para el control de proveedores de insumos y servicios que puedan representar un riesgo para la inocuidad alimentaria. Incluye: evaluación, aprobación y vigilancia continua de proveedores; adquisición en emergencia; registros disponibles. Las especificaciones se deben revisar anualmente.\nFV-GFS 05.02 (Obligación Mayor): Debe haber un inventario de existencias que garantice que los materiales no representen riesgo y que los de vida útil limitada se utilicen en orden correcto. Se debe calcular el inventario en un plazo de un mes desde cualquier uso o compra.',
    simpleExplanation: 'La finca debe tener un sistema documentado para evaluar y aprobar sus proveedores de insumos (plaguicidas, fertilizantes, materiales de empaque). Además, debe mantener un inventario actualizado de todas las existencias, asegurando que los productos con fecha de vencimiento se usen en el orden correcto (primero en entrar, primero en salir).',
    auditContextExample: 'El auditor verifica el inventario de productos fitosanitarios y encuentra que hay productos vencidos almacenados junto a los vigentes sin segregación. Levanta No Conformidad Mayor bajo FV-GFS 05.02 por gestión inadecuada del inventario.',
    commonFalsePremises: [
      'El control de proveedores solo aplica si se compran insumos importados.',
      'El inventario solo se necesita actualizar una vez al año antes de la auditoría.',
      'Los productos fitosanitarios no tienen fecha de vencimiento.'
    ],
    keywords: ['proveedores', 'inventario', 'existencias', 'control', 'especificaciones', 'fv-gfs 05', 'vencimiento'],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },

  // =========================================================================
  // 3. GLOBALG.A.P. CADENA DE CUSTODIA (CoC v6)
  //    Fuentes: GG_CoC_doc 1.pdf (CPCC), GG_CoC_doc 2.pdf (Reglamento General CoC)
  // =========================================================================
  {
    id: 'coc6-incompatibilidad-productor-ifa',
    norm: 'GLOBALGAP_COC_V6',
    normName: 'GlobalG.A.P. Cadena de Custodia (CoC v6) & IFA v6',
    code: 'Reglamento General CoC v6 / Ámbito y Exclusiones',
    chapter: 'Parte I – Introducción: Alcance de la Certificación CoC',
    title: 'Improcedencia de Doble Certificación IFA y CoC para Productor y Empacador de Banano',
    complianceLevel: 'ARTICULO_MANDATORIO',
    officialText: 'Introducción Parte I del PCCC CoC: La certificación CoC es necesaria para todos los actores de la cadena de suministro que tienen la propiedad legal o el control físico de los productos certificados y realizan al menos una de las siguientes actividades: a) Venta con declaración de certificación IFA o CoC; b) Etiquetado con GGN o elementos visuales de la etiqueta GGN; c) Modificación de la composición o asignación de nueva identidad (procesamiento, sacrificio, mezcla de diferentes lotes/productores, reempaque, reetiquetado). Los productores que producen y empacan su propio producto bajo IFA no necesitan certificación CoC adicional, ya que la trazabilidad y segregación están cubiertas por la norma IFA.',
    simpleExplanation: 'No. Los requisitos de trazabilidad y segregación para los productores que participan en la propiedad o en la producción paralela de productos certificados y no certificados ya están incluidos en el ámbito de la certificación IFA. Por tanto, un productor que cultiva y empaca su propio banano queda cubierto integralmente por la norma de finca IFA v6 y no debe ni requiere certificarse bajo CoC para su propia cosecha.',
    auditContextExample: 'Una empresa bananera que produce y empaca exclusivamente fruta de sus propias haciendas solicita a la certificadora auditoría combinada IFA v6 y CoC v6. El auditor líder rechaza la solicitud de CoC, indicando que conforme al alcance definido en la Introducción del PCCC CoC, las actividades de empaque y propiedad paralela del productor quedan plenamente amparadas bajo el alcance de IFA.',
    commonFalsePremises: [
      'Todo productor que empaca fruta para exportación está obligado a tener certificación CoC además de IFA.',
      'Si un productor empaca fruta convencional y certificada en su misma empacadora de finca, necesita CoC para la segregación.',
      'CoC es obligatorio para que un productor use el logo de GlobalGAP en sus cajas.'
    ],
    keywords: [
      'produce y empaca banano', 'ifa y coc', 'certificar a un productor', 'produccion paralela',
      'propiedad paralela', 'trazabilidad y segregacion', 'no se puede certificar', 'ambito ifa', 'doble certificacion'
    ],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'coc6-registros-compra-venta-obligacion-mayor',
    norm: 'GLOBALGAP_COC_V6',
    normName: 'GlobalG.A.P. Cadena de Custodia (CoC v6)',
    code: 'CoC-SC 4 / PCCC CoC v6.1',
    chapter: 'Sección CoC-SC 4: Verificación de Insumos / Balance de Masas',
    title: 'Mantenimiento Obligatorio de Registros Precisos de Compras y Ventas',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'CoC-SC 4 (Obligación Mayor): La empresa debe mantener registros documentados y verificables de todas las compras y ventas de productos con estatus certificado GlobalG.A.P., incluyendo cantidades, números de lote, números CoC/GGN de proveedores y clientes, y conciliación de volúmenes. Los registros de trazabilidad deben ser exactos, completos e inalterados.',
    simpleExplanation: 'Si. Es una obligación mayor. En Cadena de Custodia (CoC v6, sección CoC-SC 4), la empresa debe mantener registros precisos, documentados y actualizados de todas las compras y ventas de productos con estatus certificado GlobalG.A.P. para garantizar la trazabilidad y la conciliación del balance de masas.',
    auditContextExample: 'El auditor de CoC solicita las facturas de venta y órdenes de compra del mes auditado. La empresa no dispone de los registros detallados de compras de 3 proveedores certificados. Al ser Obligación Mayor, el auditor levanta No Conformidad Mayor inmediata que bloquea la emisión o renovación del certificado CoC.',
    commonFalsePremises: [
      'En CoC los registros de compra y venta son solo una recomendación contable.',
      'Los registros de compra solo son obligatorios si el cliente en destino lo solicita por escrito.',
      'Con tener el resumen financiero al final de año es suficiente para CoC sin detalle de cada lote.'
    ],
    keywords: [
      'coc', 'registros precisos', 'compra y ventas', 'obligacion mayor', 'balance de masas',
      'cadena de custodia', 'trazabilidad comercial', 'facturas', 'volumenes', 'coc-sc 4'
    ],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'coc6-03-01-metodos-segregacion',
    norm: 'GLOBALGAP_COC_V6',
    normName: 'GlobalG.A.P. Cadena de Custodia (CoC v6)',
    code: 'CoC-SC 3.1 / PCCC CoC v6.1',
    chapter: 'Sección CoC-SC 3: Trazabilidad',
    title: 'Métodos de Segregación y Preservación de Identidad en CoC',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'CoC-SC 3.1 (Obligación Mayor): La empresa usa el método de segregación del producto o el método de preservación de la identidad para asegurar la segregación.\n\nMétodo de segregación: Permite la mezcla de productos certificados provenientes de diferentes productores certificados. La mezcla física debe documentarse mediante datos de trazabilidad vinculados a un código de trazabilidad (número de lote). Los productos certificados NO deben mezclarse físicamente con productos no certificados. La empresa debe etiquetar con su Número CoC y código de trazabilidad vinculado a los Números CoC de proveedores o GGN del productor.\n\nMétodo de preservación de la identidad: Prohíbe la mezcla física de productos certificados con otros productos (certificados o no certificados). No se deben mezclar los productos de diferentes productores certificados. Se debe registrar la preservación de identidad y rastrear hasta un productor certificado.\n\nNota: No se aceptarán en frutas y hortalizas los productos multi-ingredientes con productos no certificados.',
    simpleExplanation: 'Existen 2 métodos para manejar la trazabilidad en CoC:\n1) Segregación: puedes mezclar fruta certificada de DIFERENTES productores certificados en un mismo lote, pero NUNCA mezclar certificada con no certificada.\n2) Preservación de identidad: NO puedes mezclar nada, cada lote debe rastrearse a un único productor.\nEn ambos casos, cada caja o lote debe tener un código de trazabilidad (número de lote) vinculado a los proveedores.',
    auditContextExample: 'El auditor de CoC descubre que una empacadora usa el método de segregación pero mezcla en un mismo pallet cajas de productores certificados con cajas de un proveedor sin certificación vigente. Se levanta No Conformidad Mayor bajo CoC-SC 3.1 porque el método de segregación prohíbe mezclar producto certificado con no certificado.',
    commonFalsePremises: [
      'Se pueden mezclar cajas certificadas y convencionales en un mismo pallet si van atadas con cinta adhesiva de color.',
      'El método de preservación de identidad permite mezclar productos de diferentes productores certificados.',
      'No se necesita código de trazabilidad si toda la fruta viene del mismo país.',
      'Los productos multi-ingredientes de frutas y hortalizas pueden incluir ingredientes no certificados.'
    ],
    keywords: [
      'segregacion', 'preservacion de identidad', 'mezcla', 'cajas', 'pallet', 'coc-sc 3',
      'trazabilidad', 'numero de lote', 'certificado', 'no certificado', 'cadena de custodia', 'ggn'
    ],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'coc6-01-estructura-gestion',
    norm: 'GLOBALGAP_COC_V6',
    normName: 'GlobalG.A.P. Cadena de Custodia (CoC v6)',
    code: 'CoC-SC 1.1 y 1.2 / PCCC CoC v6.1',
    chapter: 'Sección CoC-SC 1: Estructura de Gestión',
    title: 'Requisitos de Estructura de Gestión para Certificación CoC',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'CoC-SC 1.1 (Obligación Mayor): ¿Se dispone de documentación que demuestre claramente que el solicitante es o pertenece a una entidad legal y que se le concede el derecho legal de llevar a cabo actividades comerciales y de producción agrícola o acuícola y/o de manipulación de productos? Sin opción de "N/A".\nCoC-SC 1.2 (Obligación Mayor): ¿Opera la empresa una estructura de gestión que cumpla con los requisitos de la norma CoC? La empresa debe tener: una autoridad central responsable de gestionar la conformidad con la norma CoC; procedimientos y procesos documentados adecuados al tamaño y complejidad; personal competente y capacitado.',
    simpleExplanation: 'Para obtener CoC, la empresa debe demostrar que es una entidad legal registrada con derecho a realizar actividades comerciales. Además, debe tener una persona o departamento responsable de cumplir la norma CoC, procedimientos escritos y personal capacitado. Es una Obligación Mayor sin posibilidad de marcar "No Aplica".',
    auditContextExample: 'Una comercializadora de frutas solicita certificación CoC pero no puede demostrar que tiene una estructura formal de gestión ni ha designado un responsable de conformidad con la norma. El auditor no puede emitir la certificación hasta que se demuestre cumplimiento de CoC-SC 1.1 y 1.2.',
    commonFalsePremises: [
      'Un comerciante individual sin registro legal puede obtener CoC.',
      'No se necesita un responsable designado para la norma CoC si la empresa es pequeña.',
      'Los procedimientos de CoC pueden ser todos verbales sin documentación.'
    ],
    keywords: ['estructura de gestion', 'entidad legal', 'autoridad central', 'coc-sc 1', 'procedimientos', 'responsable'],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'coc6-03-03-retiro-producto',
    norm: 'GLOBALGAP_COC_V6',
    normName: 'GlobalG.A.P. Cadena de Custodia (CoC v6)',
    code: 'CoC-SC 3.3 / PCCC CoC v6.1',
    chapter: 'Sección CoC-SC 3: Trazabilidad',
    title: 'Procedimiento de Retirada/Recuperación de Productos Certificados',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'CoC-SC 3.3 (Obligación Mayor): La empresa debe contar con procedimientos documentados para gestionar/iniciar la retirada/recuperación de productos certificados de la cadena de suministro o del mercado. El procedimiento debe: identificar el tipo de suceso que resulta en una retirada; designar personas responsables; establecer mecanismo de notificación a la siguiente etapa de la cadena, al OC y a la secretaría; definir métodos para recomponer existencias. Los procedimientos deben comprobarse anualmente mediante simulacro registrado. Si la empresa tiene certificación GFSI válida (etapa posterior a la finca), se considerará cumplido.',
    simpleExplanation: 'Toda empresa con CoC debe tener un plan documentado de cómo retirar producto certificado del mercado en caso de emergencia. Debe definir quién decide, cómo se avisa a los clientes y al OC, y cómo se recomponen las existencias. Cada año se debe hacer un simulacro documentado de retiro.',
    auditContextExample: 'El auditor solicita evidencia del simulacro anual de retiro de producto. La empresa nunca ha realizado uno. Se levanta No Conformidad Mayor bajo CoC-SC 3.3.',
    commonFalsePremises: [
      'El plan de retiro de producto solo es necesario para exportadores, no para el mercado local.',
      'Si nunca ha habido una alerta de retiro, no se necesita hacer simulacros.',
      'El simulacro debe incluir comunicación real con los clientes.'
    ],
    keywords: ['retiro de producto', 'recuperacion', 'recall', 'simulacro', 'coc-sc 3.3', 'emergencia', 'procedimiento'],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  },
  {
    id: 'coc6-02-marcas-registradas',
    norm: 'GLOBALGAP_COC_V6',
    normName: 'GlobalG.A.P. Cadena de Custodia (CoC v6)',
    code: 'CoC-SC 2 / PCCC CoC v6.1',
    chapter: 'Sección CoC-SC 2: Identificación y Etiquetado',
    title: 'Uso de Marcas Registradas GLOBALG.A.P. en Productos y Documentos',
    complianceLevel: 'OBLIGACION_MAYOR',
    officialText: 'CoC-SC 2 (Obligación Mayor): La palabra GLOBALG.A.P., las marcas registradas y los logotipos de GLOBALG.A.P., así como el GGN y el Número CoC, deben usarse en los productos salientes de acuerdo con "Uso de marcas registradas de GLOBALG.A.P.: política y directrices". Sin opción de "N/A".',
    simpleExplanation: 'El uso del nombre GLOBALG.A.P., sus logos, el GGN y el Número CoC en cajas, etiquetas y documentos de venta está estrictamente regulado. Solo se pueden usar siguiendo las directrices oficiales de marcas registradas. El mal uso puede resultar en sanciones.',
    auditContextExample: 'El auditor verifica que una empacadora usa el logo de GLOBALG.A.P. en cajas de producto no certificado para dar una "imagen de calidad". Se levanta No Conformidad Mayor por uso indebido de marcas registradas.',
    commonFalsePremises: [
      'Cualquier empresa puede usar el logo de GLOBALG.A.P. en sus materiales de marketing.',
      'El GGN se puede poner en cualquier producto de la empresa, certificado o no.',
      'No hay reglas específicas para el uso de las marcas GLOBALG.A.P.'
    ],
    keywords: ['marcas registradas', 'logo', 'globalg.a.p.', 'ggn', 'numero coc', 'etiquetado', 'coc-sc 2'],
    officialSourceUrl: 'https://globalgap.org/',
    lastUpdated: '2026'
  }
];
