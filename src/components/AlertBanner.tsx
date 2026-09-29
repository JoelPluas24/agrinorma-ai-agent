import React from 'react';
import { AgentAlert, FalsePremiseDetection } from '../types/agent';
import { AlertOctagon, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';

interface AlertBannerProps {
  alerts: AgentAlert[];
  falsePremises: FalsePremiseDetection[];
}

export const AlertBanner: React.FC<AlertBannerProps> = ({ alerts, falsePremises }) => {
  if (alerts.length === 0 && falsePremises.length === 0) return null;

  const topAlert = alerts[0];
  const isCritical = topAlert?.severity === 'CRITICA';
  const isMajor = topAlert?.severity === 'MAYOR';
  const isInfo = topAlert?.severity === 'INFORMATIVA';

  let containerClass = 'bg-amber-50/70 border-amber-300 text-amber-900';
  let badgeClass = 'bg-amber-200 text-amber-900 border-amber-300';
  let icon = <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />;

  if (isCritical) {
    containerClass = 'bg-red-50/70 border-red-300 text-red-900';
    badgeClass = 'bg-red-200 text-red-900 border-red-300';
    icon = <AlertOctagon size={20} className="text-red-600 shrink-0 mt-0.5" />;
  } else if (isInfo) {
    containerClass = 'bg-emerald-50/70 border-emerald-300 text-emerald-900';
    badgeClass = 'bg-emerald-200 text-emerald-900 border-emerald-300';
    icon = <CheckCircle2 size={20} className="text-[#006837] shrink-0 mt-0.5" />;
  }

  return (
    <div className={`border rounded-lg p-4 mb-4 ${containerClass}`}>
      <div className="flex gap-3">
        {icon}

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className={`text-2xs font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badgeClass}`}>
              {topAlert?.severity || 'ALERTA'}
            </span>
            <h4 className="text-xs sm:text-sm font-bold">
              {topAlert?.title}
            </h4>
          </div>

          <p className="text-xs leading-relaxed mb-2 opacity-95">
            {topAlert?.description}
          </p>

          {/* False Premise Detail Callout */}
          {falsePremises.length > 0 && (
            <div className="mt-2.5 p-3 rounded-md bg-white/80 border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-1.5 text-2xs font-bold text-red-700 uppercase tracking-wider mb-1">
                <ShieldAlert size={14} /> Detección de Premisa Falsa en la Consulta:
              </div>
              <p className="text-xs italic text-slate-700 mb-1.5 font-medium">
                "{falsePremises[0].premiseText}"
              </p>
              <div className="text-xs text-slate-800">
                <strong>Aclaración Normativa Oficial:</strong> {falsePremises[0].correction}
              </div>
            </div>
          )}

          {topAlert?.recommendation && (
            <div className="mt-2 text-xs font-medium text-slate-700">
              <strong className="text-slate-900">Acción Requerida para el Auditor:</strong> {topAlert.recommendation}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
