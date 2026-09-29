import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle, HeadingLevel, AlignmentType } from 'docx';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import { StructuredAuditResponse } from '../types/agent';

export class DocumentGenerator {
  /**
   * Tool 3: Generación de documentos descargables
   * Formatos obligatorios: Word (.docx), Excel (.xlsx), PDF (.pdf), JPG (tarjeta resumen infográfica)
   */

  /**
   * 1. Export to Microsoft Word (.docx)
   */
  public static async generateWord(response: StructuredAuditResponse): Promise<void> {
    const primary = response.primaryCitation;
    const alert = response.alerts[0];

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            // Title Header
            new Paragraph({
              text: 'INFORME TÉCNICO DE INTERPRETACIÓN NORMATIVA Y AUDITORÍA',
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
              spacing: { after: 200 }
            }),
            new Paragraph({
              text: `Agente de Inteligencia Artificial: AgriNorma AI — Asistente de Auditoría`,
              alignment: AlignmentType.CENTER,
              spacing: { after: 300 }
            }),

            // Metadata Table
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph({ text: 'Auditor Evaluador:', style: 'strong' })] }),
                    new TableCell({ children: [new Paragraph({ text: 'Juan Javier (Candidato a Auditor ISO/IEC 17065)' })] })
                  ]
                }),
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph({ text: 'Organismo de Certificación:', style: 'strong' })] }),
                    new TableCell({ children: [new Paragraph({ text: 'CAAE c/o FoodPLUS GmbH & AGROCALIDAD' })] })
                  ]
                }),
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph({ text: 'Normativa Evaluada:', style: 'strong' })] }),
                    new TableCell({ children: [new Paragraph({ text: primary.norm })] })
                  ]
                }),
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph({ text: 'Criterio / Artículo:', style: 'strong' })] }),
                    new TableCell({ children: [new Paragraph({ text: `${primary.code} — ${primary.title}` })] })
                  ]
                }),
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph({ text: 'Nivel de Cumplimiento:', style: 'strong' })] }),
                    new TableCell({ children: [new Paragraph({ text: primary.level })] })
                  ]
                }),
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph({ text: 'Fecha de Emisión:', style: 'strong' })] }),
                    new TableCell({ children: [new Paragraph({ text: response.generationTimestamp })] })
                  ]
                })
              ]
            }),

            new Paragraph({ text: '', spacing: { after: 200 } }),

            // Section 1: Consulta Original
            new Paragraph({
              text: '1. CONSULTA FORMULADA POR EL AUDITOR / OPERADOR',
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
              text: `"${response.originalQuery}"`,
              spacing: { after: 200 }
            }),

            // Section 2: Detección de Premisas Falsas y Alertas
            new Paragraph({
              text: '2. DICTAMEN DE ALERTAS Y EVALUACIÓN DE PREMISAS FALSAS',
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: alert ? `[${alert.severity}] ${alert.title}\n` : 'Conforme\n',
                  bold: true
                }),
                new TextRun({
                  text: alert ? alert.description : 'No se detectaron premisas erróneas.'
                })
              ],
              spacing: { after: 200 }
            }),

            // Section 3: Cita Normativa Exacta
            new Paragraph({
              text: '3. CITA TEXTUAL DE LA FUENTE NORMATIVA OFICIAL',
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Fuente: ${primary.sourceDocument} — ${primary.chapter}\n`,
                  italics: true
                }),
                new TextRun({
                  text: `"${primary.exactQuote}"`,
                  bold: true
                })
              ],
              spacing: { after: 200 }
            }),

            // Section 4: Explicación Simple
            new Paragraph({
              text: '4. EXPLICACIÓN EN LENGUAJE ACCESIBLE (NO EXPERTOS / PRODUCTORES)',
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
              text: response.simpleExplanation,
              spacing: { after: 200 }
            }),

            // Section 5: Ejemplo Aplicado al Contexto de Auditoría
            new Paragraph({
              text: '5. EJEMPLO PRÁCTICO EN CONTEXTO DE AUDITORÍA',
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
              text: `Escenario de Campo:\n${response.auditExample.scenario}`,
              spacing: { after: 100 }
            }),
            new Paragraph({
              text: `Acción del Auditor:\n${response.auditExample.auditorAction}`,
              spacing: { after: 100 }
            }),
            new Paragraph({
              text: `Evidencia Documental a Solicitar:\n${response.auditExample.evidenceToReview.join(', ')}`,
              spacing: { after: 100 }
            }),
            new Paragraph({
              text: `Tipificación del Hallazgo:\n${response.auditExample.potentialFinding}`,
              spacing: { after: 300 }
            }),

            // Sign-off
            new Paragraph({
              text: '__________________________________________________',
              alignment: AlignmentType.CENTER
            }),
            new Paragraph({
              text: 'AgriNorma AI — Asistente Inteligente de Certificación Agroalimentaria',
              alignment: AlignmentType.CENTER
            })
          ]
        }
      ]
    });

    const blob = await Packer.toBlob(doc);
    this.downloadBlob(blob, `Informe_Auditoria_${primary.code.replace(/[\s.]+/g, '_')}.docx`);
  }

  /**
   * 2. Export to Microsoft Excel (.xlsx)
   */
  public static generateExcel(response: StructuredAuditResponse): void {
    const primary = response.primaryCitation;
    const alert = response.alerts[0];
    const fp = response.falsePremisesAnalysis[0];

    const data = [
      ['INFORME Y MATRIZ DE AUDITORÍA NORMATIVA — AGRINORMA AI'],
      ['Organismo de Certificación', 'CAAE c/o FoodPLUS GmbH & AGROCALIDAD (Acreditación ISO/IEC 17065)'],
      ['Auditor Evaluador', 'Juan Javier (Candidato a Auditor ISO/IEC 17065)'],
      ['Fecha de Emisión', response.generationTimestamp],
      ['ID de Consulta / Dictamen', response.queryId],
      [],
      ['CAMPO', 'DETALLE / EVALUACIÓN'],
      ['Normativa Aplicable', primary.norm],
      ['Capítulo / Módulo', primary.chapter],
      ['Código de Criterio / Artículo', primary.code],
      ['Título del Requisito', primary.title],
      ['Nivel de Obligación', primary.level],
      ['Consulta Realizada', response.originalQuery],
      ['Detección de Premisa Falsa', fp ? fp.premiseText : 'Ninguna (Premisa válida)'],
      ['Corrección Técnica', fp ? fp.correction : 'N/A'],
      ['Nivel de Alerta', alert ? alert.severity : 'INFORMATIVA'],
      ['Detalle de Alerta', alert ? alert.title : 'Conforme'],
      ['Cita Oficial Textual', primary.exactQuote],
      ['Explicación Simple', response.simpleExplanation],
      ['Escenario de Auditoría', response.auditExample.scenario],
      ['Acción del Auditor', response.auditExample.auditorAction],
      ['Evidencias a Revisar', response.auditExample.evidenceToReview.join(' | ')],
      ['Hallazgo / No Conformidad', response.auditExample.potentialFinding]
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);

    // Auto-fit column widths
    worksheet['!cols'] = [{ wch: 30 }, { wch: 80 }];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Dictamen_Auditoria');

    XLSX.writeFile(workbook, `Matriz_Auditoria_${primary.code.replace(/[\s.]+/g, '_')}.xlsx`);
  }

  /**
   * 3. Export to Adobe PDF (.pdf)
   */
  public static generatePdf(response: StructuredAuditResponse): void {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const primary = response.primaryCitation;
    const alert = response.alerts[0];
    let y = 15;

    // Header bar
    doc.setFillColor(0, 104, 55); // CAAE Corporate Green #006837
    doc.rect(14, y, 182, 12, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('ORGANISMO DE CERTIFICACIÓN CAAE — AGRINORMA AI', 20, y + 8);
    y += 17;

    // Subtitle & Auditor info
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.text(`Auditor: Juan Javier | Acreditación ISO/IEC 17065 | Fecha: ${response.generationTimestamp}`, 15, y);
    y += 6;

    // Norm info box
    doc.setFillColor(243, 244, 246);
    doc.rect(14, y, 182, 18, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(17, 24, 39);
    doc.text(`Norma: ${primary.norm}`, 17, y + 6);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(`Criterio: ${primary.code} — ${primary.title}`, 17, y + 12);
    y += 24;

    // Alert Banner if critical
    if (alert && alert.severity !== 'INFORMATIVA') {
      const isCritical = alert.severity === 'CRITICA';
      doc.setFillColor(isCritical ? 254 : 254, isCritical ? 226 : 243, isCritical ? 226 : 199);
      doc.rect(14, y, 182, 16, 'F');
      doc.setTextColor(isCritical ? 185 : 180, isCritical ? 28 : 83, isCritical ? 28 : 9);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.text(`[${alert.severity}] ${alert.title}`, 17, y + 6);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      const alertLines = doc.splitTextToSize(alert.description, 175);
      doc.text(alertLines, 17, y + 11);
      y += 22;
    }

    // 1. Cita Oficial
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('1. Cita Oficial Textual de la Fuente Normativa:', 15, y);
    y += 5;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const quoteLines = doc.splitTextToSize(`"${primary.exactQuote}"`, 180);
    doc.text(quoteLines, 15, y);
    y += quoteLines.length * 4.2 + 4;

    // 2. Explicación Simple
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('2. Explicación Simple para Productores / No Expertos:', 15, y);
    y += 5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const simpleLines = doc.splitTextToSize(response.simpleExplanation, 180);
    doc.text(simpleLines, 15, y);
    y += simpleLines.length * 4.2 + 4;

    // 3. Ejemplo en Auditoría
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('3. Ejemplo Práctico en Contexto de Auditoría:', 15, y);
    y += 5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    const exLines = doc.splitTextToSize(`Escenario: ${response.auditExample.scenario}`, 180);
    doc.text(exLines, 15, y);
    y += exLines.length * 4.2 + 2;

    const actionLines = doc.splitTextToSize(`Acción del Auditor: ${response.auditExample.auditorAction}`, 180);
    doc.text(actionLines, 15, y);
    y += actionLines.length * 4.2 + 2;

    const findingLines = doc.splitTextToSize(`Dictamen / Hallazgo: ${response.auditExample.potentialFinding}`, 180);
    doc.text(findingLines, 15, y);
    y += findingLines.length * 4.2 + 8;

    // Footer signature
    doc.setDrawColor(200, 200, 200);
    doc.line(15, y, 195, y);
    y += 6;
    doc.setFont('helvetica', 'bold');
    doc.text('Auditor: Juan Javier | CAAE c/o FoodPLUS GmbH & AGROCALIDAD (ISO/IEC 17065)', 15, y);
    doc.text('Documento Oficial de Preparación de Auditoría', 130, y);

    doc.save(`Dictamen_Normativo_${primary.code.replace(/[\s.]+/g, '_')}.pdf`);
  }

  /**
   * 4. Export to JPG Card (Generates clean canvas image download)
   */
  public static generateJpgCard(response: StructuredAuditResponse): void {
    const primary = response.primaryCitation;
    const alert = response.alerts[0];
    const isCritical = alert && alert.severity === 'CRITICA';

    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 1200, 800);
    bgGrad.addColorStop(0, '#0f172a');
    bgGrad.addColorStop(1, '#1e293b');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 800);

    // Decorative header
    const barGrad = ctx.createLinearGradient(0, 0, 1200, 0);
    barGrad.addColorStop(0, '#10b981');
    barGrad.addColorStop(1, '#06b6d4');
    ctx.fillStyle = barGrad;
    ctx.fillRect(0, 0, 1200, 16);

    // Card Container
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(40, 40, 1120, 720, 20);
    ctx.fill();
    ctx.stroke();

    // Agent Title & Badge
    ctx.fillStyle = '#22c55e';
    ctx.font = 'bold 30px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('CAAE • AGRINORMA AI — FICHA TÉCNICA DE AUDITORÍA', 70, 95);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '17px sans-serif';
    ctx.fillText(`Auditor: Juan Javier | Criterio: ${primary.code} | ${primary.norm}`, 70, 130);

    // Alert Badge
    const alertBg = isCritical ? '#dc2626' : alert && alert.severity === 'MAYOR' ? '#ea580c' : '#059669';
    ctx.fillStyle = alertBg;
    ctx.beginPath();
    ctx.roundRect(850, 65, 280, 50, 10);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(alert ? alert.severity : 'CONFORME', 990, 97);
    ctx.textAlign = 'left';

    // Box 1: Cita Textual
    ctx.fillStyle = 'rgba(15, 23, 42, 0.6)';
    ctx.beginPath();
    ctx.roundRect(70, 170, 1060, 140, 12);
    ctx.fill();

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('📜 Cita Textual Oficial:', 90, 205);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'italic 17px sans-serif';
    this.wrapText(ctx, `"${primary.exactQuote}"`, 90, 238, 1020, 26);

    // Box 2: Explicación Simple
    ctx.fillStyle = 'rgba(15, 23, 42, 0.6)';
    ctx.beginPath();
    ctx.roundRect(70, 335, 1060, 130, 12);
    ctx.fill();

    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('💡 Explicación Sencilla para el Campo:', 90, 370);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '17px sans-serif';
    this.wrapText(ctx, response.simpleExplanation, 90, 405, 1020, 26);

    // Box 3: Alerta de Premisa Falsa o Hallazgo
    ctx.fillStyle = isCritical ? 'rgba(220, 38, 38, 0.15)' : 'rgba(5, 150, 105, 0.15)';
    ctx.strokeStyle = isCritical ? '#ef4444' : '#10b981';
    ctx.beginPath();
    ctx.roundRect(70, 490, 1060, 180, 12);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = isCritical ? '#f87171' : '#6ee7b7';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(alert ? alert.title : 'Evaluación de Cumplimiento:', 90, 525);

    ctx.fillStyle = '#f1f5f9';
    ctx.font = '16px sans-serif';
    const detail = alert ? `${alert.description} ${alert.recommendation}` : response.auditExample.scenario;
    this.wrapText(ctx, detail, 90, 560, 1020, 24);

    // Footer
    ctx.fillStyle = '#64748b';
    ctx.font = '15px sans-serif';
    ctx.fillText('Verificado por AgriNorma AI | GlobalGAP IFA v6 & Cadena de Custodia | Agrocalidad Res. 034', 70, 720);

    // Download JPG
    const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `Ficha_Resumen_${primary.code.replace(/[\s.]+/g, '_')}.jpg`;
    link.click();
  }

  private static wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
    const words = text.split(' ');
    let line = '';
    let currentY = y;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, currentY);
  }

  private static downloadBlob(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
