Test de estudio interactivo — Memoria maestra del proyecto
(README OFICIAL · v2.7 · pégalo COMPLETO al inicio de cada conversación con la IA)

Este documento es la memoria del proyecto: estado, decisiones cerradas y
flujos de trabajo. Contiene todo el contexto necesario para continuar
el desarrollo sin depender de conversaciones largas.

1 · QUÉ ES
Aplicación web estática para tests de opción múltiple generados a partir
de material de estudio (PDFs). Sin servidor, sin dependencias externas,
100% offline. Diseño glassmorphism iOS: fondo de aurora animado o foto
personalizable (velo y opacidad de vidrio ajustables), vidrio translúcido,
tema claro/oscuro. Incluye memoria de progreso, repaso inteligente de
falladas, reanudación de tests interrumpidos y botón QR para abrir en el
móvil.
- Uso: personal · Alojamiento: GitHub Pages (activo)
- Navegadores objetivo: Brave PC (Chromium) · Brave iPhone 15 Pro Max (WebKit)
- Idioma de la interfaz: español
- Historia: nació con el banco de inglés (verbos, v1); después se añadió
  el banco de HTML (v2), el de CSS (v2.3) y los de JavaScript e
  integración (v2.6). Desde v2.2 hay selector de materia en pantalla de
  inicio: el motor es único y los bancos conviven sin sobrescribirse.
  Desde v2.4 el fondo de pantalla es personalizable. Desde v2.7 los
  bancos incorporan metadatos de trazabilidad (ref, cita, fuente).

2 · ESTRUCTURA DE ARCHIVOS

    index.html           Estructura (sin datos ni lógica)
    css/estilos.css      Diseño glass, aurora, fondos, claro/oscuro
    fondos/              Imágenes de fondo (0000.jpg, 0001.jpg…; solo fotos)
    bancos/verbos.js     Banco de verbos (expone BANCO_VERBOS)
    bancos/html.js       Banco de HTML (expone BANCO_HTML)
    bancos/css.js        Banco de CSS (expone BANCO_CSS)
    bancos/js.js         Banco de JavaScript (expone BANCO_JS)
    bancos/integracion.js Banco de integración (expone BANCO_INTEGRACION)
    js/memoria.js        Persistencia (única vía de acceso al disco)
    js/textos.js         Textos de la interfaz (TXT; existe desde v2.5)
    js/bancos.js         Registro de materiales (CATALOGO) + elige activo
    js/fondos.js         Registro de fondos (CATALOGO_FONDOS)
    js/qr.js             Codificador QR embebido (offline)
    js/app.js            Motor del test
    README.md            Esta memoria maestra
    PLANTILLA-BANCO.txt  Contrato del banco de preguntas (no es parte
                         de la web; se entrega a la IA junto con el PDF
                         del material nuevo)
    PROMPT-BANCO.txt     Prompt maestro reutilizable para pedir bancos
                         a la IA con cualquier PDF (herramienta del
                         dueño; no es parte de la web)

Orden de carga: bancos/* → memoria.js → bancos.js → fondos.js → qr.js →
app.js.
Autodiagnóstico: si al abrir la web aparece un banner rojo, indica
exactamente qué archivo falta o está mal ubicado (cubre los 5 bancos).

3 · REGLAS DE ORO
1. app.js no conoce el contenido ni el disco · los bancos no contienen
   lógica · memoria.js es la única vía de persistencia.
2. Nada numérico fijo en el sitio: total de preguntas, letras y conteos
   de secciones se calculan dinámicamente desde el banco activo.
3. Scripts clásicos (no módulos ES) → doble clic en index.html funciona.
4. js/bancos.js decide el banco activo: el recordado en el navegador
   (tv:material) o el primero del catálogo disponible.
5. js/fondos.js decide los fondos disponibles · la carpeta fondos/ solo
   contiene imágenes, nunca lógica.
6. El título y subtítulo de cada material viven SOLO en su banco
   (meta.titulo / meta.subtitulo); js/bancos.js no los duplica: la línea
   de CATALOGO es solo {id, var}.

4 · CONTRATO DEL BANCO (bancos/nombre.js)
Cada banco es un archivo en bancos/ con variable única y exposición:

    const BANCO_NOMBRE = {
      meta: { id, titulo, subtitulo, fuente, descripcion, nota },
      secciones: { A:{nombre,color}, /* letras libres */ },
      preguntas: [ { s, q, o:[...], c, e, ref, cita } ]
    };
    window.BANCO_NOMBRE = BANCO_NOMBRE;

