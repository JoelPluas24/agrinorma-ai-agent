import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ToolInspector } from './components/ToolInspector';
import { FlowVisualizer } from './components/FlowVisualizer';
import { ChatInterface } from './components/ChatInterface';
import { ResponseCard } from './components/ResponseCard';
import { NormExplorer } from './components/NormExplorer';
import { ManualModal } from './components/ManualModal';
import { AgentStepTrace, StructuredAuditResponse } from './types/agent';
import { AgentWorkflow } from './services/agentWorkflow';
import { ShieldCheck, FileCheck, Building2 } from 'lucide-react';

export const App: React.FC = () => {
  const [traces, setTraces] = useState<AgentStepTrace[]>([]);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [activeTool, setActiveTool] = useState<string | undefined>(undefined);
  const [response, setResponse] = useState<StructuredAuditResponse | null>(null);

  // Modals
  const [normExplorerOpen, setNormExplorerOpen] = useState<boolean>(false);
  const [manualOpen, setManualOpen] = useState<boolean>(false);

  // Initialize with official auditor question 1 on first load
  useEffect(() => {
    handleStartupQuery();
  }, []);

  const handleStartupQuery = async () => {
    const defaultQuery = '¿Cuál es la superficie máxima que la norma orgánica ecuatoriana determina para determinar un pequeño productor de banano?';
    handleRunQuery(defaultQuery, 'NORMA_ORGANICA_ECUATORIANA');
  };

  const handleRunQuery = async (query: string, scope?: string) => {
    setIsExecuting(true);
    setTraces([]);
    setActiveTool('ORQUESTADOR');

    try {
      const result = await AgentWorkflow.executeQuery(
        query,
        updatedTraces => {
          setTraces(updatedTraces);
          const currentRunning = updatedTraces.find(t => t.status === 'running');
          if (currentRunning?.toolUsed) {
            setActiveTool(currentRunning.toolUsed);
          }
        },
        scope
      );

      setResponse(result);
      setActiveTool(undefined);
    } catch (error) {
      console.error('Error executing query:', error);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* 1. Header with corporate CAAE branding */}
      <Header
        onOpenNormExplorer={() => setNormExplorerOpen(true)}
        onOpenManual={() => setManualOpen(true)}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 w-full flex-1">
        
        {/* 2. Mandatory 4 Tools Panel */}
        <ToolInspector activeTool={activeTool} />

        {/* 3. 7-Step Decision Flow Tracker */}
        <FlowVisualizer traces={traces} isExecuting={isExecuting} />

        {/* 4. Query Input & 8 Official Auditor Test Questions */}
        <ChatInterface onSendQuery={handleRunQuery} isExecuting={isExecuting} />

        {/* 5. Main Structured Audit Response */}
        {response && (
          <div>
            <div className="flex items-center justify-between mb-2.5 px-1">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-[#006837]" />
                Dictamen Técnico y Cita de Auditoría
              </span>
              <span className="text-2xs text-slate-500 font-medium">
                Conforme a Criterios GlobalG.A.P. & AGROCALIDAD
              </span>
            </div>

            <ResponseCard response={response} />
          </div>
        )}

      </main>

      {/* Modals */}
      <NormExplorer
        isOpen={normExplorerOpen}
        onClose={() => setNormExplorerOpen(false)}
        onSelectCriterio={q => handleRunQuery(q)}
      />

      <ManualModal
        isOpen={manualOpen}
        onClose={() => setManualOpen(false)}
      />

      {/* Institutional Corporate Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">AgriNorma AI</span>
            <span>•</span>
            <span>Sistema de Asistencia Técnica para Auditorías de Certificación</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>GlobalG.A.P. IFA v6 & CoC v6</span>
            <span>•</span>
            <span>Agrocalidad Res. 034</span>
            <span>•</span>
            <span>Entorno Auditor CAAE</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
