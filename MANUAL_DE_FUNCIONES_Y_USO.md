# MANUAL DE FUNCIONES Y USO DEL AGENTE DE INTELIGENCIA ARTIFICIAL
## SISTEMA DE INTERPRETACIÓN NORMATIVA Y AUDITORÍA AGROALIMENTARIA: "AGRINORMA AI"

---

### FICHA TÉCNICA DEL PROYECTO
- **Nombre del Agente:** AgriNorma AI — Asistente de Auditoría Agroalimentaria
- **Diseño Visual e Identidad:** Estilo institucional acreditado CAAE / GlobalG.A.P. / AGROCALIDAD
- **Autor / Desarrollador:** Joel Pluas
- **Fecha de Elaboración:** 28 de Septiembre de 2026
- **Tecnologías:** React, TypeScript, Tailwind CSS, Document Exporters (Word, Excel, PDF, Canvas JPG)
- **Normativas Cubiertas:**
  1. GlobalG.A.P. IFA v6 (Frutas y Hortalizas - Smart & GFS)
  2. GlobalG.A.P. Cadena de Custodia (CoC v6)
  3. Norma Orgánica Ecuatoriana (AGROCALIDAD — Resolución 034 e Instructivo)

---

## 1. OBJETIVO DEL AGENTE
Diseñar e implementar un Agente de Inteligencia Artificial funcional, riguroso y autónomo que asista a auditores líderes, inspectores técnicos y directores de certificación en la interpretación de normativas agrícolas internacionales y nacionales.

El agente responde invariablemente con los 4 componentes centrales:
1. **Cita exacta de la fuente normativa oficial** (artículo, criterio, nivel de obligatoriedad y texto literal).
2. **Explicación simple para no expertos** (lenguaje claro y pedagógico orientado a productores y técnicos de campo).
3. **Ejemplo aplicado al contexto de auditoría** (escenario práctico de inspección, protocolo del auditor, evidencias objetivas y tipificación del hallazgo).
4. **Detección proactiva de errores y premisas falsas** (señalamiento inmediato de supuestos falsos).

---

## 2. ARQUITECTURA DE LAS 4 HERRAMIENTAS OBLIGATORIAS

| Herramienta | Función Técnica | Implementación en AgriNorma AI |
| :--- | :--- | :--- |
| **Tool 1: Base de Conocimiento Interna** | Almacenamiento y recuperación semántica de documentos normativos oficiales cargados. | Base de datos indexada con criterios IFA v6 (FV 01 a FV 08), CoC v6 (Secciones 1 a 5) y Agrocalidad Res. 034. |
| **Tool 2: Búsqueda Externa Oficial** | Consulta a fuentes externas oficiales para verificar vigencia, equivalencias o normativas conexas. | Conexión con los sitios web oficiales: `https://globalgap.org/` y `https://www.agrocalidad.gob.ec/`, más normativa comunitaria de la Unión Europea. |
| **Tool 3: Generación de Documentos** | Producción de informes técnicos y matrices de chequeo descargables. | 4 formatos nativos: **Word (.docx)**, **Excel (.xlsx)**, **PDF (.pdf)** e **Imagen JPG (.jpg)**. |
| **Tool 4: Sistema de Alertas** | Monitoreo algorítmico continuo de inconsistencias y premisas falsas. | Alertas categorizadas en: 🚨 **CRÍTICA** (No Conformidad Mayor / Descertificación), ⚠️ **MAYOR** (Cadena de Custodia / Alcance), e ℹ️ **INFORMATIVA**. |

---

## 3. BANCO DE VALIDACIÓN DE 8 PREGUNTAS DEL AUDITOR GLOBALG.A.P.

Las siguientes 8 preguntas fueron diseñadas por un auditor GlobalG.A.P. para verificar la programación del agente:

