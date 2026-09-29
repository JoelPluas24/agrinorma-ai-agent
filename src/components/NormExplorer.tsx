import React, { useState } from 'react';
import { NORMATIVE_DATABASE } from '../data/normativeDatabase';
import { OFFICIAL_EXTERNAL_REGISTRIES } from '../data/externalSources';
import { X, Search, Layers, Globe, ExternalLink } from 'lucide-react';

interface NormExplorerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCriterio: (query: string) => void;
}

export const NormExplorer: React.FC<NormExplorerProps> = ({ isOpen, onClose, onSelectCriterio }) => {
  const [filterNorm, setFilterNorm] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  if (!isOpen) return null;

  const filteredItems = NORMATIVE_DATABASE.filter(item => {
    const matchesNorm = filterNorm === 'ALL' || item.norm === filterNorm;
    const matchesSearch =
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.officialText.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesNorm && matchesSearch;
  });

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-[#006837] text-white rounded-md">
              <Layers size={18} />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Matriz Normativa Oficial Cargada en AgriNorma AI
              </h2>
              <p className="text-xs text-slate-500">
                Base interna estructurada para GlobalG.A.P. IFA v6, CoC v6 y Agrocalidad Res. 034
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

        {/* Filter Bar */}
        <div className="p-4 border-b border-slate-200 bg-white flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search size={16} className="text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Buscar por código, azufre, banano, propagación, manipulación..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[#006837] focus:ring-1 focus:ring-[#006837]"
            />
          </div>

          <div className="flex gap-1.5 flex-wrap">
            {[
              { id: 'ALL', label: 'Todas las Normas' },
              { id: 'GLOBALGAP_IFA_V6', label: 'IFA v6' },
              { id: 'GLOBALGAP_COC_V6', label: 'CoC v6' },
              { id: 'NORMA_ORGANICA_ECUATORIANA', label: 'Orgánica Ecuador' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterNorm(tab.id)}
                className={`text-xs px-2.5 py-1.5 rounded-md font-medium border transition-colors ${
                  filterNorm === tab.id
                    ? 'bg-[#006837] text-white border-[#006837]'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Items List */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 flex-1 bg-slate-50/50">
          {filteredItems.map(item => (
            <div key={item.id} className="p-4 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <div className="flex justify-between items-start mb-2 gap-2 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-2xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-[#006837] border border-emerald-200">
                    {item.code}
                  </span>
                  <span className="text-2xs font-bold px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
                    {item.complianceLevel}
                  </span>
                  <span className="text-xs text-slate-500">
                    {item.normName}
                  </span>
                </div>

                <button
                  onClick={() => {
                    onSelectCriterio(`Consultar y verificar cumplimiento de ${item.code}: ${item.title}`);
                    onClose();
                  }}
                  className="btn-caae-primary text-2xs py-1 px-2.5"
                >
                  Consultar Criterio
                </button>
              </div>

              <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                {item.title}
              </h4>

              <div className="bg-slate-50 p-2.5 rounded border border-slate-200 mb-2 font-mono text-xs text-slate-800 italic">
                "{item.officialText}"
              </div>

              <div className="text-xs text-slate-700 mb-1">
                <strong className="text-[#006837]">Explicación en campo:</strong> {item.simpleExplanation}
              </div>

              {item.commonFalsePremises.length > 0 && (
                <div className="text-2xs text-red-600 font-medium">
                  <strong>Premisas Falsas Frecuentes:</strong> {item.commonFalsePremises.join(' | ')}
                </div>
              )}
            </div>
          ))}

          {/* Official External Portals Box */}
          <div className="p-4 bg-emerald-50/50 border border-emerald-200 rounded-lg mt-4">
            <h4 className="text-xs font-bold text-[#006837] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Globe size={14} /> Fuentes Oficiales Enlazadas para Búsqueda Externa (Herramienta 2)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {OFFICIAL_EXTERNAL_REGISTRIES.map(r => (
                <div key={r.id} className="p-2.5 bg-white border border-slate-200 rounded shadow-2xs">
                  <div className="font-bold text-slate-800">{r.sourceOrg}</div>
                  <div className="text-slate-500 text-2xs">{r.portalName}</div>
                  <a
                    href={r.verifiedUrls[0]}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-700 hover:underline text-2xs mt-1 inline-flex items-center gap-1 font-medium"
                  >
                    {r.officialDomain} <ExternalLink size={10} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-slate-200 bg-white flex justify-between items-center text-xs text-slate-500">
          <span>{filteredItems.length} criterios normativos cargados</span>
          <button onClick={onClose} className="btn-caae-secondary text-xs py-1.5 px-4">
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