- Y una línea en CATALOGO (js/bancos.js): {id:"…",var:"BANCO_NOMBRE"}.
  Título y subtítulo NO se escriben ahí: js/bancos.js los deriva del
  meta del banco (Regla de oro 6).
- Campos extra se ignoran sin error. La trazabilidad (v2.7) usa campos
  extra: meta.fuente (referencia del documento) y, por pregunta, ref
  (ubicación) y cita (fragmento LITERAL del PDF). La web no los lee ni
  los muestra: son auditoría del dueño (Ctrl+F de la cita en el PDF).
- Identidad de pregunta = hash FNV-1a del enunciado q (memoria.js):
  reordenar el banco NO rompe el historial; MODIFICAR q resetea su
  estadística; modificar o, c, e, ref o cita NO. Nunca dos preguntas
  del mismo banco con q idéntico literal (colisionarían en historial y
  repaso de falladas). Las preguntas nuevas se añaden SIEMPRE al final
  del array (las sesiones guardadas usan índices).
- meta.id distinto → historiales independientes por material.

5 · ESTADO ACTUAL (v2.7)
- Selector de materia en pantalla de inicio (chip desplegable, mismo
  patrón que el de secciones). Muestra título + subtítulo + nº de
  preguntas de cada material. Cambiar de materia recarga la página.
  La última materia elegida se recuerda por dispositivo (tv:material).
- Materiales disponibles (5 en el selector):
  · verbos-regulares-irregulares-v1 — "Test de verbos" · 61 preguntas
    (A=23 Paradigmas · B=10 Patrones · C=17 Significados · D=11 Regulares).
  · html-fundamentos-v1 — "Test de HTML" · 40 preguntas (A=12 · B=10 ·
    C=10 · D=8). Fuente: HTMLCSSJSCombined.pdf (Nematrian).
  · css-fundamentos-selectores-v1 — "Test de CSS" · 40 preguntas
    (A=10 · B=10 · C=10 · D=10). Ampliado de 20 a 40 por lotes con el
    mismo meta.id → historial intacto.
  · javascript-fundamentos-dom-v1 — "Test de JavaScript" · 40 preguntas
    (A=10 Fundamentos, variables y tipos · B=10 Funciones, eventos y
    statements · C=10 DOM: acceso y manipulación · D=10 Objetos, arrays,
    strings y errores).
  · integracion-html-css-js-v1 — "Test de integración" · 30 preguntas
    (A=8 HTML+CSS · B=8 HTML+JS · C=7 CSS+JS · D=7 los tres juntos:
    feature detection y carga).
    Fuente: mismo PDF Nematrian — los tres bloques (HTML, CSS y JS)
    quedan cubiertos; el banco de integración es transversal.
- En elaboración: ingles-basico-tebaev-v1 — "Test de inglés básico",
  del Cuadernillo de Inglés Básico (TEBAEV, 1.ª ed. 2021). Estructura
  propuesta (pendiente del visto bueno del dueño): A=45 "To be, presente
  y rutinas" (Bloques I–II) · B=40 "Presente continuo y cuantificadores"
  (Bloques III–IV) · C=45 "Comparativos y pasado" (Bloques V–VI) ·
  D=35 "Imperativos, modales y futuro" (Bloques VII–VIII). Total inicial
  165, ampliable hasta ~240 con el mismo meta.id. Estimación del
  material: 200–270 preguntas únicas. Será el primer banco con
  trazabilidad completa (ref + cita + meta.fuente). Nota de la
  conversación de origen: el PDF llegó truncado (solo el Bloque I quedó
  visible); los Bloques II–VIII se pegan por partes.
