import React, { useState } from 'react';
import { X, BookOpen, Download, Award, Shield, CheckCircle, FileText } from 'lucide-react';

interface ManualModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ManualModal: React.FC<ManualModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'MANUAL' | 'ORIGINALIDAD'>('MANUAL');

  if (!isOpen) return null;

  const downloadTextFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const manualContent = `# MANUAL DE FUNCIONES Y USO — AGENTE DE IA (CAAE)
**Nombre del candidato:** Juan Javier [Nombres y Apellidos]
**Fecha:** 28 de Septiembre de 2026
**Nombre del agente:** AgriNorma AI (Corporate CAAE Edition)
**Puesto al que postula:** Auditor de Norma Orgánica y GlobalG.A.P. en CAAE

---

## SECCIÓN 1 — Propósito y Alcance
### ¿Qué problema resuelve el agente?
AgriNorma AI resuelve la dispersión, complejidad y extensión de las normativas agroalimentarias en procesos de auditoría bajo la norma ISO/IEC 17065. Asiste al auditor y al productor entregando:
1. Cita exacta de la fuente normativa (artículo, anexo o punto de control).
2. Explicación simple para no expertos en lenguaje accesible para productores.
3. Ejemplo práctico aplicado al contexto real de auditoría en campo.
4. Detección automática de errores y premisas falsas con alertas de severidad.

### ¿A quién va dirigido?
- Auditores líderes e inspectores técnicos de CAAE.
- Productores agrícolas, administradores de fincas y plantas empacadoras.
- Responsables de Aseguramiento de Calidad (QA/QC) y comités de certificación.

### ¿Qué NO cubre?
- Emisión legal o vinculante de certificados oficiales (atribución exclusiva e indelegable del Comité de Certificación de CAAE).
- Asesoría agronómica comercial o consultoría particular para evitar conflictos de imparcialidad (ISO/IEC 17065 acápite 4.2).
- Normativas fuera de alcance (ej. FDA FSMA, normas de comercio justo o normativas orgánicas de otros países no homologadas).

---

## SECCIÓN 2 — Diseño del Agente
### Modelo de IA usado y por qué
Arquitectura híbrida RAG (Retrieval-Augmented Generation) combinando Modelos de Lenguaje de Frontera (Gemini 1.5 Pro / Claude 3.5 Sonnet / GPT-4o) con un Motor RAG Determinístico indexado en memoria con los 6 documentos PDF oficiales (NOE_doc1, GG_IFA_doc1-3, GG_CoC_doc1-2).
*Por qué:* En auditoría técnica se requiere tolerancia cero a alucinaciones. El motor determinístico asegura fidelidad textual de artículos y porcentajes, mientras el LLM aporta pedagogía y análisis contextual.

### Nombre y personalidad del agente
**AgriNorma AI**: Auditor Senior con personalidad técnica, formal, objetiva, rigurosa, pedagógica e imparcial.

### Flujo de decisión (Cómo decide qué herramienta usar)
1. **Paso 1 y 2:** Identificación institucional y clasificación de la consulta.
2. **Paso 3 (Herramienta 1 - Base Interna):** Búsqueda prioritaria en los documentos oficiales indexados.
3. **Paso 4 (Herramienta 2 - Búsqueda Externa):** Si requiere resoluciones ministeriales vigentes o listas de insumos, consulta portales oficiales (globalgap.org y agrocalidad.gob.ec).
4. **Paso 5 (Herramienta 4 - Sistema de Alertas):** Evalúa premisas falsas, incoherencias o normativas ajenas y antepone alertas correctivas.
5. **Paso 6:** Estructuración del dictamen en las 4 partes requeridas.
6. **Paso 7 (Herramienta 3 - Generador de Documentos):** Habilita la exportación inmediata en Word (.docx), Excel (.xlsx), PDF y JPG.

---

## SECCIÓN 3 — Uso de IA como Copiloto
### ¿Qué prompts usó para construir el agente?
- Prompt de arquitectura para pipeline determinístico en TypeScript y React.
- Prompt de extracción y estructuración de artículos clave de los 6 PDFs.
- Prompt de generación de matrices de validación para premisas falsas de auditoría.
- Prompt de exportación documental multiformato con diseño corporativo CAAE.

### ¿Qué errores de la IA detectó y corrigió?
- Confusión de versiones entre IFA v5.4 y v6: La IA usó códigos obsoletos; se corrigió anclando las fuentes a IFA v6 oficial (FV 01.02.01, FV 02.01.01).
- Premisa falsa de CoC: La IA supuso que un productor que empaca su propio banano podía certificar CoC; se corrigió verificando las Reglas de CoC v6 (Sección 1.1) donde se aclara que la producción propia bajo IFA no aplica a CoC.
- Superficie máxima de pequeño productor orgánico: La IA sugirió 5 ha; se corrigió verificando el Art. 10 del Instructivo NOE (10 ha monocultivo / 20 ha agroforestal).
- Vinculación de PostCSS en Vite: La IA omitió configurar PostCSS en el bundler; se corrigió inyectando los plugins en vite.config.ts.

---

## SECCIÓN 4 — Límites, Riesgos y Mantenimiento
- **Límites:** No realiza inspecciones físicas, toma de muestras foliares ni reemplaza la deliberación del Comité de Certificación.
- **Riesgos:** Desfase ante resoluciones de emergencia no sincronizadas o ambigüedades en la redacción del usuario.
- **Mantenimiento:** Monitoreo periódico de globalgap.org y agrocalidad.gob.ec y versionado modular de la base normativa.
- **Mejoras futuras:** Módulo de visión artificial para auditar fotos de bodegas y etiquetas de insumos; conexión API con la base de datos de GGN de GlobalGAP y sistema GUIA de AGROCALIDAD.

---

## SECCIÓN 5 — Instrucciones de Uso
- **Consultas recomendadas:** Las 8 preguntas preparadas por el auditor de GlobalGAP y casos de campo sobre tiempos de carencia, EPP y balance de masas.
- **Consultas rechazadas:** Asesoría para encubrir no conformidades, simular mezclas fraudulentas de producto, o normativas ajenas al alcance.

---

## SECCIÓN 6 — Declaración de Ayuda Humana
- **¿Recibió ayuda humana?:** SÍ.
- **¿De quién y para qué?:** Apoyo de un compañero técnico (Joel Pluas) en modalidad de pair programming para el soporte en la configuración del entorno local (Node/Vite, scripts de empaquetado y pruebas de compilación). El diseño del flujo de decisión, análisis de los 6 documentos normativos oficiales y validación de las 8 preguntas del auditor fueron realizados íntegramente por el postulante.

---

## SECCIÓN 7 — Conclusión
- **¿Qué aprendió?:** La importancia de diseñar sistemas de IA trazables y determinísticos para auditorías bajo ISO/IEC 17065, evitando alucinaciones y estructurando respuestas rigurosas.
- **¿Cómo aplicaría esto en su rol como auditor en CAAE?:** Como copiloto in situ para validar criterios legales en segundos, redactar no conformidades inobjetables y generar reportes técnicos estandarizados.`;

  const originalidadContent = `# ORGANISMO DE CERTIFICACIÓN CAAE
## DECLARACIÓN DE ORIGINALIDAD Y CONFIDENCIALIDAD

Yo, **JUAN JAVIER [NOMBRES Y APELLIDOS]**, con documento de identidad N° **[NÚMERO DE CÉDULA]**, en calidad de postulante al puesto de **Auditor de Norma Orgánica y GlobalGAP en CAAE**, declaro formalmente que:

1. El agente de IA y el manual han sido desarrollados de forma individual, salvo la ayuda humana declarada explícitamente en la Sección 6 del Manual de Funciones y Uso.
2. He declarado todas las herramientas de IA utilizadas, con sus correspondientes prompts, casos de uso y validaciones metodológicas.
3. El contenido entregado es de mi autoría y refleja mi capacidad de análisis, diseño de flujos de decisión y resolución técnica de problemas.
4. He citado debidamente las fuentes oficiales utilizadas (GlobalG.A.P. IFA v6, GlobalG.A.P. CoC v6 y Norma Orgánica Ecuatoriana AGROCALIDAD Res. 034).
5. Me comprometo a mantener estricta confidencialidad sobre el contenido del reto, los documentos normativos y el proceso de selección de CAAE.
6. Entiendo plenamente que no declarar el uso de IA o entregar fuera de plazo puede llevar a penalización o descalificación inmediata del proceso.

---

**Firma del Postulante:**  
__________________________________________________  
**Juan Javier [Nombres y Apellidos]**  
C.I.: [Número de Cédula]  
Guayaquil, Ecuador  
Fecha: 28 de Septiembre de 2026`;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-xl w-full max-w-4xl max-h-[88vh] flex flex-col shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-[#006837] text-white rounded-md">
              <BookOpen size={18} />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Documentación Oficial del Reto — Entregables CAAE
              </h2>
              <p className="text-xs text-slate-500">
                Plantillas oficiales cumplidas: Manual de 7 Secciones y Declaración de Originalidad
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-md hover:bg-slate-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-5 border-b border-slate-200 bg-white flex justify-between items-center flex-wrap gap-2">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('MANUAL')}
              className={`py-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-colors ${
                activeTab === 'MANUAL'
                  ? 'border-[#006837] text-[#006837]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <BookOpen size={15} /> 1. Manual de Funciones y Uso (7 Secciones)
            </button>

            <button
              onClick={() => setActiveTab('ORIGINALIDAD')}
              className={`py-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-2 transition-colors ${
                activeTab === 'ORIGINALIDAD'
                  ? 'border-[#006837] text-[#006837]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Award size={15} /> 2. Declaración de Originalidad y Confidencialidad
            </button>
          </div>

          <div className="flex items-center gap-2 py-2">
            <span className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded font-medium flex items-center gap-1">
              <CheckCircle size={13} className="text-emerald-600" /> Archivos PDF generados en carpeta local
            </span>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 bg-slate-50/50 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
          {activeTab === 'MANUAL' ? (
            <div>
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-200">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    MANUAL DE FUNCIONES Y USO — AGENTE DE IA
                  </h3>
                  <p className="text-xs text-slate-500">
                    Formato oficial de 7 secciones completado conforme a la plantilla de CAAE
                  </p>
                </div>
                <button
                  onClick={() => downloadTextFile(manualContent, 'MANUAL_DE_FUNCIONES_Y_USO.md')}
                  className="btn-caae-secondary text-xs py-1.5 px-3"
                  title="Descargar copia en formato Markdown"
                >
                  <Download size={13} />
                  <span>Descargar .MD</span>
                </button>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-100 text-xs">
                  <div><strong className="text-slate-900">Postulante:</strong> Juan Javier</div>
                  <div><strong className="text-slate-900">Puesto:</strong> Auditor Norma Orgánica y GlobalGAP</div>
                  <div><strong className="text-slate-900">Fecha de entrega:</strong> 28 de Septiembre de 2026</div>
                  <div><strong className="text-slate-900">Entidad:</strong> CAAE c/o FoodPLUS & AGROCALIDAD</div>
                </div>

                <div className="whitespace-pre-wrap font-mono text-xs bg-slate-50 p-4 rounded border border-slate-200 text-slate-800 leading-relaxed">
                  {manualContent}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-200">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    DECLARACIÓN DE ORIGINALIDAD Y CONFIDENCIALIDAD
                  </h3>
                  <p className="text-xs text-slate-500">
                    Documento formal requerido por CAAE para validar autoría y confidencialidad
                  </p>
                </div>
                <button
                  onClick={() => downloadTextFile(originalidadContent, 'DECLARACION_ORIGINALIDAD.md')}
                  className="btn-caae-secondary text-xs py-1.5 px-3"
                  title="Descargar copia en formato Markdown"
                >
                  <Download size={13} />
                  <span>Descargar .MD</span>
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs space-y-4">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3">
                  <Shield size={20} className="text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-emerald-950">
                    <strong className="block font-semibold">Documento Oficial Listo en Disco:</strong>
                    Los archivos editables <code>MANUAL_DE_FUNCIONES_Y_USO_JUAN_JAVIER.pdf</code> y <code>DECLARACION_DE_ORIGINALIDAD_JUAN_JAVIER.pdf</code> ya fueron exportados en la carpeta <code>E:\Prueba Juan Javier\</code> listos para adjuntar al correo de CAAE.
                  </div>
                </div>

                <div className="whitespace-pre-wrap font-mono text-xs bg-slate-50 p-4 rounded border border-slate-200 text-slate-800 leading-relaxed">
                  {originalidadContent}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-white flex justify-between items-center">
          <span className="text-xs text-slate-500">
            AgriNorma AI • CAAE Auditoría ISO/IEC 17065
          </span>
          <button
            onClick={onClose}
            className="btn-caae-primary text-xs py-2 px-4"
          >
            Entendido / Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
