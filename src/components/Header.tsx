import React from 'react';
import { ShieldCheck, BookOpen, Layers, ExternalLink, Award, FileCheck } from 'lucide-react';

interface HeaderProps {
  onOpenNormExplorer: () => void;
  onOpenManual: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenNormExplorer, onOpenManual }) => {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm mb-6">
      {/* Top Corporate Accreditation Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center flex-wrap gap-2 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
            <Award size={13} /> Organismo de Certificación & Auditoría
          </span>
          <span className="text-slate-500">|</span>
          <span>Acreditación ISO/IEC 17065</span>
          <span className="text-slate-500">|</span>
          <span>GlobalG.A.P. c/o FoodPLUS GmbH & AGROCALIDAD</span>
        </div>

        <div className="flex items-center gap-4 text-slate-300">
          <a
            href="https://globalgap.org/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
          >
            globalgap.org <ExternalLink size={11} />
          </a>
          <span className="text-slate-600">•</span>
          <a
            href="https://www.agrocalidad.gob.ec/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
          >
            agrocalidad.gob.ec <ExternalLink size={11} />
          </a>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        
        {/* Brand & CAAE emblem */}
        <div className="flex items-center gap-4">
          {/* CAAE inspired Emblem */}
          <div className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-lg p-2 shadow-xs min-w-[75px]">
            <div className="w-12 h-6 relative flex items-center justify-center">
              {/* Sun yellow dot */}
              <div className="w-4 h-4 rounded-full bg-[#FFD100] border border-amber-400 absolute -top-1"></div>
              {/* Green leaf wave */}
              <div className="w-11 h-3 rounded-full bg-[#006837] absolute bottom-0 shadow-xs"></div>
            </div>
            <span className="font-serif font-black text-xs tracking-wider text-slate-800 mt-1">CAAE</span>
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                AgriNorma <span className="text-[#006837]">AI</span>
              </h1>
              <span className="bg-emerald-50 text-[#006837] border border-emerald-200 text-xs px-2.5 py-0.5 rounded font-semibold">
                Portal de Auditoría
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Asistente de Interpretación Normativa para <strong>GlobalG.A.P. IFA v6</strong>, <strong>Cadena de Custodia (CoC v6)</strong> y <strong>Norma Orgánica Ecuatoriana</strong>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={onOpenNormExplorer}
            className="btn-caae-secondary text-xs sm:text-sm py-2 px-3.5"
            title="Consultar la base de datos de criterios oficiales cargados"
          >
            <Layers size={16} className="text-[#006837]" />
            <span>Matriz Normativa</span>
          </button>

          
        </div>

      </div>

      {/* Scope Sub-bar */}
      <div className="bg-slate-50 border-t border-slate-200 px-4 sm:px-8 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-600 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Normativas Aplicadas:</span>
            <span className="bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded shadow-2xs">
              GlobalG.A.P. IFA v6 (Smart/GFS)
            </span>
            <span className="bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded shadow-2xs">
              GlobalG.A.P. Cadena de Custodia v6 (CoC)
            </span>
            <span className="bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded shadow-2xs">
              Norma Orgánica AGROCALIDAD (Res. 034)
            </span>
          </div>

          <div className="flex items-center gap-2 text-emerald-800 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Motor Determinístico RAG & Verificación Externa Activo</span>
          </div>
        </div>
      </div>
    </header>
  );
};