- Fondos y opacidad (v2.4):
  · Carpeta fondos/ + registro js/fondos.js. Botón en el cluster fijo
    (QR · Fondo · Tema), disponible desde cualquier pantalla.
  · Menú con miniaturas + "Aurora (original)" siempre presente. Al elegir
    un fondo el menú permanece abierto (se cierra con Escape, clic fuera
    o scroll). Fundido cruzado entre fotos y con el aurora, que se pausa
    mientras hay foto activa.
  · Sliders "Opacidad del velo" (0–100, por defecto 60; deshabilitado con
    Aurora) y "Opacidad del vidrio" (0–100, por defecto 100; multiplica
    los 4 tokens de vidrio en ambos temas). Botón "Restablecer ajustes"
    devuelve a 60/100. Guardado en vivo al arrastrar (sin botón aplicar).
  · Persistencia por dispositivo: tv:fondo · tv:velo · tv:vidrio. No
    viajan en progreso.json; valores inválidos o faltantes → Aurora ·
    60 · 100.
- Navegación y chips (v2.5):
  · Botón "Finalizar" en Resultados (primario, a ancho completo, bajo
    las opciones), y en Revisión e Historial (vidrio, cabecera derecha).
    Vuelve al inicio y refresca la tarjeta (progreso, reanudación,
    último intento). El quiz mantiene solo "✕ Salir" (que además guarda
    la sesión para reanudar).
  · Chips de la tarjeta de inicio en rejilla uniforme: mismo ancho por
    columna y misma altura por fila, texto centrado; los textos largos
    se parten en 2 líneas (PC: 5 columnas · iPhone: 2).
- Progreso, falladas y sesiones interrumpidas aislados por meta.id;
  progreso.json compatible sin cambios (contiene todos los materiales).
  Los materiales añadidos en v2.6 arrancan con historial vacío (normal).
- Diseño vigente: menús translúcidos con overlay blur 5px · tarjetas
  centradas verticalmente · segmented control y switch iOS · grano sutil
  · cronómetro con dígitos tabulares · cluster fijo arriba a la derecha
  (QR · Fondo · Tema) · chips de inicio en rejilla uniforme.
- Tema: claro/oscuro con toggle (arriba derecha), persistido; primera
  visita según el sistema. Cambiar de tema adapta velo y vidrio
  manteniendo los porcentajes elegidos.
- Eliminados tras la migración: js/banco.js y js/banco-verbos.js.

6 · USO LOCAL (PC)
Doble clic en index.html. El botón QR detecta file:// y muestra una
guía con dos soluciones (servidor local o GitHub Pages).

7 · USO EN IPHONE (QR)
- GitHub Pages (definitivo): escanear el QR desde la URL pública
  funciona desde cualquier lugar.
- En casa sin Pages: "python -m http.server 8000" en la carpeta →
  abrir http://TU-IP:8000 en el PC (IP con ipconfig) → botón QR →
  escribir la IP en el campo → escanear con el iPhone.
- Consejo: Brave como navegador predeterminado en iOS (Ajustes).

8 · AÑADIR UN NUEVO MATERIAL · NUEVOS FONDOS
MATERIAL:
1. Conversación nueva con la IA usando PROMPT-BANCO.txt (prompt
   maestro, rellenando los [corchetes]): se entregan en el mismo
   mensaje ese prompt + este README + la PLANTILLA-BANCO + el PDF del
   material nuevo. La IA primero propone (estimación, estructura,
   secciones, reparto) y espera el visto bueno del dueño.
2. La IA genera el banco por lotes según la plantilla → guardar como
   bancos/nombre.js (UTF-8, "Todos los archivos (*.*)").
3. Pedir a la IA: "integra el material nuevo". La IA entrega
   js/bancos.js e index.html COMPLETOS ya modificados → sobrescribir
   ambos. NUNCA editarlos a mano (ver §15).
4. Ctrl+F5. El selector muestra el material solo; nada más que tocar.
Regla crítica: la IA debe entregar JavaScript plano que empiece con
"const BANCO_NOMBRE = {". Si aparece "cells" o "nbformat" = notebook
de Jupyter → inválido, pedir reentrega.
FONDOS (flujo corto, sin lotes):
1. Copiar las imágenes a fondos/ con nombres 0000.jpg, 0001.jpg… La
   carpeta se crea con la primera imagen (GitHub no rastrea carpetas
   vacías).
