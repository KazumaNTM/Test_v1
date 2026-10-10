const BANCO_CSS = {
meta:{
  id:"css-fundamentos-selectores-v1",
  titulo:"Test de CSS",
  subtitulo:"fundamentos, selectores, propiedades y reglas",
  descripcion:"Preguntas de opción múltiple basadas estrictamente en el PDF HTMLCSSJSCombined.pdf (Nematrian, 2020): fundamentos de CSS, formas de inclusión, jerarquía, selectores, unidades, colores, propiedades, reglas @media, @keyframes y @font-face. Sin conceptos repetidos entre preguntas de una misma sección.",
  nota:"Nota de rigor: el PDF define CSS como 'Cascading Style Sheets' y establece que la jerarquía de estilos es: in-line > in-file > external, salvo que se use !important. Se respeta literalmente la terminología del documento original."
},
secciones:{
  A:{nombre:"Fundamentos, sintaxis y jerarquía",color:"#f5a524"},
  B:{nombre:"Selectores y pseudo-clases",color:"#10b981"},
  C:{nombre:"Propiedades, unidades y colores",color:"#38bdf8"},
  D:{nombre:"Reglas, animaciones y layout",color:"#f472b6"}
},
preguntas:[
  /* ============================================================
     SECCIÓN A — Fundamentos, sintaxis y jerarquía (10)
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

  {s:"A",q:"¿Qué dos partes componen un rule-set (conjunto de reglas) en CSS según el texto?",
    o:["Selector y bloque de declaración","Etiqueta y atributo","Clase y estilo","ID y valor"],
    c:0,
    e:"El texto indica que 'un rule-set involucra un selector y un bloque de declaración. El selector apunta al tipo de elemento HTML al que se aplica el estilo, mientras que el bloque de declaración contiene una o más declaraciones de estilo separadas por punto y coma'."},

  {s:"A",q:"Si un documento HTML contiene más de un elemento <style>, ¿cuál prevalece según el texto?",
    o:["El primero en aparecer","El último en aparecer","El que esté en el <head>","El que esté en el <body>"],
    c:1,
    e:"El texto indica que 'el CSS in-file se contiene en un elemento <style>. Si hay más de uno de estos elementos entonces los posteriores toman precedencia sobre los anteriores'."},

  {s:"A",q:"¿Cómo se aplica CSS 'in-line' a un elemento HTML según el texto?",
    o:["Mediante el atributo class del elemento","Mediante el atributo css del elemento","Mediante un elemento <style> dentro del elemento","Mediante el atributo style del elemento"],
    c:3,
    e:"El texto indica que 'las reglas CSS in-line involucran el atributo style (y no incluyen un selector ni las llaves incluidas en el CSS in-file o externo), ej. involucran establecer el atributo style del elemento a algo como: style = \"color: red\";'."},

  {s:"A",q:"¿Qué elemento HTML se utiliza para referenciar una hoja de estilos externa desde un documento HTML?",
    o:["<css>","<link>","<style>","<import>"],
    c:1,
    e:"El texto indica que 'las hojas de estilo externas se referencian usando un elemento <link>, que va dentro de la sección <head>. Este tipo de elemento link tiene una forma como: <link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">'."},

  {s:"A",q:"¿Qué atributo introduce HTML 5 para permitir aplicar diferentes elementos <style> a diferentes partes de la página web?",
    o:["scoped","local","part","section"],
    c:0,
    e:"El texto indica que 'en teoría, la última versión HTML en el momento de escribir (HTML 5) tiene el concepto de un atributo scoped (ej. <style scoped>) que debería permitir aplicar diferentes elementos <style> a diferentes partes de la página web (que podrían entonces aparecer legítimamente en el <body>)'."},

  /* ============================================================
     SECCIÓN B — Selectores y pseudo-clases (10)
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

  {s:"B",q:"En CSS, ¿cómo se seleccionan todos los elementos de un tipo específico (por ejemplo todos los párrafos)?",
    o:[".p","#p","p","*p"],
    c:2,
    e:"El texto indica que 'usualmente CSS se aplica a tipos de elementos. Por ejemplo, la regla de estilo h3 {color: blue; text-align: center;} tiene un selector que es h3 y le dice al navegador que cualquier elemento <h3> debe estar centrado y aparecer en azul'."},

  {s:"B",q:"¿Qué selector aplica estilos a elementos <h3> que tengan específicamente la clase 'center'?",
    o:["h3#center","h3.center",".h3center","h3*center"],
    c:1,
    e:"El texto indica que 'la regla de estilo h3.center {color: green;} indicaría que los elementos <h3> que tienen su atributo class igual a center deberían ser verdes'."},

  {s:"B",q:"¿Qué pseudo-clase CSS representa un enlace que el usuario ya ha visitado?",
    o:["a:link","a:hover","a:visited","a:active"],
    c:2,
    e:"El texto incluye una tabla de estados de enlace donde a:visited = 'Enlace que el usuario ha visitado'. a:link = normal no visitado, a:hover = cuando el ratón está sobre él, a:active = en el momento del clic."},

  {s:"B",q:"¿Qué tipo de selector CSS permite seleccionar elementos en función del valor de uno de sus atributos?",
    o:["Pseudoclase","Selector de atributo","Selector universal","Selector de tipo"],
    c:1,
    e:"El texto indica en su tabla de selectores que element[attribute] 'selecciona todos los elementos de tipo element con un atributo específico'. Ejemplo: element[attribute = value] selecciona elementos que tienen un atributo con un valor específico."},

  {s:"B",q:"¿Qué selector CSS se utiliza para aplicar estilos a filas de tabla pares (para crear tablas con efecto cebra)?",
    o:["tr:odd-child","tr:even","tr:alternate","tr:nth-child(even)"],
    c:3,
    e:"El texto indica que 'las tablas con efecto cebra se pueden implementar utilizando el selector nth-child, ej.: tr:nth-child(even) {background-color: #f2f2f2;}'."},

  /* ============================================================
     SECCIÓN C — Propiedades, unidades y colores (10)
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

  {s:"C",q:"¿Qué propiedad CSS se utiliza para especificar la fuente que se usará en un elemento?",
    o:["font-style","font-type","text-font","font-family"],
    c:3,
    e:"El texto indica que 'la propiedad font-family de CSS indica la fuente a usar para un elemento. Puede incluir varios valores, separados por comas (típicamente empezando por fuentes más específicas y terminando con fuentes más genéricas)'."},

  {s:"C",q:"Según el texto, ¿qué formato tiene un color hexadecimal en CSS?",
    o:["#RRGGBB","#RGB","#R.G.B","#RR-GG-BB"],
    c:0,
    e:"El texto indica que 'todos los navegadores principales reconocen valores de color en formato hexadecimal (hex). Estos toman la forma #RRGGBB donde RR, GG y BB indican los componentes rojo, verde y azul del color en formato hexadecimal de dos caracteres'."},

  {s:"C",q:"¿Qué formato de color CSS incluye un valor de opacidad (alpha)?",
    o:["RGB","HSL","RGBA","HEX"],
    c:2,
    e:"El texto indica que 'los valores de color RGBA son reconocidos por muchos navegadores principales. Extienden el RGB para incluir un valor de opacidad (transparencia). Se especifican en la forma rgba(r,g,b,a), donde a (el parámetro alpha) puede tomar un valor entre 0.0 y 1.0'."},

  {s:"C",q:"¿Qué unidad CSS es relativa al 1% del ancho del viewport (la ventana del navegador)?",
    o:["em","rem","vh","vw"],
    c:3,
    e:"El texto incluye una tabla de unidades relativas donde vw es 'relativa al 1% del ancho del viewport (la ventana del navegador)'. vh es la altura equivalente."},

  {s:"C",q:"¿Cuál de los siguientes es un nombre de color predefinido reconocido por CSS según el texto?",
    o:["SkyPurple","DarkYellow","CornflowerBlue","BrightGreen"],
    c:2,
    e:"El texto incluye una tabla extensa de colores predefinidos en HTML/CSS, entre los que se encuentra CornflowerBlue (#6495ED). SkyPurple, DarkYellow y BrightGreen no figuran en la lista."},

  /* ============================================================
     SECCIÓN D — Reglas, animaciones y layout (10)
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
    e:"El texto describe la propiedad position como aquella que 'indica cómo debe posicionarse un elemento'. Sus valores incluyen static (por defecto), relative, absolute y fixed."},

  {s:"D",q:"¿Qué valor de la propiedad display se utiliza para crear un contenedor flexible en CSS?",
    o:["grid","flex","block","inline"],
    c:1,
    e:"El texto describe en su tabla de la propiedad display el valor flex como 'mostrado como un contenedor flexible a nivel de bloque'. También existe inline-flex para contenedores flexibles a nivel inline."},

  {s:"D",q:"¿Cuál es la diferencia entre margin y padding según el texto?",
    o:["Margin es interno y padding externo","Ambos son idénticos","Margin solo aplica a tablas","Margin es externo y padding es el espacio interno"],
    c:3,
    e:"El texto describe padding como 'el espacio (padding) de un elemento' y margin como la propiedad que establece los márgenes de un elemento. Margin está fuera del borde del elemento y padding entre el contenido y el borde."},

  {s:"D",q:"¿Qué propiedad CSS controla el orden de apilamiento (qué elemento aparece delante de otro)?",
    o:["stack-order","layer","z-index","position"],
    c:2,
    e:"El texto indica que 'la propiedad z-index de CSS especifica el orden de apilamiento de un elemento, es decir, cuál está delante de otros elementos, y por lo tanto cuál es visible si varios aparecieran en el mismo lugar. Elementos con mayor orden de apilamiento (valor z-index) se muestran con preferencia sobre los que tienen menor orden'."},

  {s:"D",q:"¿Qué propiedad CSS se utiliza para especificar la duración de una animación?",
    o:["animation-time","animation-duration","animation-length","animation-speed"],
    c:1,
    e:"El texto indica que 'la propiedad animation-duration de CSS (CSS3) indica la longitud de tiempo que una animación tarda en reproducirse'. Se especifica en unidades CSS de tiempo (segundos o milisegundos)."},

  {s:"D",q:"¿Qué pseudo-elementos CSS se utilizan para insertar contenido generado antes o después del contenido de un elemento?",
    o:[":before y :after",":start y :end",":prepend y :append",":first y :last"],
    c:0,
    e:"El texto indica que 'la pseudo-propiedad content de CSS (CSS2) se utiliza con los pseudo-elementos :before y :after para insertar contenido generado'. Ejemplo: a:after { content: \" (i.e. \" attr(href) \")\"; }."}
]};

window.BANCO_CSS = BANCO_CSS;