PLANTILLA-BANCO — Instrucciones para crear bancos de preguntas
==============================================================
Este archivo NO forma parte de la web: es una herramienta para el dueño
del proyecto. Se entrega a la IA junto con el PDF del material nuevo.

--------------------------------------------------------------
USO (PASOS DEL DUEÑO)
--------------------------------------------------------------
1. Abrir una conversación nueva con la IA.
2. Pegar el README.md del proyecto + este archivo completo.
3. Adjuntar el PDF del material nuevo.
4. Pedir: "Genera el banco de preguntas siguiendo exactamente este
   formato, por lotes de 15-20 preguntas".
5. Guardar la entrega como bancos/nombre.js
   (Bloc de notas → UTF-8 → "Todos los archivos (*.*)").
6. Pedir a la IA: "integra el material nuevo" → entrega js/bancos.js
   e index.html COMPLETOS ya modificados. NUNCA editarlos a mano
   (protocolo §15 del README).
7. Abrir index.html → Ctrl+F5. El selector muestra el material solo.

--------------------------------------------------------------
INSTRUCCIONES PARA LA IA (CONTRATO DEL BANCO)
--------------------------------------------------------------
ENTREGA OBLIGATORIA
- JavaScript plano, SIN lógica, SOLO datos.
- Empieza exactamente con: const BANCO_NOMBRE = {
- Termina exactamente con: window.BANCO_NOMBRE = BANCO_NOMBRE;
- NOMBRE = nombre único del material en MAYÚSCULAS sin espacios
  (biologia, quimica, historia…). Nunca reutilizar una variable
  existente (verbos, html, css, js, integracion, ingles…).
- Si la entrega contiene "cells" o "nbformat" es un notebook de
  Jupyter: INVÁLIDO. Pedir reentrega.
- POR LOTES: cada lote devuelve el banco COMPLETO con las preguntas
  nuevas añadidas — nunca fragmentos ni "continuará".

ANTES DE GENERAR
Si el PDF es extenso, proponer primero al dueño: título, lista de
secciones (2 a 4), reparto de preguntas y estimación de preguntas
únicas posibles. Si el PDF llega truncado, decir qué parte se ve.
Solo generar tras el visto bueno.

ESTRUCTURA (ejemplo abajo)
- meta.id: "materia-tema-v1" — único y estable. NUNCA cambiarlo en
  ampliaciones futuras (es la clave del historial de progreso).
- meta.fuente: referencia completa del documento (título,
  institución, edición, año).
- secciones: letras A-D, colores fijos:
  A #f5a524 · B #10b981 · C #38bdf8 · D #f472b6
- preguntas: s (letra de sección) · q (enunciado) · o (4 opciones) ·
  c (índice 0-based de la correcta) · e (explicación) ·
  ref (ubicación de la fuente) · cita (fragmento LITERAL del PDF).
- ref, cita y meta.fuente son metadatos de auditoría: la web los
  ignora sin error y no se muestran. Sirven para verificar cada
  pregunta contra el PDF (buscar la cita con Ctrl+F).

REGLAS DE CALIDAD
1. Basarse EXCLUSIVAMENTE en el contenido del PDF adjunto.
2. Una sola opción correcta; distractores plausibles pero incorrectos
   según el texto.
3. c debe VARIAR de posición entre preguntas (mezclar 0, 1, 2, 3).
4. e cita o parafrasea el texto fuente (rigor literal).
5. Sin conceptos repetidos DENTRO de una sección. El mismo tema puede
   aparecer en otra sección (cada sección = test completo).
6. Todo en español, incluidas las opciones.
7. Trazabilidad: toda pregunta lleva ref (preferir la estructura del
   documento a la página: bloque/capítulo · apartado · figura, y la
   página como complemento) y cita (fragmento literal entre «»,
   lo bastante largo para ser único en el documento).
8. Identidad técnica: NUNCA dos preguntas del mismo banco con el
   mismo enunciado q literal (la identidad es el hash de q; un
   duplicado colisiona en el historial y en el repaso de falladas).
9. En ampliaciones: conservar intactas las preguntas existentes,
   mantener meta.id y añadir las preguntas nuevas SIEMPRE al final
   del array (las sesiones guardadas usan índices). Precisión: editar
   q resetea su estadística; editar o, c, e, ref o cita, no.

AL TERMINAR EL BANCO (recordatorio al dueño)
La integración NO se hace a mano: pedir a la IA "integra el material
nuevo" en tarea aparte (entrega js/bancos.js e index.html COMPLETOS).
La línea que se añade a CATALOGO es solo:
  {id:"materia-tema-v1",var:"BANCO_NOMBRE"}
Título y subtítulo NO van ahí: js/bancos.js los deriva del meta del
banco (Regla de oro 6).

--------------------------------------------------------------
EJEMPLO ILUSTRATIVO — PREGUNTAS FICTICIAS, NO COPIARLAS
(generar siempre preguntas propias a partir del PDF; ref y cita del
ejemplo son también ficticias)
--------------------------------------------------------------
const BANCO_BIOLOGIA={
meta:{
  id:"biologia-celula-v1",
  titulo:"Test de biología",
  subtitulo:"la célula y sus organelos",
  fuente:"Biología Celular, Editorial X, 3.ª ed., 2020",
  descripcion:"Preguntas de opción múltiple basadas estrictamente en el PDF adjunto: estructura celular, organelos, funciones y procesos. Sin conceptos repetidos entre preguntas de una misma sección.",
  nota:"Nota de rigor: [particularidades o decisiones terminológicas del documento original que el test respeta]."
},
secciones:{
  A:{nombre:"Estructura celular",color:"#f5a524"},
  B:{nombre:"Organelos y funciones",color:"#10b981"},
  C:{nombre:"Procesos celulares",color:"#38bdf8"}
},
preguntas:[
{s:"A",q:"¿Cuál organelo es la sede de la respiración celular?",o:["Ribosoma","Mitocondria","Lisosoma","Vacuola"],c:1,e:"El texto describe la mitocondria como la central energética de la célula, sede de la respiración celular.",ref:"Cap. 2 · §2.3 Organelos · pág. 45",cita:"«La mitocondria es la central energética de la célula y sede de la respiración celular.»"},
{s:"A",q:"¿Qué estructura delimita la célula y regula el paso de sustancias?",o:["Pared celular","Membrana plasmática","Citoesqueleto","Retículo endoplasmático"],c:1,e:"Según el texto, la membrana plasmática rodea la célula y controla selectivamente el intercambio de sustancias.",ref:"Cap. 2 · §2.1 La envoltura celular · pág. 38",cita:"«La membrana plasmática rodea la célula y controla selectivamente el intercambio de sustancias.»"},
{s:"B",q:"¿Organelo donde ocurre la fotosíntesis?",o:["Núcleo","Aparato de Golgi","Cloroplasto","Centriolo"],c:2,e:"El texto sitúa la fotosíntesis en el cloroplasto, organelo propio de células vegetales.",ref:"Cap. 3 · §3.2 Plastos · pág. 67",cita:"«La fotosíntesis tiene lugar en el cloroplasto, organelo propio de las células vegetales.»"}
]};

window.BANCO_BIOLOGIA=BANCO_BIOLOGIA;