2. Decir a la IA el rango (ej: "del 0000 al 0005") y los títulos propios
   que quieras (por defecto "Fondo N").
3. La IA entrega js/fondos.js COMPLETO → sobrescribir. Ctrl+F5.
Regla: la extensión registrada debe coincidir con la real (0000.jpg, no
.jpeg ni .JPG). Recomendado: JPG, apaisadas, ~1600 px de ancho, <500 KB.

9 · AMPLIAR UNA SECCIÓN (regla: cada sección = test completo)
La no-repetición se aplica DENTRO de cada sección; el mismo tema puede
aparecer en varias secciones. Flujo por LOTES (por límite de longitud de
respuesta): cada ejecución devuelve el banco COMPLETO con las preguntas
nuevas añadidas — nunca fragmentos. Reglas: conservar intactas las
preguntas existentes (protegen el historial), no repetir temas ya
cubiertos en esa sección, mantener meta.id, índice correcto variando de
posición, explicación citando el texto fuente, toda pregunta con ref y
cita, nunca duplicar un enunciado q existente y añadir las nuevas al
final del array (§4).
Ojo: una ampliación llega como "parte 2" con el banco COMPLETO dentro
(creció de 20 a 40 preguntas): se REEMPLAZA el archivo existente, no se
suman archivos.

10 · PROGRESO.JSON (MEMORIA)
- Cada test terminado se registra automáticamente (localStorage, claves
  tv:progreso · tv:sesion · tv:tema · tv:material · tv:fondo · tv:velo ·
  tv:vidrio; las tres últimas son por dispositivo y no viajan en
  progreso.json).
- PC: Historial → "Vincular progreso.json" → el archivo real se
  actualiza tras cada intento. Si tras recargar aparece "pendiente":
  pulsar "Reactivar vínculo" (normal en Chromium).
- iPhone: Exportar/Importar (el archivo viaja por AirDrop/iCloud; al
  importar se fusiona sin duplicar).
- Reset: botón "Borrar todo el progreso" o edición manual del JSON.

11 · DECISIONES CERRADAS (NO RE-DEBATIR)
- Selector de materia = chip desplegable en la tarjeta de inicio;
  cambiar de materia recarga la página; se recuerda la última elección
  por dispositivo.
- Fondos: botón en el cluster fijo (QR · Fondo · Tema), no chip en la
  tarjeta; disponible desde cualquier pantalla.
- Menú de fondos: permanece abierto al elegir fondo (para ajustar el
  velo a continuación); cierra con Escape, clic fuera o scroll.
- Slider de velo deshabilitado con Aurora (el velo solo existe sobre
  una foto); al volver a una foto se reactiva solo.
- Defaults unificados entre temas: velo 60 · vidrio 100; "Restablecer
  ajustes" vuelve a 60/100. Guardado en vivo, sin botón aplicar.
- Ajustes de fondo por dispositivo (tv:fondo · tv:velo · tv:vidrio),
  fuera de progreso.json, con fallback automático a Aurora · 60 · 100.
- Numeración de fondos: 0000, 0001…; títulos "Fondo N" por defecto.
- El botón de fondo no muestra estado (como el de tema); el ✓ del menú
  marca el activo.
- Botón "Finalizar" solo en Resultados, Revisión e Historial (navega al
  inicio); el quiz conserva únicamente "✕ Salir".
- Chips de inicio en rejilla uniforme con texto centrado; se acepta
  texto en 2 líneas antes que desigualar anchos o alturas.
- Formato de CATALOGO: una línea por material, solo {id, var} (Regla
  de oro 6). Adoptado en v2.6; llegó sin documentar de otra conversación
  y quedó incorporado oficialmente.
- CERO EDICIONES MANUALES: nunca modificar a mano un archivo existente
  del proyecto, ni siquiera una coma o una línea. Todo cambio se recibe
  de la IA como archivo COMPLETO listo para sobrescribir.
- Sin badge "DIFICULTAD ALTA"; sin emojis decorativos en botones de
  modo; los símbolos funcionales ✔/✘ del feedback se mantienen.
- Enter NO es atajo (eliminado expresamente).
- Filtro de sección = test filtrado; cambiar sección durante el test lo
  REINICIA (aviso en el menú).
