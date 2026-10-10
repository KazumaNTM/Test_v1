/*=== js/textos.js ===
/* ============================================================
   TEXTOS — dueño único de TODOS los textos de la interfaz (v2.5)
   ------------------------------------------------------------
   Regla de oro nº 6: cualquier texto visible o audible de la
   interfaz vive en ESTE archivo. index.html es un esqueleto sin
   textos; sus elementos declaran la clave con:

     data-txt="clave"        contenido visible
     data-txt-title="clave"  tooltip (title)
     data-txt-aria="clave"   accesibilidad (aria-label)
     data-txt-ph="clave"     placeholder de input

   Este archivo los rellena solo al cargar. Los textos que
   dependen de datos (números, secciones, resultados) los escribe
   app.js al vuelo llamando a la función global:

     txt("clave",{n:5,s:"A"})   → sustituye {n} y {s} en la cadena

   Excepciones (viven en index.html a propósito): <noscript> y
   el banner rojo del autodiagnóstico, que deben avisar cuando
   JavaScript o este archivo no cargan. Los títulos de materia
   viven en cada banco (meta.titulo / meta.subtitulo).

   Para cambiar cualquier texto de la web: edita su línea aquí
   y recarga. No toques index.html ni app.js para textos.
   ============================================================ */
const TXT={

/* ===== Cluster fijo (arriba derecha) ===== */
qrTitle:"Abrir en otro dispositivo (QR)",
qrAria:"Abrir en otro dispositivo con QR",
fondoTitle:"Elegir fondo de pantalla",
fondoAria:"Elegir fondo de pantalla",
temaTitle:"Cambiar tema Claro/Oscuro",
temaAria:"Cambiar tema Claro o Oscuro",

/* ===== Pantalla de inicio ===== */
chipPreguntas:"<b>{n}</b> Preguntas",
chipRespuesta:"<b>1</b> Respuesta Correcta",
chipExplicacion:"<b>✔</b> Explicación incluida",
sinTerminar:"Test sin terminar",
continuar:"Continuar",
descartar:"Descartar",
modoInstante:"Corrección Inmediata",
modoFinal:"Corrección al Final",
modoAria:"Modo de corrección",
hintInstante:"Feedback y explicación tras cada respuesta.",
hintFinal:"Responder todo y corriges de una vez.",
shuffle:"Orden aleatorio de preguntas",
comenzar:"Comenzar el Test →",
comenzarSeccion:"Comenzar: Sección {s} →",
verHistorial:"Ver Historial y Progreso",
atajos:"Atajos: <kbd>1</kbd>–<kbd>4</kbd> o <kbd>A</kbd>–<kbd>D</kbd> responder · <kbd>→</kbd> siguiente · <kbd>←</kbd> anterior",
material:"Material",
chipSeccion:"Sección {s}",
chipTodasSecciones:"<b>{n}</b> Secciones ({r})",
ultimoIntento:"Último intento: <b>{ok}/{total}</b> · {et} · {p}%",
reanudarInfo:"Pregunta {cur} de {total} · {et} · {modo}",

/* ===== Quiz ===== */
salir:"✕ Salir",
anterior:"← Anterior",
siguiente:"Siguiente →",
finalizar:"Finalizar ✓",
repasoTag:" · repaso",
correctoFB:"✔ ¡Correcto!",
incorrectoFB:"✘ Incorrecto — la respuesta correcta es la {l}.",
scoreInstant:'<span class="okc">✔ {ok}</span> · <span class="badc">✘ {bad}</span> · pendientes {pend}',
scoreFinal:"Respondidas: {n} / {total}",

/* ===== Resultados ===== */
aciertosRing:"aciertos",
nuevoRecord:"★ Nuevo récord",
resExcelente:"Excelente",
resExcelenteMsg:"Dominio sobresaliente del material",
resMuyBien:"Muy bien",
resMuyBienMsg:"Buen dominio; repasa los fallos puntuales en la revisión",
resAprobado:"Aprobado",
resAprobadoMsg:"Base sólida, pero conviene reforzar los patrones",
resRepasa:"Repasa la lista",
resRepasaMsg:"Vuelve al material, estudia los paradigmas y reintenta el test",
resTitulo:"{t} — {ok} de {total}",
resRepasoTag:" · repaso",
resCierre:".",
sinResponder:" · Sin responder: {n} (computan como error).",
resStats:"Con este banco: {n} {pal} · Mejor: {mejor}% · Media: {media}%",
sIntento:"intento",
pIntentos:"intentos",
tiempoEmpleado:"Tiempo empleado:",
repetirFalladasN:"Repetir mis falladas ({n})",
revisarRespuestas:"Revisar respuestas",
repetirTest:"↻ Repetir test",
historial:"Historial",

/* ===== Revisión ===== */
volver:"← Volver",
revisionDetallada:"Revisión detallada",
tabTodas:"Todas",
tabFalladas:"Solo falladas",
tuRespuesta:" — tu respuesta",
sinResponderTag:"sin responder",
preguntaNum:" · Pregunta {n}",
sinFallos:"No fallaste ninguna pregunta.",

/* ===== Historial ===== */
historialYProgreso:"Historial y progreso",
resumenTitulo:"Resumen — {t}",
hIntentos:"intentos",
hMejor:"mejor nota",
hMedia:"nota media",
hTiempo:"tiempo total",
entrenarFalladas:"Entrenar mis falladas ({n})",
sinPendientes:"Sin preguntas pendientes de repaso en este banco.",
docProgreso:"Documento de progreso",
docProgresoNota:"Los intentos se guardan automáticamente en este navegador. Con el archivo <code>progreso.json</code> puedes respaldarlos, llevarlos a otro dispositivo (iPhone ↔ PC) o resetearlos a mano.",
exportar:"Exportar progreso.json",
importar:"Importar progreso.json",
desvincular:"Desvincular archivo",
vinculadoNota:"Vinculado: progreso.json se actualiza tras cada test.",
reactivar:"Reactivar vínculo",
reactivarNota:"El permiso del archivo caducó al recargar; reactívalo para seguir actualizándolo.",
vincular:"Vincular progreso.json",
vincularNota:"Guarda y actualiza el progreso en un archivo real de tu disco (PC).",
borrarProgreso:"Borrar todo el progreso",
borrarTitulo:"¿Borrar el progreso?",
borrarMsg:"Se eliminarán todos los intentos registrados en este navegador (y en el archivo vinculado). Esta acción no se puede deshacer.",
siBorrar:"Sí, borrar",
lsBloqueado:"Este navegador está bloqueando el almacenamiento local: el progreso no se guardará entre sesiones. Usa exportar/importar.",
intentosRegistrados:"Intentos registrados ({n})",
aunNoIntentos:"Aún no hay intentos. Termina un test para empezar tu historial.",
etqRepaso:"Repaso",
etqTodas:"Todas",
etqRepasoFalladas:"Repaso de falladas",
etqSeccion:"Sección {s}",
etqTodasSecciones:"Todas las secciones",
modoInmediata:"corrección inmediata",
modoAlFinal:"corrección al final",
modoInmediataCorto:"inmediata",
modoAlFinalCorto:"al final",

/* ===== Menú de secciones ===== */
menuSeccionAria:"Selector de sección",
elegirSeccion:"Elegir sección",
cambiarSeccion:"Cambiar de sección",
warnSeccion:"Cambiar de sección reinicia el test",
todasLasSecciones:"Todas las Secciones",
leyendaNota:"Los colores coinciden con los badges del test y las barras de resultados.",

/* ===== Menú de materias ===== */
menuMateriaAria:"Selector de materia",
elegirMateria:"Elegir materia",
warnMateria:"Cambiar de materia recarga la página",
matSub:"{sub} · {n} preguntas",

/* ===== Menú de fondos ===== */
menuFondoAria:"Selector de fondo",
elegirFondo:"Elegir fondo",
fondosVacio:"Aún no hay fondos registrados. Coloca imágenes en la carpeta <code>fondos/</code> y añádelas en <code>js/fondos.js</code>.",
auroraOriginal:"Aurora (original)",
opVelo:"Opacidad del velo",
opVeloAria:"Opacidad del velo sobre la foto",
opVidrio:"Opacidad del vidrio",
opVidrioAria:"Opacidad del vidrio de tarjetas y menús",
fondoNota:"El velo cubre la foto · el vidrio controla tarjetas y menús",
restablecer:"Restablecer ajustes",

/* ===== Modal QR ===== */
qrModalAria:"Abrir en otro dispositivo",
qrTitulo:"Abrir en otro dispositivo",
qrHint:"Escanea con la cámara de tu iPhone o el escáner del Centro de Control.",
qrAviso:"Estás usando <b>localhost</b>, que en tu iPhone apunta al propio teléfono. Sustitúyelo por la IP local de tu PC (la ves con <code>ipconfig</code>) y ambos deberán estar en el mismo Wi-Fi.",
qrIpLab:"IP local de tu PC",
qrIpPh:"192.168.1.50",
copiarUrl:"Copiar URL",
cerrar:"Cerrar",
guiaIntro:"Este archivo se abrió directo desde el disco (<code>file://</code>), así que tu iPhone no puede alcanzarlo. Dos soluciones:",
guia1Titulo:"1 · Servidor local (ahora mismo)",
guia1P1:"En una terminal, dentro de la carpeta del proyecto:",
guia1Comando:"python -m http.server 8000",
guia1Copiar:"Copiar comando",
guia1P2:"Abre <code>http://TU-IP-LOCAL:8000</code> en el PC (IP con <code>ipconfig</code>) y vuelve a pulsar el botón QR: ya funcionará con tu iPhone.",
guia2Titulo:"2 · GitHub Pages (definitivo)",
guia2P:"Sube la carpeta a tu repositorio y activa Pages; el QR apuntará a tu URL pública desde cualquier lugar.",

/* ===== Modal de confirmación ===== */
cancelar:"Cancelar",
siContinuar:"Sí, continuar",

/* ===== Toasts ===== */
toastNoImagen:"No se encontró la imagen {url}. Revisa la carpeta fondos/.",
toastSinPreguntas:"No queda ninguna pregunta que repasar.",
toastExportado:"Archivo exportado.",
toastVinculado:"Archivo vinculado: se actualizará tras cada test.",
toastDesvinculado:"Archivo desvinculado.",
toastBorrado:"Progreso borrado.",
toastImportOk:"Importación correcta: {n} intento(s) nuevo(s).",
toastCopiado:"Copiado al portapapeles.",
toastNoCopiado:"No se pudo copiar; selecciónalo manualmente.",

/* ===== Errores (usados por js/memoria.js) ===== */
errJsonInvalido:"El archivo no es JSON válido.",
errEstructura:"La estructura no coincide con el formato esperado (versión {v}).",
errNoSoportaArchivo:"Tu navegador no soporta vincular archivos (disponible en Brave/Chrome de escritorio).",
errVinculacionCancelada:"Vinculación cancelada.",
errNoVinculado:"No hay archivo vinculado.",
errPermisoDenegado:"Permiso denegado.",
errNoReactivar:"No se pudo reactivar el vínculo.",

/* ===== Arranque ===== */
errSinBanco:"Ningún banco disponible: revisa bancos/verbos.js, bancos/html.js y js/bancos.js."
};
window.TXT=TXT;

/* Plantillas: txt("clave",{n:5}) sustituye cada {n} por su valor */
function txt(clave,params){
  let s=TXT[clave];
  if(s===undefined)return "";
  if(params)for(const k in params)s=s.split("{"+k+"}").join(params[k]);
  return s;
}
window.txt=txt;

/* Rellena los elementos data-txt* de index.html (una sola vez,
   al cargar; los dinámicos los escribe app.js cuando toca) */
(function aplicarTextos(){
  function poner(sel,fn){document.querySelectorAll(sel).forEach(fn);}
  poner("[data-txt]",el=>{el.innerHTML=TXT[el.getAttribute("data-txt")]||"";});
  poner("[data-txt-title]",el=>{el.title=TXT[el.getAttribute("data-txt-title")]||"";});
  poner("[data-txt-aria]",el=>{el.setAttribute("aria-label",TXT[el.getAttribute("data-txt-aria")]||"");});
  poner("[data-txt-ph]",el=>{el.placeholder=TXT[el.getAttribute("data-txt-ph")]||"";});
})();