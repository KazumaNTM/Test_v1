/* ============================================================
   FONDOS — registro de imágenes de fondo personalizables (v2.4)
   1) Coloca las imágenes en la carpeta fondos/ (junto a index.html),
      con nombres tipo 0000.jpg, 0001.jpg, 0002.jpg…
   2) Añade aquí una línea por imagen (archivo + título visible).
   Recomendado: JPG, apaisadas, ~1600 px de ancho y < 500 KB.
   ============================================================ */
const CATALOGO_FONDOS=[
  {archivo:"0000.jpg", titulo:"Fondo 1"},
];

/* Resuelve el catálogo a entradas listas para el selector (no tocar) */
const FONDOS=(CATALOGO_FONDOS||[])
  .filter(function(f){return f&&typeof f.archivo==="string"&&f.archivo;})
  .map(function(f){
    const id=f.archivo.replace(/\.[^.]+$/,"");  /* 0000.jpg → "0000" */
    return{id:id,titulo:f.titulo||("Fondo "+id),url:"fondos/"+f.archivo};
  });

window.CATALOGO_FONDOS=CATALOGO_FONDOS;
window.FONDOS=FONDOS;