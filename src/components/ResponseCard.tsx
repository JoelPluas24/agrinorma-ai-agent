import React from 'react';
import { StructuredAuditResponse } from '../types/agent';
import { DocumentGenerator } from '../services/documentGenerator';
import { AlertBanner } from './AlertBanner';
import { 
  BookMarked, 
  Lightbulb, 
  ClipboardCheck, 
  FileText, 
  FileSpreadsheet, 
  FileCode2, 
  Image, 
  ExternalLink,
  Copy,
  CheckCircle,
  AlertTriangle,
  FileCheck2,
  Building2,
  ShieldAlert
} from 'lucide-react';

interface ResponseCardProps {
  response: StructuredAuditResponse;
}

export const ResponseCard: React.FC<ResponseCardProps> = ({ response }) => {
  const [copied, setCopied] = React.useState(false);
  const primary = response.primaryCitation;

  const isOutOfScope = 
    primary.code.toLowerCase().includes('guardrail') || 
    primary.title.toLowerCase().includes('fuera del alcance') ||
    response.alerts.some(a => a.title.includes('FUERA DEL ALCANCE'));

  // Dedicated Scope Restriction Card (Guardrail) for off-topic queries
  if (isOutOfScope) {
    return (
      <div className="bg-white border-2 border-amber-300 rounded-xl p-6 sm:p-7 mb-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0 shadow-2xs">
            <ShieldAlert size={28} />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-2xs font-black px-2.5 py-0.5 rounded bg-amber-200 border border-amber-400 text-amber-950 uppercase tracking-wider">
                Valla de Contención Ética (Guardrail)
              </span>
              <span className="text-2xs font-semibold text-slate-500">
                Acreditación ISO/IEC 17065 • Organismo CAAE
              </span>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
              Consulta Fuera del Alcance Acreditado de Auditoría
            </h2>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed bg-amber-50/80 p-4 rounded-lg border border-amber-200/90 font-medium mb-5 shadow-2xs">
              {response.simpleExplanation}
            </p>

            <div className="border-t border-slate-200 pt-4">
              <h4 className="text-2xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Ámbito de Especialidad Normativa de este Agente:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                  <span className="font-bold text-[#006837] block mb-0.5">🌱 GlobalG.A.P. IFA v6</span>
                  <span className="text-slate-600 text-2xs leading-relaxed block">Frutas, hortalizas, inocuidad alimentaria, higiene, fitosanitarios y salud laboral.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                  <span className="font-bold text-indigo-700 block mb-0.5">📦 Cadena de Custodia (CoC v6)</span>
                  <span className="text-slate-600 text-2xs leading-relaxed block">Trazabilidad comercial, métodos de segregación física y balance de masas.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                  <span className="font-bold text-emerald-800 block mb-0.5">🍃 Norma Orgánica Ecuador</span>
                  <span className="text-slate-600 text-2xs leading-relaxed block">AGROCALIDAD Res. 034, Instructivo NOE, insumos permitidos y certificación grupal SIC.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleCopyText = () => {
    const fullText = `DICTAMEN DE AUDITORÍA — AGRINORMA AI
Norma: ${primary.norm} (${primary.code})
Cita Oficial: "${primary.exactQuote}"

Explicación Simple:
${response.simpleExplanation}

Ejemplo en Auditoría:
${response.auditExample.scenario}
Hallazgo / Tipificación: ${response.auditExample.potentialFinding}`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isConformity = 
    !response.falsePremisesAnalysis.some(fp => fp.detected) && 
    !response.auditExample.potentialFinding.toLowerCase().includes('no conformidad') &&
    !response.alerts.some(a => a.severity === 'CRITICA' || a.severity === 'MAYOR');

  const isExternalSearch = 
    primary.norm.toLowerCase().includes('externa') || 
    primary.norm.toLowerCase().includes('union europea');

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 mb-8 shadow-xs">
      
      {/* Alert Banner */}
      <AlertBanner alerts={response.alerts} falsePremises={response.falsePremisesAnalysis} />

      {/* Dictamen Header with Reference and Export Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-5 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className={`text-2xs font-bold px-2 py-0.5 rounded border ${
              isExternalSearch 
                ? 'bg-blue-50 text-blue-800 border-blue-200' 
                : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>
              {primary.norm}
            </span>
            <span className="text-2xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-[#006837] border border-emerald-200">
              {primary.code}
            </span>
            <span className={`text-2xs font-bold px-2 py-0.5 rounded border ${
              isConformity
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-red-50 text-red-700 border-red-200'
            }`}>
              {primary.level}
            </span>
            <span className="text-2xs text-slate-400">
              Ref: {response.queryId} • {response.generationTimestamp}
            </span>
          </div>

          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            {primary.title}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {primary.chapter}
          </p>
        </div>

        {/* 4 Download Formats Bar */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => DocumentGenerator.generateWord(response)}
            className="btn-caae-secondary text-xs py-1.5 px-2.5 text-blue-700 border-blue-200 hover:bg-blue-50"
            title="Descargar informe en Microsoft Word (.docx)"
          >
            <FileText size={14} className="text-blue-600" /> Word (.docx)
          </button>

          <button
            onClick={() => DocumentGenerator.generateExcel(response)}
            className="btn-caae-secondary text-xs py-1.5 px-2.5 text-emerald-800 border-emerald-200 hover:bg-emerald-50"
            title="Descargar matriz de chequeo en Excel (.xlsx)"
          >
            <FileSpreadsheet size={14} className="text-[#006837]" /> Excel (.xlsx)
          </button>

          <button
            onClick={() => DocumentGenerator.generatePdf(response)}
            className="btn-caae-secondary text-xs py-1.5 px-2.5 text-red-700 border-red-200 hover:bg-red-50"
            title="Descargar dictamen formal en PDF (.pdf)"
          >
            <FileCode2 size={14} className="text-red-600" /> PDF (.pdf)
          </button>

          <button
            onClick={() => DocumentGenerator.generateJpgCard(response)}
            className="btn-caae-secondary text-xs py-1.5 px-2.5 text-purple-700 border-purple-200 hover:bg-purple-50"
            title="Descargar ficha resumen infográfica en JPG (.jpg)"
          >
            <Image size={14} className="text-purple-600" /> JPG (Ficha)
          </button>

          <button
            onClick={handleCopyText}
            className="btn-caae-secondary text-xs py-1.5 px-2 text-slate-600"
            title="Copiar texto estructurado"
          >
            {copied ? <CheckCircle size={14} className="text-[#006837]" /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* The 3 Core Structured Sections */}
      <div className="space-y-5">
        
        {/* Section 1: Cita Exacta de la Fuente Normativa */}
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
          <div className="flex items-center gap-2 mb-2 text-[#006837]">
            <BookMarked size={16} />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              1. Cita Exacta de la Fuente Normativa Oficial
            </h3>
          </div>

          <div className="official-quote-box">
            <p className="font-semibold text-slate-900 mb-2">
              "{primary.exactQuote}"
            </p>
            <div className="text-xs text-slate-500 font-sans flex justify-between items-center flex-wrap gap-2 pt-2 border-t border-slate-200">
              <span>Fuente Oficial: <strong>{primary.sourceDocument}</strong> — {primary.chapter}</span>
              <span className="text-2xs font-semibold px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700">
                Texto Oficial Verificado
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Explicación Simple para No Expertos */}
        <div className="border border-slate-200 rounded-lg p-4 bg-white">
          <div className="flex items-center gap-2 mb-2 text-amber-700">
            <Lightbulb size={16} />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              2. Explicación Simple para No Expertos (Productores y Personal Operativo)
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-amber-50/40 p-3.5 rounded-lg border border-amber-200/60 font-medium">
            {response.simpleExplanation}
          </p>
        </div>

        {/* Section 3: Ejemplo Aplicado al Contexto de Auditoría */}
        <div className="border border-slate-200 rounded-lg p-4 bg-white">
          <div className="flex items-center gap-2 mb-3 text-indigo-700">
            <ClipboardCheck size={16} />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              3. Ejemplo Aplicado al Contexto de Auditoría
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1">
                 Escenario Práctico de Campo:
              </span>
              <p className="text-slate-600 leading-relaxed">
                {response.auditExample.scenario}
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1">
                 Protocolo y Acción del Auditor:
              </span>
              <p className="text-slate-600 leading-relaxed">
                {response.auditExample.auditorAction}
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1.5">
                 Evidencias Objetivas Requeridas:
              </span>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                {response.auditExample.evidenceToReview.map((ev, i) => (
                  <li key={i}>{ev}</li>
                ))}
              </ul>
            </div>

            {isConformity ? (
              <div className="p-3.5 bg-emerald-50/80 rounded-lg border border-emerald-200 text-emerald-950 shadow-2xs">
                <span className="font-bold text-[#006837] block mb-1 flex items-center gap-1.5 text-xs sm:text-sm">
                  <CheckCircle size={16} className="text-[#006837]" />
                  Tipificación del Hallazgo: Conformidad Verificada
                </span>
                <p className="text-emerald-900 font-medium leading-relaxed text-xs sm:text-sm">
                  {response.auditExample.potentialFinding}
                </p>
              </div>
            ) : (
              <div className="p-3.5 bg-red-50/80 rounded-lg border border-red-200 text-red-950 shadow-2xs">
                <span className="font-bold text-red-800 block mb-1 flex items-center gap-1.5 text-xs sm:text-sm">
                  <AlertTriangle size={16} className="text-red-600" />
                  Tipificación del Hallazgo: No Conformidad / Desvío Normativo
                </span>
                <p className="text-red-700 font-medium leading-relaxed text-xs sm:text-sm">
                  {response.auditExample.potentialFinding}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Official Web Portals Enlace Bar */}
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Building2 size={15} className="text-[#006837]" />
            <span>Consultas validadas con los sitios web oficiales:</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-emerald-800">
            <a
              href="https://globalgap.org/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              https://globalgap.org/ <ExternalLink size={11} />
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://www.agrocalidad.gob.ec/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              https://www.agrocalidad.gob.ec/ <ExternalLink size={11} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
