import React from 'react';
import { Database, Globe, FileSpreadsheet, BellRing, CheckCircle2, Clock } from 'lucide-react';

interface ToolInspectorProps {
  activeTool?: string;
}

export const ToolInspector: React.FC<ToolInspectorProps> = ({ activeTool }) => {
  const tools = [
    {
      id: 'BASE_CONOCIMIENTO',
      num: '01',
      name: 'Base de Conocimiento Interna',
      icon: <Database size={16} className="text-[#006837]" />,
      tag: 'IFA v6 • CoC v6 • Res. 034',
      description: 'Documentos normativos oficiales cargados en memoria y base vectorial.',
      detail: '8 Criterios Clave Indexados'
    },
    {
      id: 'BUSQUEDA_EXTERNA',
      num: '02',
      name: 'Búsqueda Externa Oficial',
      icon: <Globe size={16} className="text-blue-600" />,
      tag: 'globalgap.org • agrocalidad.gob.ec',
      description: 'Consulta a fuentes externas oficiales y verificación comunitaria.',
      detail: 'Resoluciones & Enlaces Web'
    },
    {
      id: 'GENERACION_DOCS',
      num: '03',
      name: 'Generación de Documentos',
      icon: <FileSpreadsheet size={16} className="text-indigo-600" />,
      tag: 'Word • Excel • PDF • JPG',
      description: 'Genera informes técnicos de auditoría descargables al instante.',
      detail: '4 Formatos Habilitados'
    },
    {
      id: 'SISTEMA_ALERTAS',
      num: '04',
      name: 'Sistema de Alertas',
      icon: <BellRing size={16} className="text-amber-600" />,
      tag: 'Detección de Premisas Falsas',
      description: 'Detección de errores técnicos, premisas falsas y no conformidades.',
      detail: 'Clasificación de Severidad'
    }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 mb-6 shadow-xs">
      <div className="flex justify-between items-center mb-3.5 pb-2.5 border-b border-slate-100 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#006837] rounded-full"></span>
          <h2 className="text-sm font-bold text-slate-800 tracking-tight">
            Herramientas Obligatorias del Agente (Punto 4 del Reto)
          </h2>
          <span className="bg-emerald-50 text-[#006837] border border-emerald-200 text-2xs font-semibold px-2 py-0.5 rounded">
            4 / 4 Operativas
          </span>
        </div>
        <span className="text-xs text-slate-500 font-medium">
          Pipeline de Decisión Conforme a Especificación Técnica
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {tools.map(tool => {
          const isActive = activeTool === tool.id;
          return (
            <div
              key={tool.id}
              className={`p-3.5 rounded-lg border transition-all ${
                isActive
                  ? 'bg-emerald-50/70 border-emerald-400 ring-2 ring-emerald-200'
                  : 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-white border border-slate-200 shadow-2xs">
                    {tool.icon}
                  </div>
                  <div>
                    <span className="text-2xs font-bold text-slate-400 block -mb-0.5">
                      HERRAMIENTA {tool.num}
                    </span>
                    <h3 className="text-xs font-bold text-slate-800 leading-tight">
                      {tool.name}
                    </h3>
                  </div>
                </div>

                {isActive ? (
                  <span className="inline-flex items-center gap-1 text-2xs font-semibold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                    <Clock size={11} className="animate-spin" /> Activa
                  </span>
                ) : (
                  <CheckCircle2 size={14} className="text-emerald-700" />
                )}
              </div>

              <div className="mb-1.5">
                <span className="inline-block text-2xs font-semibold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded">
                  {tool.tag}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                {tool.description}
              </p>

              <div className="text-2xs font-semibold text-slate-500 border-t border-slate-200/60 pt-1.5">
                {tool.detail}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