- Sin responder computa como error/fallada.
- "Repetir mis falladas" = intento actual (Resultados) · "Entrenar
  falladas" = histórico del banco (Historial).
- Guardado de archivos: "Todos los archivos (*.*)" + codificación UTF-8.
- Trazabilidad de bancos (v2.7): todo banco nuevo (o ampliado) lleva
  meta.fuente y, por pregunta, ref y cita. Invisibles para la web; su
  función es la auditoría del dueño (Ctrl+F de la cita en el PDF).
  Mostrarlos en pantalla NO está decidido: solo proponerlo si el dueño
  lo pide.
- Identidad técnica (verificada en el código, v2.7): la huella es el
  hash FNV-1a del enunciado q. Editar q resetea la estadística; editar
  o, c, e, ref o cita no. Nunca dos preguntas con q idéntico literal.
  Preguntas nuevas siempre al final del array.
- Puente de títulos: js/bancos.js deriva titulo/subtitulo del meta de
  cada banco (.map sobre CATALOGO) y app.js los lee del CATALOGO ya
  procesado. Coherente con la Regla de oro 6 (verificado en v2.7 tras
  una falsa alarma sobre app.js).

12 · ATAJOS DE TECLADO (PC)
1–4 o A–D responder · →/← navegar · Escape cerrar menús y modales ·
↑/↓ navegar el menú de secciones, el de materia y el de fondos · con un
slider enfocado, las flechas lo ajustan (nativo) y Tab cierra el menú.

13 · PENDIENTES (ROADMAP)
1 · Terminar el banco de inglés (ingles-basico-tebaev-v1): falta el
    visto bueno del dueño a la estructura, pegar los Bloques II–VIII
    del PDF y generar los lotes (15–20 preguntas por entrega);
    después, integración según §8.
2 · Opcional y aplazado: mostrar ref/cita en pantalla (p. ej., una
    línea "Fuente" en Revisión). Requiere tocar app.js: solo proponerlo
    si el dueño lo pide tras usar los metadatos invisibles.
Descartados por el dueño (no volver a proponer): bloque JS del PDF
Nematrian (ya cubierto por el banco v2.6) · mejoras UI v2.3 (barra
sticky, entrada escalonada, theme-color dinámica, título de pestaña
dinámico) · banner diagnóstico v2 (el banner ya cubre los 5 bancos) ·
ampliación de la sección C de verbos · PWA instalable · subida a GitHub
y verificación de Pages (incl. borrar js/banco.js y js/banco-verbos.js
del repo si aún figuran).

14 · CHANGELOG
- v1 (verbos): banco de 61 preguntas, arquitectura modular de 7
  archivos, memoria, QR, temas, historial, falladas, reanudación.
- v1.1: banner de autodiagnóstico en index.html.
- v1.2: paquete de contraste (vidrios más opacos, tokens de texto
  reforzados, clase .glass para el menú, overlay al abrir menú desde
  inicio), título y descripción centrados.
- v1.3: menú más translúcido (--glass-menu), desenfoque 5px, texto de
  ayuda del modo centrado.
- v1.4: centrado vertical de tarjetas, cronómetro tabular-nums.
- v2 (HTML): banco html-fundamentos-v1 (40 preguntas).
- v2.1: README unificado como memoria maestra.
- v2.2 (multi-material): carpeta bancos/ + registro js/bancos.js
  (CATALOGO) + selector de materia + memoria recuerda la materia
  elegida (tv:material).
- v2.2.1: regla de entrega en texto plano para todos los archivos
  (incluido este README), evita corrupción al copiar desde el chat.
- v2.3: banco de CSS (tercer material: css-fundamentos-selectores-v1,
  integrado en CATALOGO e index.html) · PLANTILLA-BANCO.txt creada y
  registrada · regla de CERO EDICIONES MANUALES tras incidente (coma
  faltante en js/bancos.js editado a mano → banner rojo; resuelto
  sobrescribiendo el archivo completo).
