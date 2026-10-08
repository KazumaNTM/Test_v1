Test de estudio interactivo — Memoria maestra del proyecto

(README OFICIAL · pégalo COMPLETO al inicio de cada conversación con la IA)



Este documento es la memoria del proyecto: estado, decisiones cerradas y

flujos de trabajo. Contiene todo el contexto necesario para continuar el

desarrollo sin depender de conversaciones largas.



1 · QUÉ ES

Aplicación web estática para tests de opción múltiple generados a partir

de material de estudio (PDFs). Sin servidor, sin dependencias externas,

100% offline. Diseño glassmorphism iOS: fondo de aurora animado, vidrio

translúcido, tema claro/oscuro. Incluye memoria de progreso, repaso

inteligente de falladas, reanudación de tests interrumpidos y botón QR

para abrir en el móvil.

\- Uso: personal · Alojamiento: GitHub Pages (activo)

\- Navegadores objetivo: Brave PC (Chromium) · Brave iPhone 15 Pro Max (WebKit)

\- Idioma de la interfaz: español

\- Historia: nació con el banco de inglés (verbos, v1); después se añadió

&#x20; el banco de HTML (v2) y el de CSS (v2.3). Desde v2.2 hay selector de

&#x20; materia en pantalla de inicio: el motor es único y los bancos conviven

&#x20; sin sobrescribirse.



2 · ESTRUCTURA DE ARCHIVOS



&#x20;   index.html           Estructura (sin datos ni lógica)

&#x20;   css/estilos.css      Diseño glass, aurora, claro/oscuro

&#x20;   bancos/verbos.js     Banco de verbos (expone BANCO\_VERBOS)

&#x20;   bancos/html.js       Banco de HTML (expone BANCO\_HTML)

&#x20;   bancos/css.js        Banco de CSS (expone BANCO\_CSS)

&#x20;   js/memoria.js        Persistencia (única vía de acceso al disco)

&#x20;   js/bancos.js         Registro de materiales (CATALOGO) + elige activo

&#x20;   js/qr.js             Codificador QR embebido (offline)

&#x20;   js/app.js            Motor del test

&#x20;   README.md            Esta memoria maestra

&#x20;   PLANTILLA-BANCO.txt  Instrucciones para crear bancos nuevos (no es

&#x20;                        parte de la web; se entrega a la IA junto con

&#x20;                        el PDF del material)



Orden de carga: bancos/\* → memoria.js → bancos.js → qr.js → app.js.

Autodiagnóstico: si al abrir la web aparece un banner rojo, indica

exactamente qué archivo falta o está mal ubicado.



3 · REGLAS DE ORO

1\. app.js no conoce el contenido ni el disco · los bancos no contienen

&#x20;  lógica · memoria.js es la única vía de persistencia.

2\. Nada numérico fijo en el sitio: total de preguntas, letras y conteos

&#x20;  de secciones se calculan dinámicamente desde el banco activo.

3\. Scripts clásicos (no módulos ES) → doble clic en index.html funciona.

4\. js/bancos.js decide el banco activo: el recordado en el navegador

&#x20;  (tv:material) o el primero del catálogo disponible.



4 · CONTRATO DEL BANCO (bancos/nombre.js)

Cada banco es un archivo en bancos/ con variable única y exposición:



&#x20;   const BANCO\_NOMBRE = {

&#x20;     meta: { id, titulo, subtitulo, descripcion, nota },

&#x20;     secciones: { A:{nombre,color}, /\* letras libres \*/ },

&#x20;     preguntas: \[ { s, q, o:\[...], c, e } ]  // c = índice 0-based correcto

&#x20;   };

&#x20;   window.BANCO\_NOMBRE = BANCO\_NOMBRE;



\- Y una línea en CATALOGO (js/bancos.js):

&#x20; {id:"…",var:"BANCO\_NOMBRE",titulo:"…",subtitulo:"…"}

\- Campos extra (ref, d…) se ignoran sin error.

\- Identidad de pregunta = hash de su texto: reordenar el banco NO rompe

&#x20; el historial; MODIFICAR el texto de una pregunta resetea su estadística.

\- meta.id distinto → historiales independientes por material.



5 · ESTADO ACTUAL (v2.3 — verificado en local, sin errores)

