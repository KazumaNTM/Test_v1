/* ============================================================
   BANCOS — registro de materiales disponibles
   ------------------------------------------------------------
   Añadir un material nuevo:
   1. Crear bancos/nombre.js con "const BANCO_NOMBRE={...}" y al
      final "window.BANCO_NOMBRE=BANCO_NOMBRE;".
   2. Añadir una línea a CATALOGO (abajo).
   Nada más: el selector de materia lo muestra solo.
   ============================================================ */
const CATALOGO=[
  {id:"verbos-regulares-irregulares-v1",var:"BANCO_VERBOS",titulo:"Test de verbos",subtitulo:"regulares e irregulares"},
  {id:"html-fundamentos-v1",var:"BANCO_HTML",titulo:"Test de HTML",subtitulo:"fundamentos, elementos y atributos"},
  {id:"css-fundamentos-selectores-v1",var:"BANCO_CSS",titulo:"Test de CSS",subtitulo:"fundamentos, selectores, propiedades y reglas"}
];

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