- v2.4: fondos de pantalla personalizables — carpeta fondos/ + registro
  js/fondos.js (CATALOGO_FONDOS) + botón en el cluster fijo (QR · Fondo ·
  Tema) con menú de miniaturas y fundido cruzado; el aurora se pausa
  con foto activa y el velo se adapta al tema. Sliders "Opacidad del
  velo" y "Opacidad del vidrio" (defaults 60/100) con "Restablecer
  ajustes" y guardado en vivo. Persistencia por dispositivo: tv:fondo ·
  tv:velo · tv:vidrio (fuera de progreso.json). Orden de carga y
  autodiagnóstico ampliados (js/fondos.js). §13 vaciado por decisión
  del dueño.
- v2.5: botón "Finalizar" en Resultados (primario a ancho completo),
  Revisión e Historial (vidrio en cabecera) → vuelve al inicio y
  refresca la tarjeta. Chips de inicio convertidos a rejilla uniforme
  (mismo ancho/alto por fila, texto centrado, hasta 2 líneas).
- v2.5.1: la versión del README pasa a figurar en su encabezado
  (segunda línea) para identificarla de un vistazo.
- v2.6: dos materiales nuevos — javascript-fundamentos-dom-v1 ("Test de
  JavaScript", 40 preguntas) e integracion-html-css-js-v1 ("Test de
  integración", 30 preguntas), integrados en CATALOGO e index.html ·
  banco de CSS ampliado de 20 a 40 (§5 corregido) · adopción oficial del
  formato de CATALOGO {id, var} con títulos derivados del banco (Regla
  de oro 6; el cambio había llegado sin documentar de otra conversación)
  · autodiagnóstico ampliado a los 5 bancos (incluido BANCO_CSS, que
  faltaba) · §13: nueva tarea de revisión de PLANTILLA-BANCO.txt.
- v2.7: trazabilidad en los bancos — meta.fuente, ref y cita como
  metadatos invisibles de auditoría; verificado contra memoria.js y
  app.js que solo q entra en la huella y que los campos extra se
  ignoran · reglas técnicas de identidad documentadas (editar q resetea;
  editar o/c/e/ref/cita no; nunca duplicar q; nuevas al final) ·
  PLANTILLA-BANCO.txt corregida: línea de CATALOGO al formato {id, var},
  integración siempre vía IA (sin ediciones manuales), trazabilidad y
  reglas nuevas (resuelve la tarea pendiente de v2.6) · PROMPT-BANCO.txt
  creado (prompt maestro reutilizable: fases propuesta → lotes →
  integración) · js/textos.js incorporado al árbol de archivos (existía
  desde v2.5 sin figurar) · puente de títulos de js/bancos.js
  documentado · en elaboración: banco de inglés
  (ingles-basico-tebaev-v1, 165 preguntas previstas).

15 · PROTOCOLO DE TRABAJO CON LA IA (cómo trabajo yo)
- Conversación nueva: pegar este README completo al inicio.
- Enviar solo los archivos implicados en la tarea del día; el resto
  queda resumido aquí.
- Varios archivos en un mismo mensaje: separar cada uno con una línea
  === nombre.ext === indicando su nombre.
- Archivos repartidos en varios mensajes: la IA no analiza ni responde
  nada hasta recibir el aviso "listo".
- Ningún cambio sin propuesta previa (qué y por qué) y confirmación
  explícita del dueño.
- Entregas: archivos COMPLETOS listos para sobrescribir, nunca
  fragmentos parciales.
- CERO EDICIONES MANUALES (crítico): ante cualquier cambio en un
  archivo existente —incluso añadir una línea al CATALOGO o un script
  a index.html—, pedir a la IA el archivo COMPLETO actualizado y
  sobrescribir. Motivo: una edición mínima mal hecha rompe el archivo
  y cuesta diagnosticarla (caso real v2.3: coma faltante en
  js/bancos.js → banner rojo).
- FORMATO DE ENTREGA (crítico): cada archivo —TAMBIÉN este README.md—
  se entrega dentro de un bloque de código de TEXTO PLANO, igual que
  los .js, nunca como markdown formateado/renderizado. Motivo: al
  copiar markdown formateado se pierden los símbolos (#, ·, guiones,
  sangrías) y el documento queda corrupto. Copiar siempre el contenido
  tal cual está dentro del bloque.
- Respuestas breves y directas; una sola tarea por conversación.
- Al cerrar una sesión con cambios: pedir la actualización de este
  README y guardar la versión nueva.