### 1. ¿Cuál es la superficie máxima que la norma orgánica ecuatoriana determina para determinar un pequeño productor de banano?
- **Respuesta Oficial:** 10 hectáreas en monocultivo y 20 hectáreas en sistema agroforestales.
- **Cita Normativa:** Agrocalidad Resolución 034, Capítulo II de Operadores y Grupos de Productores.

### 2. ¿Cuáles son las condiciones de uso del azufre en la norma orgánica ecuatoriana?
- **Respuesta Oficial:** Producto de origen natural o industrial más o menos refinado Contenido mínimo en elementos nutrientes (porcentaje en masa): 98 % S (245 %: SO3) como fertilizante; y, Fungicida, acaricida, repelente.
- **Cita Normativa:** Agrocalidad Resolución 034, Anexos I (Fertilizantes) y II (Fitosanitarios).

### 3. ¿Cuál es la superficie máxima que la norma orgánica de la Unión Europea determina para determinar un pequeño productor de banano?
- **Respuesta Oficial:** Los documentos cargados no me permite dar una respuesta. He realizado una búsqueda en enlaces externos y la respuesta es: En la normativa orgánica de la Unión Europea (Reglamento UE 2018/848, Art. 36), la definición de pequeño productor para certificación en grupo no fija un límite específico exclusivo para el cultivo de banano, sino que establece un umbral general de hasta 5 hectáreas de superficie agraria útil (SAU) o un volumen de negocios máximo de 25.000 euros anuales de producción ecológica.
- **Flujo Ejecutado:** Activa la Herramienta 2 (Búsqueda Externa Oficial) al no estar en los documentos internos.

### 4. ¿Se puede certificar a un productor que produce y empaca banano bajo las normas IFA y CoC?
- **Respuesta Oficial:** No. Los requisitos de trazabilidad y segregación para los productores que participan en la propiedad o en la producción paralela de productos certificados y no certificados ya están incluidos en el ámbito de la certificación IFA.
- **Falsa Premisa Detectada:** Asumir que el productor-empacador requiere doble certificación.
- **Alerta:** ⚠️ MAYOR — Confusión de alcance normativo.

### 5. ¿En CoC la empresa debe mantener registros precisos de compra y ventas?
- **Respuesta Oficial:** Sí. Es una obligación mayor.
- **Cita Normativa:** GlobalG.A.P. CoC v6 Sección 4 / CoC 04.01 (Balance de Masas).

### 6. ¿En IFA GFS V6 el operador debe tener disponible los registros actualizados de todos los tratamientos químicos aplicados en el material de propagación propio?
- **Respuesta Oficial:** Sí. Es una obligación mayor.
- **Cita Normativa:** GlobalG.A.P. IFA GFS v6 P&C FV 01.02.01.

### 7. ¿Las auditorias de acompañamiento de la finca realizadas por el OC pueden ser consideradas aceptables para mantener la competencia de un auditor del OC de la finca globalgap opción 1?
- **Respuesta Oficial:** Sí.
- **Cita Normativa:** GlobalG.A.P. Reglas Generales para Organismos de Certificación (OC), Anexo de Competencias.

### 8. ¿En el ámbito de plantas qué incluye la manipulación del producto?
- **Respuesta Oficial:** Incluye cualquier tipo de manipulación postcosecha de los productos, tal como almacenamiento, el tratamiento químico, el recorte, el lavado o cualquier manipulación donde el producto cosechado pueda tener contacto físico con otros materiales y sustancias.
- **Cita Normativa:** GlobalG.A.P. IFA v6 Glosario Oficial y Ámbito de Plantas (FV 07 / FV 08).

---

## 4. INSTRUCCIONES DE DESPLIEGUE Y ACCESO PÚBLICO

1. **Servidor Local Activo:** `http://localhost:5173`
2. **Generación de Enlace Público Inmediato:**
   \`\`\`bash
   npx localtunnel --port 5173
   \`\`\`
   O mediante Vercel:
   \`\`\`bash
   npx vercel --prod
   \`\`\`

---
*AgriNorma AI — Sistema de Interpretación Normativa para Auditores Agroalimentarios*
