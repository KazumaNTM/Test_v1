const BANCO_INTEGRACION = {
meta:{
  id:"integracion-html-css-js-v1",
  titulo:"Test de integración",
  subtitulo:"cómo interactúan HTML, CSS y JavaScript",
  descripcion:"Preguntas de opción múltiple basadas estrictamente en el PDF HTMLCSSJSCombined.pdf (Nematrian, 2020): cómo se combinan HTML, CSS y JavaScript en una página web — estilos sobre la estructura, manipulación del DOM, modificación dinámica de estilos, detección de características y presencia conjunta de <link>, <style> y <script>. Sin conceptos repetidos entre preguntas de una misma sección.",
  nota:"Nota de rigor: el PDF describe HTML, CSS y JavaScript como 'los tres componentes principales de la mayoría de las páginas web' y recomienda 'feature detection' frente a 'browser detection'. Se respeta literalmente la terminología del documento original."
},
secciones:{
  A:{nombre:"HTML + CSS: estilos sobre la estructura",color:"#f5a524"},
  B:{nombre:"HTML + JS: DOM y eventos",color:"#10b981"},
  C:{nombre:"CSS + JS: estilos dinámicos",color:"#38bdf8"},
  D:{nombre:"Los tres juntos: feature detection y carga",color:"#f472b6"}
},
preguntas:[
  /* ============================================================
     SECCIÓN A — HTML + CSS: estilos sobre la estructura (8)
     ============================================================ */
  {s:"A",q:"Según el texto, ¿cuál es la relación entre HTML y CSS en una página web?",
    o:["Ambos hacen exactamente lo mismo","HTML indica qué elementos incluir; CSS indica cómo estilizarlos","CSS indica qué elementos incluir; HTML los estiliza","HTML y CSS son independientes y nunca se combinan"],
    c:1,
    e:"El texto indica que 'HTML indica al navegador qué elementos deben incluirse en la página web (y en qué orden). CSS indica cómo cada elemento debe ser estilizado'."},

  {s:"A",q:"¿Cómo se aplica un estilo CSS directamente a un elemento HTML individual según el texto?",
    o:["Mediante el atributo class","Mediante el atributo css","Mediante el atributo style","Mediante el elemento <inline>"],
    c:2,
    e:"El texto indica que 'si queremos hacer que el texto dentro de un elemento <p> aparezca en rojo podemos atribuirle un estilo CSS, en la línea de <p style=\"color:red;\">'. Este es el enfoque in-line."},

  {s:"A",q:"¿Qué elemento HTML se utiliza para referenciar una hoja de estilos externa según el texto?",
    o:["<link>","<style>","<css>","<external>"],
    c:0,
    e:"El texto indica que 'las hojas de estilo externas se referencian usando un elemento <link>, que va dentro de la sección <head>. Este tipo de elemento link tiene una forma como: <link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">'."},

  {s:"A",q:"¿Qué elemento HTML se utiliza para CSS in-file según el texto?",
    o:["<link>","<css>","<script>","<style>"],
    c:3,
    e:"El texto indica que 'el CSS in-file se contiene en un elemento <style>. Si hay más de uno de estos elementos entonces los posteriores toman precedencia sobre los anteriores'."},

  {s:"A",q:"Según el texto, ¿cuál es el orden de prioridad entre las tres formas de aplicar CSS?",
    o:["External > in-file > in-line","In-line > in-file > external","In-file > in-line > external","Todas tienen la misma prioridad"],
    c:1,
    e:"El texto indica que 'in-line CSS toma precedencia sobre in-file CSS y in-file CSS toma precedencia sobre external CSS (a menos que la característica !important se incluya en el enunciado de estilo)'."},

  {s:"A",q:"Según el texto, ¿qué sucede cuando hay múltiples reglas CSS igualmente específicas que afectan a un elemento?",
    o:["Gana siempre la primera","Gana siempre la última","Gana la que esté en el <head>","Es un error y la página no carga"],
    c:1,
    e:"El texto explica que 'cuando incluso esto no diferencia entre estilos entonces el que aparece último es el que se aplica'. Es decir, si la especificidad es la misma, la última regla gana."},

  {s:"A",q:"¿Qué regla CSS se utiliza para aplicar diferentes estilos según el medio (ancho del dispositivo, tipo de pantalla, etc.)?",
    o:["@media","@screen","@device","@responsive"],
    c:0,
    e:"El texto indica que 'la regla CSS @media se puede utilizar de una manera que permite al desarrollador alterar el estilo utilizado por un elemento para reflejar el medio en el que se está viendo la página (ej. el ancho o alto del dispositivo)'."},

  {s:"A",q:"Si un elemento HTML tiene id=\"paral\", ¿qué selector CSS le aplica estilos directamente?",
    o:[".paral","paral","*paral","#paral"],
    c:3,
    e:"El texto indica que 'si quieres usar este tipo de CSS entonces precede el valor del id por un carácter hash (#). Por ejemplo, la regla de estilo #paral {color: yellow} se aplicaría al elemento HTML con id igual a paral'."},

  /* ============================================================
     SECCIÓN B — HTML + JS: DOM y eventos (8)
     ============================================================ */
  {s:"B",q:"¿Qué elemento HTML se utiliza para incluir código JavaScript dentro de un documento HTML?",
    o:["<js>","<script>","<javascript>","<code>"],
    c:1,
    e:"El texto indica que 'el JavaScript in-file de HTML necesita insertarse en elementos script. Cualquier número de scripts se puede incluir en un documento HTML y se puede colocar ya sea en la sección <body> o en la <head>'."},

  {s:"B",q:"¿Qué método de JavaScript se utiliza para obtener un elemento HTML por su atributo id según el texto?",
    o:["document.findElement(id)","document.getElement(id)","document.getElementById(id)","document.queryId(id)"],
    c:2,
    e:"El texto indica que 'una forma común de acceder a un elemento es asignarle un id... El elemento puede entonces ser identificado en JavaScript aplicando el método getElementById al objeto document, devolviendo un objeto correspondiente al elemento'."},

  {s:"B",q:"¿Qué propiedad de un elemento HTML permite a JavaScript cambiar su contenido HTML interno?",
    o:["innerText","textHTML","contentHTML","innerHTML"],
    c:3,
    e:"El texto muestra el ejemplo 'document.getElementById(\"example\").innerHTML = \"hello\"' y explica que 'sus propiedades (por ejemplo, su propiedad innerHTML, que es el texto dentro de un elemento) pueden establecerse asignando valores a la propiedad relevante del objeto elemento'."},

  {s:"B",q:"¿Qué atributo HTML permite ejecutar código JavaScript cuando el usuario hace clic en un elemento?",
    o:["onclick","onpress","onclicked","onactivate"],
    c:0,
    e:"El texto lista en su tabla de atributos de evento HTML 'onclick — cuando se hace clic en el elemento — aplicable a todos los elementos visibles'."},

  {s:"B",q:"¿Cuáles son las tres formas de añadir JavaScript a una página web según el texto?",
    o:["En <head>, en <body> y en archivos externos","En un atributo de evento HTML, en elementos <script>, en archivos externos","Inline, global y asíncrono","Directo, indirecto y remoto"],
    c:1,
    e:"El texto enumera: '(a) incluyéndolo dentro de un atributo de evento HTML individual, (b) dentro de elementos <script> separados en el HTML, (c) en archivos de script externos (estos involucran incluir en el HTML un elemento <script> con su atributo src establecido al nombre del archivo de script relevante)'."},

  {s:"B",q:"¿Qué objeto del navegador da acceso a JavaScript a todos los elementos de la página HTML según el texto?",
    o:["window","navigator","location","document (DOM)"],
    c:3,
    e:"El texto indica que 'el Document Object Model (DOM) de JavaScript HTML proporciona una forma para que JavaScript acceda a todos los elementos de una página web HTML'."},

  {s:"B",q:"¿Qué método de JavaScript se utiliza para añadir un detector de eventos a un elemento HTML según el texto?",
    o:["addEventListener()","attachEvent()","setEventHandler()","bindEvent()"],
    c:0,
    e:"El texto explica que 'el manejo de eventos vinculado a elementos individuales, como qué sucede cuando alguien hace clic en un elemento, a menudo se implementa asignando una función específica al atributo de evento de ese elemento'. El método general es addEventListener."},

  {s:"B",q:"¿Qué atributo HTML permite a JavaScript identificar de forma única un elemento para su manipulación posterior?",
    o:["name","class","id","tag"],
    c:2,
    e:"El texto indica que 'una forma común de acceder a un elemento es asignarle un id (es decir, establecer su atributo id object a un valor preespecificado). El elemento puede entonces ser identificado en Javascript aplicando el método getElementById'."},

  /* ============================================================
     SECCIÓN C — CSS + JS: estilos dinámicos (7)
     ============================================================ */
  {s:"C",q:"Según el texto, ¿puede JavaScript modificar los estilos CSS de un elemento después de que la página se haya cargado?",
    o:["No, los estilos son inmutables tras la carga","Sí, puede alterar los atributos de estilo de un elemento HTML on the fly","Solo si el estilo es in-line","Solo si el estilo es externo"],
    c:1,
    e:"El texto indica que 'los atributos de estilo de un elemento HTML también pueden ser alterados por JavaScript on the fly, por ejemplo, después de que la página se haya cargado inicialmente o en respuesta a acciones específicas del usuario como hacer clic en un botón'."},

  {s:"C",q:"¿Qué objeto de JavaScript representa el estilo de un elemento HTML según el texto?",
    o:["styleObject","theStyle","elementStyle","style (propiedad del elemento)"],
    c:3,
    e:"El texto menciona en su tabla de propiedades de elementos HTML dentro del DOM: 'style — Establece / devuelve el atributo style'. Y en la sección de Style objects: 'puede accederse... para elementos HTML específicos, usando, por ejemplo, document.getElementsById(ElementId).style'."},

  {s:"C",q:"Según el texto, ¿qué notación se utiliza en JavaScript para modificar propiedades CSS con guiones, como background-color?",
    o:["Notación camelCase: backgroundColor","Notación con guion: background-color","Notación con guion bajo: background_color","Notación con mayúsculas: BACKGROUND-COLOR"],
    c:0,
    e:"El texto incluye en su tabla de equivalencias CSS ↔ propiedades del Style object: 'background-color → backgroundColor'. Es decir, los guiones se eliminan y la siguiente letra se capitaliza (camelCase)."},

  {s:"C",q:"Según el texto, ¿qué propiedad del Style object corresponde a 'font-size' de CSS?",
    o:["fontsize","font_size","fontSize","FONTSIZE"],
    c:2,
    e:"El texto incluye en su tabla: 'font-size → fontSize'. Es la aplicación de la convención camelCase a las propiedades CSS que contienen guiones."},

  {s:"C",q:"¿Qué tiene prioridad según el texto: un estilo CSS definido en un archivo externo o una modificación hecha por JavaScript después de la carga?",
    o:["El CSS externo siempre gana","El JavaScript siempre gana si se aplica después","Empate, se aplica el primero","Depende del navegador"],
    c:1,
    e:"El texto indica que 'los estilos CSS típicamente operan según una jerarquía, con cualquier override de JavaScript tomando precedencia sobre cualquier estilo CSS presente cuando la página se carga inicialmente'."},

  {s:"C",q:"¿Qué propiedad del Style object corresponde a 'color' de CSS según el texto?",
    o:["color","fontColor","textColor","foregroundColor"],
    c:0,
    e:"El texto incluye en su tabla: 'color → color'. Las propiedades CSS de una sola palabra no cambian de nombre al pasar al Style object de JavaScript."},

  {s:"C",q:"Según el texto, ¿qué propiedad del Style object corresponde a 'text-decoration' de CSS?",
    o:["text_decoration","text-decoration","textDecoration","TEXT_DECORATION"],
    c:2,
    e:"El texto incluye en su tabla: 'text-decoration → textDecoration'. Siguiendo la convención camelCase, el guion se elimina y la letra siguiente se capitaliza."},

  /* ============================================================
     SECCIÓN D — Los tres juntos: feature detection y carga (7)
     ============================================================ */
  {s:"D",q:"Según el texto, ¿cuáles son los tres componentes principales de la mayoría de las páginas web?",
    o:["HTML, XML y CSS","HTML, CSS y Python","HTML, CSS y JavaScript","HTML, JSON y JavaScript"],
    c:2,
    e:"El texto indica que HTML, CSS y JavaScript son 'los tres componentes principales de la mayoría de las páginas web'."},

  {s:"D",q:"Según el texto, ¿qué enfoque se prefiere actualmente para gestionar las diferencias entre navegadores?",
    o:["Browser detection (detectar el navegador)","Feature detection (detectar si soporta una característica)","Version detection (detectar la versión)","User agent sniffing (leer el user agent)"],
    c:1,
    e:"El texto indica que 'hoy en día, la tendencia es usar feature detection. En este enfoque, el desarrollador incluye elementos u otros componentes en la página web que identifican si el navegador y dispositivo... soporta una característica específica'."},

  {s:"D",q:"Según el texto, ¿por qué el enfoque 'browser detection' ha caído en desuso?",
    o:["Porque es más lento","Porque consume mucha memoria","Porque solo funciona en Chrome","Porque hay muchos navegadores y versiones, y el mismo navegador puede correr en dispositivos con características distintas"],
    c:3,
    e:"El texto indica dos debilidades: 'primero, ahora hay muchos proveedores de navegadores diferentes, la mayoría de los cuales también tienen muchas versiones de sus navegadores disponibles... Segundo, un enfoque de browser detection no aborda (b) arriba. El mismo navegador puede correr en múltiples dispositivos'."},

  {s:"D",q:"¿Qué elemento HTML permite referenciar una hoja de estilos externa según el texto?",
    o:["<link>","<style>","<script>","<css>"],
    c:0,
    e:"El texto indica que 'las hojas de estilo externas se referencian usando un elemento <link>, que va dentro de la sección <head>'."},

  {s:"D",q:"¿Qué elemento HTML permite cargar un archivo JavaScript externo según el texto?",
    o:["<js>","<script>","<scriptsrc>","<external>"],
    c:1,
    e:"El texto indica que 'el JavaScript externo involucra incluir en el HTML un elemento <script> con su atributo src establecido al nombre del archivo de script relevante'."},

  {s:"D",q:"Según el texto, ¿dónde pueden colocarse los elementos <style> en un documento HTML 5?",
    o:["Solo en el <head>","Solo en el <body>","Tanto en el <head> como en el <body>, aunque teóricamente deberían ir en el <head>","Solo fuera del <html>"],
    c:2,
    e:"El texto indica que 'las versiones más antiguas de HTML (por ejemplo, HTML 4) requieren que los elementos <style> estén en el <head> del archivo HTML, aunque la mayoría de los navegadores actualmente parecen aceptarlos incluso si aparecen en el <body>'."},

  {s:"D",q:"Según el texto, ¿qué método permite comprobar si el navegador soporta una característica JavaScript específica, aunque su uso ya no se recomienda?",
    o:["hasSupport()","checkFeature()","supports()","hasFeature()"],
    c:3,
    e:"El texto indica que uno de los métodos para identificar si una característica es soportada por el navegador es 'usar el método hasFeature para determinar si la implementación del Document Object Model (DOM) de JavaScript soporta la característica relevante'. Aunque 'el método hasFeature no está bien soportado por varios navegadores y su uso a menudo no se recomienda'."}
]};

window.BANCO_INTEGRACION = BANCO_INTEGRACION;