\- Selector de materia en pantalla de inicio (chip desplegable, mismo

&#x20; patrón que el de secciones). Muestra título + subtítulo + nº de

&#x20; preguntas de cada material. Cambiar de materia recarga la página.

&#x20; La última materia elegida se recuerda por dispositivo (tv:material).

\- Materiales disponibles:

&#x20; · verbos-regulares-irregulares-v1 — "Test de verbos" · 61 preguntas

&#x20;   (A=23 Paradigmas · B=10 Patrones · C=17 Significados · D=11 Regulares).

&#x20; · html-fundamentos-v1 — "Test de HTML" · 40 preguntas (A=12 · B=10 ·

&#x20;   C=10 · D=8). Fuente: HTMLCSSJSCombined.pdf (Nematrian).

&#x20; · css-fundamentos-selectores-v1 — "Test de CSS" · N preguntas

&#x20;   (A=Fundamentos, sintaxis y jerarquía · B=Selectores y pseudo-clases ·

&#x20;   C=Propiedades, unidades y colores · D=Reglas, animaciones y layout).

&#x20;   Fuente: mismo PDF Nematrian — bloques HTML y CSS cubiertos; falta el

&#x20;   bloque JS.

\- Progreso, falladas y sesiones interrumpidas aislados por meta.id;

&#x20; progreso.json compatible sin cambios (contiene todos los materiales).

\- Diseño vigente: menús translúcidos con overlay blur 5px · tarjetas

&#x20; centradas verticalmente · segmented control y switch iOS · grano

&#x20; sutil · cronómetro con dígitos tabulares.

\- Tema: claro/oscuro con toggle (arriba derecha), persistido;

&#x20; primera visita según el sistema.

\- Eliminados tras la migración: js/banco.js y js/banco-verbos.js.



6 · USO LOCAL (PC)

Doble clic en index.html. El botón QR detecta file:// y muestra una

guía con dos soluciones (servidor local o GitHub Pages).



7 · USO EN IPHONE (QR)

\- GitHub Pages (definitivo): escanear el QR desde la URL pública

&#x20; funciona desde cualquier lugar.

\- En casa sin Pages: "python -m http.server 8000" en la carpeta →

&#x20; abrir http://TU-IP:8000 en el PC (IP con ipconfig) → botón QR →

&#x20; escribir la IP en el campo → escanear con el iPhone.

\- Consejo: Brave como navegador predeterminado en iOS (Ajustes).



8 · AÑADIR UN NUEVO MATERIAL

1\. Conversación nueva con la IA: pegar este README + PLANTILLA-BANCO.txt

&#x20;  y adjuntar el PDF del material nuevo.

2\. La IA genera el banco por lotes según la plantilla → guardar como

&#x20;  bancos/nombre.js (UTF-8, "Todos los archivos (\*.\*)").

3\. Pedir a la IA: "integra el material nuevo". La IA entrega

&#x20;  js/bancos.js e index.html COMPLETOS ya modificados → sobrescribir

&#x20;  ambos. NUNCA editarlos a mano (ver §15).

4\. Ctrl+F5. El selector muestra el material solo; nada más que tocar.

Regla crítica: la IA debe entregar JavaScript plano que empiece con

"const BANCO\_NOMBRE = {". Si aparece "cells" o "nbformat" = notebook

de Jupyter → inválido, pedir reentrega.



9 · AMPLIAR UNA SECCIÓN (regla: cada sección = test completo)

La no-repetición se aplica DENTRO de cada sección; el mismo tema puede

aparecer en varias secciones. Flujo por LOTES (por límite de longitud de

respuesta): cada ejecución devuelve el banco COMPLETO con las preguntas

nuevas añadidas — nunca fragmentos. Reglas: conservar intactas las

preguntas existentes (protegen el historial), no repetir temas ya

cubiertos en esa sección, mantener meta.id, índice correcto variando de

posición, explicación citando el texto fuente.



10 · PROGRESO.JSON (MEMORIA)

\- Cada test terminado se registra automáticamente (localStorage, claves

&#x20; tv:progreso · tv:sesion · tv:tema · tv:material).

\- PC: Historial → "Vincular progreso.json" → el archivo real se

&#x20; actualiza tras cada intento. Si tras recargar aparece "pendiente":

&#x20; pulsar "Reactivar vínculo" (normal en Chromium).

\- iPhone: Exportar/Importar (el archivo viaja por AirDrop/iCloud; al

&#x20; importar se fusiona sin duplicar).

\- Reset: botón "Borrar todo el progreso" o edición manual del JSON.



11 · DECISIONES CERRADAS (NO RE-DEBATIR)

\- Selector de materia = chip desplegable en la tarjeta de inicio;

&#x20; cambiar de materia recarga la página; se recuerda la última elección

&#x20; por dispositivo.

\- CERO EDICIONES MANUALES: nunca modificar a mano un archivo existente

&#x20; del proyecto, ni siquiera una coma o una línea. Todo cambio se recibe

&#x20; de la IA como archivo COMPLETO listo para sobrescribir.

\- Sin badge "DIFICULTAD ALTA"; sin emojis decorativos en botones de

&#x20; modo; los símbolos funcionales ✔/✘ del feedback se mantienen.

\- Enter NO es atajo (eliminado expresamente).

\- Filtro de sección = test filtrado; cambiar sección durante el test lo

&#x20; REINICIA (aviso en el menú).

\- Sin responder computa como error/fallada.

\- "Repetir mis falladas" = intento actual (Resultados) · "Entrenar

&#x20; falladas" = histórico del banco (Historial).

\- Guardado de archivos: "Todos los archivos (\*.\*)" + codificación UTF-8.



12 · ATAJOS DE TECLADO (PC)

1–4 o A–D responder · →/← navegar · Escape cerrar menús y modales ·

↑/↓ navegar el menú de secciones y el de materia



13 · PENDIENTES (ROADMAP)

1\. Bloque JS del PDF Nematrian → banco aparte (BANCO\_JS); con el

&#x20;  selector es trivial.

2\. Subir v2.3 a GitHub y verificar Pages (borrar js/banco.js y

&#x20;  js/banco-verbos.js del repo si aún figuran).

3\. Mejoras UI propuestas sin confirmar: barra de navegación sticky en

&#x20;  el quiz, animación de entrada escalonada, meta theme-color dinámica,

&#x20;  título de pestaña dinámico durante el quiz.

4\. Banner diagnóstico v2: distinguir "archivo no encontrado" vs

&#x20;  "formato incorrecto".

5\. Ampliación de la sección C del banco de verbos (lotes definidos,

&#x20;  no ejecutada).

6\. Fase futura: PWA instalable.



14 · CHANGELOG

\- v1 (verbos): banco de 61 preguntas, arquitectura modular de 7

&#x20; archivos, memoria, QR, temas, historial, falladas, reanudación.

\- v1.1: banner de autodiagnóstico en index.html.

\- v1.2: paquete de contraste (vidrios más opacos, tokens de texto

&#x20; reforzados, clase .glass para el menú, overlay al abrir menú desde

&#x20; inicio), título y descripción centrados.

\- v1.3: menú más translúcido (--glass-menu), desenfoque 5px, texto de

&#x20; ayuda del modo centrado.

\- v1.4: centrado vertical de tarjetas, cronómetro tabular-nums.

\- v2 (HTML): banco html-fundamentos-v1 (40 preguntas).

\- v2.1: README unificado como memoria maestra.

\- v2.2 (multi-material): carpeta bancos/ + registro js/bancos.js

&#x20; (CATALOGO) + selector de materia + memoria recuerda la materia

&#x20; elegida (tv:material).

\- v2.2.1: regla de entrega en texto plano para todos los archivos

&#x20; (incluido este README), evita corrupción al copiar desde el chat.

\- v2.3: banco de CSS (tercer material: css-fundamentos-selectores-v1,

&#x20; integrado en CATALOGO e index.html) · PLANTILLA-BANCO.txt creada y

&#x20; registrada · regla de CERO EDICIONES MANUALES tras incidente (coma

&#x20; faltante en js/bancos.js editado a mano → banner rojo; resuelto

&#x20; sobrescribiendo el archivo completo).



15 · PROTOCOLO DE TRABAJO CON LA IA (cómo trabajo yo)

\- Conversación nueva: pegar este README completo al inicio.

\- Enviar solo los archivos implicados en la tarea del día; el resto

&#x20; queda resumido aquí.

\- Varios archivos en un mismo mensaje: separar cada uno con una línea

&#x20; === nombre.ext === indicando su nombre.

\- Archivos repartidos en varios mensajes: la IA no analiza ni responde

&#x20; nada hasta recibir el aviso "listo".

\- Ningún cambio sin propuesta previa (qué y por qué) y confirmación

&#x20; explícita del dueño.

\- Entregas: archivos COMPLETOS listos para sobrescribir, nunca

&#x20; fragmentos parciales.

\- CERO EDICIONES MANUALES (crítico): ante cualquier cambio en un

&#x20; archivo existente —incluso añadir una línea al CATALOGO o un script

&#x20; a index.html—, pedir a la IA el archivo COMPLETO actualizado y

&#x20; sobrescribir. Motivo: una edición mínima mal hecha rompe el archivo

&#x20; y cuesta diagnosticarla (caso real v2.3: coma faltante en

&#x20; js/bancos.js → banner rojo).

\- FORMATO DE ENTREGA (crítico): cada archivo —TAMBIÉN este README.md—

&#x20; se entrega dentro de un bloque de código de TEXTO PLANO, igual que

&#x20; los .js, nunca como markdown formateado/renderizado. Motivo: al

&#x20; copiar markdown formateado se pierden los símbolos (#, ·, guiones,

&#x20; sangrías) y el documento queda corrupto. Copiar siempre el contenido

&#x20; tal cual está dentro del bloque.

\- Respuestas breves y directas; una sola tarea por conversación.

\- Al cerrar una sesión con cambios: pedir la actualización de este

&#x20; README y guardar la versión nueva.

