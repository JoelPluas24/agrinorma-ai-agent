import React, { useState } from 'react';
import { PRESET_AUDIT_SCENARIOS } from '../data/presets';
import { PresetScenario } from '../types/agent';
import { Send, Filter, CheckSquare, Search, FileText } from 'lucide-react';

interface ChatInterfaceProps {
  onSendQuery: (query: string, normScope?: string) => void;
  isExecuting: boolean;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ onSendQuery, isExecuting }) => {
  const [inputQuery, setInputQuery] = useState('');
  const [selectedScope, setSelectedScope] = useState<string>('TODAS');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim() || isExecuting) return;
    onSendQuery(inputQuery.trim(), selectedScope === 'TODAS' ? undefined : selectedScope);
  };

  const handleSelectPreset = (preset: PresetScenario) => {
    setInputQuery(preset.query);
    if (preset.category === 'GlobalGAP IFA v6') setSelectedScope('GLOBALGAP_IFA_V6');
    else if (preset.category === 'Cadena de Custodia') setSelectedScope('GLOBALGAP_COC_V6');
    else if (preset.category === 'Norma Orgánica') setSelectedScope('NORMA_ORGANICA_ECUATORIANA');
    else setSelectedScope('TODAS');

    onSendQuery(
      preset.query,
      preset.category === 'GlobalGAP IFA v6'
        ? 'GLOBALGAP_IFA_V6'
        : preset.category === 'Cadena de Custodia'
        ? 'GLOBALGAP_COC_V6'
        : preset.category === 'Norma Orgánica'
        ? 'NORMA_ORGANICA_ECUATORIANA'
        : undefined
    );
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 mb-6 shadow-xs">
      
      {/* Scope Selector Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 pb-3 border-b border-slate-100">
        <div>
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#006837] rounded-full"></span>
            Consultas Normativas de Auditoría (8 Preguntas Oficiales de Prueba)
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Seleccione una de las preguntas preparadas por el auditor de GlobalG.A.P. o ingrese una consulta personalizada.
          </p>
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto">
          <Filter size={14} className="text-slate-500" />
          <span className="text-xs font-semibold text-slate-600">Norma:</span>
          <select
            value={selectedScope}
            onChange={e => setSelectedScope(e.target.value)}
            className="text-xs bg-slate-50 border border-slate-300 rounded-md px-2.5 py-1.5 text-slate-800 font-medium focus:ring-1 focus:ring-emerald-600 focus:outline-none"
          >
            <option value="TODAS">Todas (Detección Automática)</option>
            <option value="GLOBALGAP_IFA_V6">GlobalG.A.P. IFA v6</option>
            <option value="GLOBALGAP_COC_V6">GlobalG.A.P. CoC v6</option>
            <option value="NORMA_ORGANICA_ECUATORIANA">Norma Orgánica Ecuador</option>
          </select>
        </div>
      </div>

      {/* The 8 Official Test Questions Pills */}
      <div className="mb-4">
        <span className="text-2xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
          Preguntas de Prueba para Comprobación Funcional del Auditor:
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {PRESET_AUDIT_SCENARIOS.map((preset, idx) => {
            const isSelected = inputQuery === preset.query;
            return (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                disabled={isExecuting}
                className={`p-2.5 rounded-lg border text-left transition-all flex items-start gap-2.5 ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-400 ring-1 ring-emerald-300'
                    : 'bg-slate-50/70 border-slate-200 hover:bg-white hover:border-slate-300 shadow-2xs'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-2xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-2xs font-bold px-1.5 py-0.2 rounded bg-white border border-slate-200 text-slate-700">
                      {preset.category}
                    </span>
                    {preset.containsFalsePremise && (
                      <span className="text-2xs font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-200">
                        Premisa Falsa
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-slate-800 line-clamp-2 leading-snug">
                    {preset.query}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Query Input Box */}
      <form onSubmit={handleSubmit} className="relative mt-2">
        <label className="text-2xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
          Ingrese o Edite la Consulta Técnica:
        </label>
        <div className="flex gap-2">
          <textarea
            rows={2}
            value={inputQuery}
            onChange={e => setInputQuery(e.target.value)}
            placeholder="Escriba su consulta como auditor o productor..."
            disabled={isExecuting}
            className="flex-1 bg-white border border-slate-300 rounded-lg p-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#006837] focus:ring-1 focus:ring-[#006837] resize-none"
          />

          <button
            type="submit"
            disabled={!inputQuery.trim() || isExecuting}
            className="btn-caae-primary px-5 self-stretch shrink-0 justify-center"
          >
            <span>Interpretar</span>
            <Send size={15} />
          </button>
        </div>
      </form>

    </div>
  );
};
