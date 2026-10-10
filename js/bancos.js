/* ============================================================
   BANCOS — registro de materiales disponibles
   ------------------------------------------------------------
   Añadir un material nuevo:
   1. Crear bancos/nombre.js con "const BANCO_NOMBRE={...}" y al
      final "window.BANCO_NOMBRE=BANCO_NOMBRE;".
   2. Añadir una línea a CATALOGO (abajo): {id,var}.
   Nada más: el selector de materia lo muestra solo.

   El título y subtítulo NO se copian aquí: se derivan del
   propio banco (meta.titulo / meta.subtitulo), su única fuente
   (Regla de oro 6): cambiar el nombre de un material se hace
   una sola vez, en bancos/nombre.js.
   ============================================================ */
const CATALOGO=[
  {id:"verbos-regulares-irregulares-v1",var:"BANCO_VERBOS"},
  {id:"html-fundamentos-v1",var:"BANCO_HTML"},
  {id:"css-fundamentos-selectores-v1",var:"BANCO_CSS"},
  {id:"javascript-fundamentos-dom-v1",var:"BANCO_JS"},
  {id:"integracion-html-css-js-v1",var:"BANCO_INTEGRACION"}
].filter(b=>window[b.var])
 .map(b=>({id:b.id,var:b.var,
   titulo:window[b.var].meta.titulo,
   subtitulo:window[b.var].meta.subtitulo}));

/* Banco activo: el recordado en este navegador (Memoria) o,
   si no hay elección previa, el primero del catálogo que exista. */
(function(){
  var elegido=null;
  try{elegido=Memoria.leerMaterial();}catch(e){}
  var act=CATALOGO.find(function(b){return b.id===elegido&&window[b.var];})
        ||CATALOGO.find(function(b){return window[b.var];})
        ||null;
  window.BANCO=act?window[act.var]:null;
})();