const BANCO_CSS = {
meta:{
  id:"css-fundamentos-selectores-v1",
  titulo:"Test de CSS",
  subtitulo:"fundamentos, selectores, propiedades y reglas",
  descripcion:"Preguntas de opción múltiple basadas estrictamente en el PDF HTMLCSSJSCombined.pdf (Nematrian, 2020): fundamentos de CSS, formas de inclusión, jerarquía, selectores, unidades, colores, propiedades, reglas @media, @keyframes y @font-face. Sin conceptos repetidos entre preguntas de una misma sección.",
  nota:"Nota de rigor: el PDF define CSS como 'Cascading Style Sheets' y establece que la jerarquía de estilos es: inline > in-file > external, salvo que se use !important. Se respeta literalmente la terminología del documento original."
},
secciones:{
  A:{nombre:"Fundamentos, sintaxis y jerarquía",color:"#f5a524"},
  B:{nombre:"Selectores y pseudo-clases",color:"#10b981"},
  C:{nombre:"Propiedades, unidades y colores",color:"#38bdf8"},
  D:{nombre:"Reglas, animaciones y layout",color:"#f472b6"}
},
preguntas:[
  /* ============================================================
     SECCIÓN A — Fundamentos, sintaxis y jerarquía (5)
     ============================================================ */
  {s:"A",q:"¿Qué significa la sigla CSS?",
    o:["Cascading Style Sheets","Computer Style System","Creative Style Sheets","Colorful Style Syntax"],
    c:0,
    e:"El texto indica que CSS son las siglas de 'Cascading Style Sheets' (Hojas de Estilo en Cascada), y que junto con HTML y JavaScript forman los tres componentes principales de las páginas web modernas."},

  {s:"A",q:"¿Cuál es la función principal de CSS en una página web?",
    o:["Indicar al navegador qué elementos incluir y en qué orden","Manipular los elementos programáticamente en respuesta a eventos","Indicar cómo debe estilizarse cada elemento de la página","Gestionar la seguridad y las cookies del sitio"],
    c:2,
    e:"El texto establece claramente que 'CSS indica cómo debe estilizarse cada elemento'. HTML indica qué elementos incluir y JavaScript permite manipularlos programáticamente."},

  {s:"A",q:"¿Cuáles son las tres formas de incluir CSS en una página web según el texto?",
    o:["Internal, external y dinámica","Local, global y mixta","Directa, indirecta y remota","In-line, in-file y external"],
    c:3,
    e:"El texto enumera: '(a) incluido dentro de un elemento HTML individual (in-line), (b) incluido en el archivo HTML pero no directamente dentro de los elementos (in-file), (c) incluido en archivos CSS externos (external)'."},

  {s:"A",q:"Según el texto, ¿qué regla de jerarquía se aplica cuando dos estilos CSS afectan al mismo elemento?",
    o:["El que aparece primero en el código siempre gana","El más específico gana, y si hay empate, el último gana","Los estilos externos siempre tienen prioridad","Los estilos in-line siempre pierden frente a los externos"],
    c:1,
    e:"El texto explica: 'Las reglas más específicas anulan las más generales... Cuando incluso esto no diferencia entre estilos, entonces el que aparece último es el que se aplica'."},

  {s:"A",q:"¿Cuál es la sintaxis correcta para un comentario en CSS según el texto?",
    o:["// comentario hasta fin de línea","<!-- comentario -->","/* comentario */","# comentario"],
    c:2,
    e:"El texto indica que 'los comentarios en CSS comienzan con /* y terminan con */ y pueden abarcar múltiples líneas'."},

  /* ============================================================
     SECCIÓN B — Selectores y pseudo-clases (5)
     ============================================================ */
  {s:"B",q:"En CSS, ¿qué selector se utiliza para aplicar estilos a un elemento con un id específico?",
    o:["#nombre","@nombre",".nombre","*nombre"],
    c:0,
    e:"El texto indica que 'si quieres usar este tipo de CSS entonces precede el valor del id por un carácter hash (#). Por ejemplo, la regla de estilo #paral {color: yellow} se aplicaría al elemento HTML con id igual a paral'."},

  {s:"B",q:"¿Qué selector CSS se utiliza para aplicar estilos a todos los elementos que tengan una clase específica?",
    o:["#clase","@clase",".clase","&clase"],
    c:2,
    e:"El texto indica que 'la regla de estilo .center {color: red; text-align: center} indicaría que cualquier elemento con un atributo class igual a center debería estar centrado y aparecer en rojo'."},

  {s:"B",q:"¿Qué selector universal se utiliza en CSS para aplicar estilos a TODOS los elementos de la página?",
    o:["all","*","any","%"],
    c:1,
    e:"El texto incluye en su tabla de selectores el símbolo * que 'selecciona todos los elementos' de la página."},

  {s:"B",q:"¿Qué pseudo-clase CSS se activa cuando el usuario coloca el ratón sobre un elemento?",
    o:["a:visited","a:active","a:link","a:hover"],
    c:3,
    e:"El texto muestra la tabla de estados de enlace: 'a:hover = enlace cuando el usuario mueve un ratón sobre él'. Los demás corresponden a: enlace normal (a:link), visitado (a:visited) y en el momento de hacer clic (a:active)."},

  {s:"B",q:"¿Cómo se agrupan varios selectores que comparten el mismo estilo en CSS?",
    o:["Separándolos con punto y coma (;)","Separándolos con el símbolo &","Separándolos con una coma (,)","Escribiéndolos en líneas distintas sin separador"],
    c:2,
    e:"El texto explica que reglas como h1 {color: red;} h2 {color: red;} h3 {color: red;} 'pueden agruparse juntas de la siguiente manera para minimizar código y hacerlo más fácil de seguir: h1, h2, h3 {color: red;}'."},

  /* ============================================================
     SECCIÓN C — Propiedades, unidades y colores (5)
     ============================================================ */
  {s:"C",q:"¿Qué propiedad CSS se utiliza para cambiar el color del texto de un elemento?",
    o:["font-color","text-color","color","text-style"],
    c:2,
    e:"El texto menciona la propiedad color en múltiples ejemplos, como h3 {color: blue; text-align: center;}. La propiedad color establece el color del texto dentro de un elemento."},

  {s:"C",q:"¿Qué propiedad CSS establece el color de fondo de un elemento?",
    o:["background-color","bg-color","fill-color","back-color"],
    c:0,
    e:"El texto menciona la propiedad background-color en ejemplos como body {background-color: lightblue;} y la describe como la propiedad que 'establece el color de fondo de un elemento'."},

  {s:"C",q:"¿Qué unidad CSS es relativa al tamaño de fuente del elemento?",
    o:["px","cm","em","pt"],
    c:2,
    e:"El texto incluye una tabla de unidades relativas donde se especifica que em es 'relativa al font-size del elemento (ej. 2em significa dos veces el tamaño de fuente relevante)'. Las unidades px, cm y pt son absolutas."},

  {s:"C",q:"¿Qué unidad CSS se considera absoluta según el texto?",
    o:["em","rem","px","vw"],
    c:2,
    e:"El texto lista px entre las unidades absolutas ('pixels, 1px = 1/96 de 1 pulgada'), mientras que em, rem y vw aparecen en la tabla de unidades relativas."},

  {s:"C",q:"¿Qué propiedad CSS se utiliza para crear esquinas redondeadas en un elemento?",
    o:["border-style","border-radius","corner-radius","border-round"],
    c:1,
    e:"El texto describe border-radius como la propiedad que 'añade esquinas redondeadas al elemento' y es una forma abreviada de establecer las cuatro propiedades individuales de radio de borde (border-top-left-radius, border-top-right-radius, etc.)."},

  /* ============================================================
     SECCIÓN D — Reglas, animaciones y layout (5)
     ============================================================ */
  {s:"D",q:"¿Qué regla CSS se utiliza para aplicar diferentes estilos según el dispositivo o tipo de medio?",
    o:["@device","@media","@screen","@responsive"],
    c:1,
    e:"El texto explica que 'la regla CSS @media se puede utilizar de una manera que permite al desarrollador alterar el estilo utilizado por un elemento para reflejar el medio en el que se está viendo la página (ej. el ancho o alto del dispositivo)'."},

  {s:"D",q:"¿Qué regla CSS se utiliza para definir animaciones?",
    o:["@animate","@motion","@keyframes","@animation"],
    c:2,
    e:"El texto explica que 'la regla CSS @keyframes es la forma en que los diseñadores especifican animaciones que utilizan propiedades de animación CSS'. Su sintaxis es: @keyframes nombre { keyframes-selector {css-styles;} }."},

  {s:"D",q:"¿Para qué sirve la regla CSS @font-face según el texto?",
    o:["Para cambiar el tamaño de fuente","Para aplicar negrita a un texto","Para permitir a los diseñadores aplicar su propia fuente","Para bloquear el uso de fuentes externas"],
    c:2,
    e:"El texto define la regla @font-face como aquella que 'permite a los diseñadores aplicar su propia fuente'. Requiere los descriptores font-family (nombre) y src (URL de descarga de la fuente)."},

  {s:"D",q:"¿Qué propiedad CSS se utiliza para controlar si un elemento se muestra como bloque, inline u otro tipo de caja?",
    o:["position","display","layout","box-type"],
    c:1,
    e:"El texto describe la propiedad display como aquella que 'indica el tipo de caja que se utilizará para un elemento'. Valores válidos incluyen block, inline, flex, inline-block, none, entre otros."},

  {s:"D",q:"¿Qué propiedad CSS define cómo se posiciona un elemento dentro del flujo del documento?",
    o:["layout","display","position","flow"],
    c:2,
    e:"El texto describe la propiedad position como aquella que 'indica cómo debe posicionarse un elemento'. Sus valores incluyen static (por defecto), relative, absolute y fixed."}
]};

window.BANCO_CSS = BANCO_CSS;