import React from 'react';
import { AgentStepTrace } from '../types/agent';
import { CheckCircle2, AlertTriangle, Loader2, Circle } from 'lucide-react';

interface FlowVisualizerProps {
  traces: AgentStepTrace[];
  isExecuting: boolean;
}

export const FlowVisualizer: React.FC<FlowVisualizerProps> = ({ traces, isExecuting }) => {
  const defaultSteps = [
    { num: 1, name: '1. Presentación', tool: 'ORQUESTADOR' },
    { num: 2, name: '2. Recepción', tool: 'ORQUESTADOR' },
    { num: 3, name: '3. Base Interna', tool: 'BASE_CONOCIMIENTO' },
    { num: 4, name: '4. Búsqueda Externa', tool: 'BUSQUEDA_EXTERNA' },
    { num: 5, name: '5. Falsa Premisa', tool: 'SISTEMA_ALERTAS' },
    { num: 6, name: '6. Dictamen Formal', tool: 'GENERACION_DOCS' },
    { num: 7, name: '7. Alerta & Descarga', tool: 'SISTEMA_ALERTAS' }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 mb-6 shadow-xs">
      <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-100 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-4 bg-emerald-600 rounded-full"></span>
          <h2 className="text-sm font-bold text-slate-800 tracking-tight">
            Flujo de Decisión y Razonamiento del Agente (7 Pasos del Reto)
          </h2>
          {isExecuting && (
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium">
              <Loader2 size={12} className="animate-spin" /> Procesando consulta
            </span>
          )}
        </div>
        <span className="text-xs text-slate-400">
          Secuencia de Ejecución Trazable
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {defaultSteps.map(step => {
          const trace = traces.find(t => t.stepNumber === step.num);
          const isDone = trace?.status === 'completed';
          const isRunning = trace?.status === 'running';
          const isWarning = trace?.status === 'warning';

          let bg = 'bg-slate-50 border-slate-200 text-slate-600';
          let badgeText = 'text-slate-400';
          let icon = <Circle size={12} className="text-slate-300" />;

          if (isRunning) {
            bg = 'bg-emerald-50 border-emerald-400 text-emerald-900 ring-1 ring-emerald-300';
            badgeText = 'text-emerald-700 font-bold';
            icon = <Loader2 size={13} className="text-[#006837] animate-spin" />;
          } else if (isWarning) {
            bg = 'bg-amber-50 border-amber-300 text-amber-900';
            badgeText = 'text-amber-700 font-bold';
            icon = <AlertTriangle size={13} className="text-amber-600" />;
          } else if (isDone) {
            bg = 'bg-emerald-50/50 border-emerald-200 text-slate-800';
            badgeText = 'text-[#006837] font-semibold';
            icon = <CheckCircle2 size={13} className="text-[#006837]" />;
          }

          return (
            <div
              key={step.num}
              className={`p-2.5 rounded-lg border text-left flex flex-col justify-between transition-all ${bg}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-2xs uppercase tracking-wider ${badgeText}`}>
                  Paso {step.num}
                </span>
                {icon}
              </div>

              <div className="text-xs font-bold leading-snug text-slate-800">
                {step.name.split('. ')[1]}
              </div>

              {trace?.outputSnippet ? (
                <div
                  className="mt-1 text-2xs text-slate-500 truncate"
                  title={trace.outputSnippet}
                >
                  {trace.outputSnippet}
                </div>
              ) : (
                <div className="mt-1 text-2xs text-slate-400">En espera</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
