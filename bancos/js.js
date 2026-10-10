const BANCO_JS = {
meta:{
  id:"javascript-fundamentos-dom-v1",
  titulo:"Test de JavaScript",
  subtitulo:"fundamentos, DOM, objetos y errores",
  descripcion:"Preguntas de opción múltiple basadas estrictamente en el PDF HTMLCSSJSCombined.pdf (Nematrian, 2020): fundamentos del lenguaje, variables y tipos, funciones y eventos, Document Object Model (DOM), objetos, arrays, strings, expresiones regulares y manejo de errores. Sin conceptos repetidos entre preguntas de una misma sección.",
  nota:"Nota de rigor: el PDF describe JavaScript como lenguaje 'weakly typed' (débilmente tipado) y documenta un único tipo de número, además del operador === (estrictamente igual) frente a == (igual). Se respeta literalmente la terminología del documento original."
},
secciones:{
  A:{nombre:"Fundamentos, variables y tipos",color:"#f5a524"},
  B:{nombre:"Funciones, eventos y statements",color:"#10b981"},
  C:{nombre:"DOM: acceso y manipulación",color:"#38bdf8"},
  D:{nombre:"Objetos, arrays, strings y errores",color:"#f472b6"}
},
preguntas:[
  /* ============================================================
     SECCIÓN A — Fundamentos, variables y tipos (10)
     ============================================================ */
  {s:"A",q:"¿Cuál es la función principal de JavaScript en una página web?",
    o:["Indicar qué elementos incluir y en qué orden","Indicar cómo estilizar cada elemento","Manipular los elementos programáticamente y responder a acciones del usuario","Almacenar la base de datos del servidor"],
    c:2,
    e:"El texto indica que 'JavaScript proporciona un medio para que los autores de páginas web manipulen estos elementos programáticamente y en respuesta a acciones del usuario final'."},

  {s:"A",q:"¿Cuáles son las tres formas de añadir JavaScript a una página web según el texto?",
    o:["En un atributo de evento HTML, en elementos <script>, en archivos externos","Solo en <head>, solo en <body>, solo externo","Inline, global y asíncrono","Directo, indirecto y remoto"],
    c:0,
    e:"El texto enumera: '(a) incluyéndolo dentro de un atributo de evento HTML individual, (b) dentro de elementos <script> separados en el HTML, (c) en archivos de script externos (incluyendo en el HTML un elemento <script> con su atributo src establecido al nombre del archivo de script relevante)'."},

  {s:"A",q:"¿Cómo se escribe un comentario de una sola línea en JavaScript?",
    o:["# texto","<!-- texto -->","// texto","/* texto */"],
    c:2,
    e:"El texto explica que 'en JavaScript, un comentario de una sola línea se indica por \"código // texto\" donde el código aún se ejecuta, pero el texto es ignorado por el Navegador'."},

  {s:"A",q:"¿Cuáles son los tipos de variables 'primitivas' que reconoce JavaScript según el texto?",
    o:["String, Number, Date, Boolean","String, Integer, Float, Boolean","Text, Number, Array, Object","Char, Int, Long, Decimal"],
    c:0,
    e:"El texto lista: 'JavaScript reconoce los siguientes tipos de variables primitivas: String variables, Number variables, Date variables, Boolean variables'. También menciona que las variables pueden ser objetos y arrays."},

  {s:"A",q:"¿Qué palabra clave se utiliza en JavaScript para declarar una variable según el texto?",
    o:["let","var","define","variable"],
    c:1,
    e:"El texto indica que 'una variable en JavaScript se define por un comando tal como: var x;'. También explica que 'varias variables se pueden definir en el mismo enunciado, con cada una separada por una coma'."},

  {s:"A",q:"¿Qué palabra clave de JavaScript declara una variable con alcance de bloque (Block Scope)?",
    o:["var","let","const","static"],
    c:1,
    e:"El texto indica que 'el statement let declara una variable con Block Scope... a diferencia de var que define la variable globalmente (fuera de cualquier función) o localmente dentro de una función'."},

  {s:"A",q:"¿Qué palabra clave de JavaScript declara una constante que no puede ser reasignada?",
    o:["final","const","immutable","readonly"],
    c:1,
    e:"El texto indica que 'el statement const declara una constante. Es similar a una variable definida usando var o let, pero con la variable siendo incapaz de ser cambiada después'."},

  {s:"A",q:"Según el texto, ¿cuántos tipos de número diferentes reconoce JavaScript?",
    o:["Solo uno","Dos: entero y decimal","Tres: int, float y double","Depende del navegador"],
    c:0,
    e:"El texto indica que 'JavaScript tiene solo un tipo de número (en contraste con, por ejemplo, Visual Basic, que diferencia entre enteros, números de punto flotante y números de doble precisión)'."},

  {s:"A",q:"¿Cómo se indexan las cadenas de texto (strings) en JavaScript según el texto?",
    o:["Empezando desde 1","Empezando desde 0 (zero-indexed)","Empezando desde -1","No se pueden indexar"],
    c:1,
    e:"El texto indica que 'una cadena técnicamente consiste en una serie de caracteres, que está indexada a cero. Así, si asignamos a x el valor \"Cat\" entonces x[0] sería \"C\", x[1] sería \"a\", etc.'."},

  {s:"A",q:"¿Qué tipo de variable en JavaScript puede cambiar de tipo durante la ejecución (por ejemplo, de número a string)?",
    o:["Solo las declaradas con const","Ninguna, JavaScript es fuertemente tipado","Todas, JavaScript es débilmente tipado (weakly typed)","Solo las declaradas con let"],
    c:2,
    e:"El texto explica que 'JavaScript adopta un enfoque diferente; sus variables son weakly typed. Su tipo puede cambiar a mitad de la ejecución del software. Por ejemplo: var x = 14; x=\"hello\";'."},

  /* ============================================================
     SECCIÓN B — Funciones, eventos y statements (10)
     ============================================================ */
  {s:"B",q:"¿Cómo se define una función en JavaScript según el texto?",
    o:["def nombre() { ... }","function nombre() { ... }","func nombre() { ... }","method nombre() { ... }"],
    c:1,
    e:"El texto muestra ejemplos como 'function func() { document.getElementById(\"element\").innerHTML = \"Hello\"; }' y explica que 'una función de JavaScript es un bloque de código JavaScript que puede ejecutarse como una unidad discreta'."},

  {s:"B",q:"¿Qué operador se utiliza en JavaScript para invocar (ejecutar) una función según el texto?",
    o:["El operador []","El operador ()","El operador {}","El operador <>"],
    c:1,
    e:"El texto indica que 'el operador () invoca la función, ej. en el ejemplo anterior func se refiere al objeto función, pero func() invocará la función misma'."},

  {s:"B",q:"En JavaScript, ¿qué diferencia hay entre los parámetros y los argumentos de una función según el texto?",
    o:["Son sinónimos exactos","Los parámetros son los nombres en la definición; los argumentos son los valores recibidos al invocarla","Los parámetros son los valores; los argumentos son los nombres","Los parámetros solo aplican a funciones flecha"],
    c:1,
    e:"El texto indica que 'los parámetros de la función son los nombres listados en la definición de la función (ej. la x en la definición de func2). Los argumentos de la función son los valores recibidos por la función (ej. asignados a los parámetros de la función) cuando es invocada'."},

  {s:"B",q:"¿Qué hace el statement 'return' en una función JavaScript según el texto?",
    o:["Reinicia la función","Detiene la ejecución de la función y devuelve un valor","Declara el tipo de retorno","Es un sinónimo de console.log"],
    c:1,
    e:"El texto indica que 'si una función incluye un statement return entonces la función dejará de ejecutarse y devolverá el valor identificado por el statement return de la función'."},

  {s:"B",q:"¿Qué método de JavaScript se utiliza para asociar una función a un evento global (como la carga de la página) según el texto?",
    o:["document.attachEvent()","document.addEventListener()","document.on()","document.bindEvent()"],
    c:1,
    e:"El texto indica que 'los eventos globales (no vinculados a elementos HTML específicos), tales como los desencadenados por la carga de la página, se implementan típicamente utilizando, por ejemplo, el método document.addEventListener'."},

  {s:"B",q:"¿Qué statement de JavaScript marca un bloque de código que se ejecuta según diferentes casos de una expresión?",
    o:["if...else","switch","case...of","select"],
    c:1,
    e:"El texto describe el statement switch como aquel que 'marca un bloque de statements a ejecutarse dependiendo de diferentes casos que una expresión proporcionada con el statement switch toma'."},

  {s:"B",q:"¿Qué statement de JavaScript se utiliza para ejecutar un bloque de código mientras una condición sea verdadera?",
    o:["for...in","switch","while","try"],
    c:2,
    e:"El texto indica que 'el statement while identifica un bloque de statements que se ejecuta repetidamente mientras una condición sea verdadera'."},

  {s:"B",q:"¿Cuál es la diferencia principal entre 'for' y 'for...in' en JavaScript según el texto?",
    o:["Son idénticos","'for' ejecuta un bloque mientras una condición es verdadera; 'for...in' ejecuta un bloque para cada elemento de un objeto","'for' es obsoleto y 'for...in' lo reemplaza","'for' solo funciona con números"],
    c:1,
    e:"El texto indica que 'for marca un bloque de statements a ejecutarse mientras una condición sea verdadera' y que 'for...in marca un bloque de statements a ejecutarse para cada elemento de un objeto (o array)'."},

  {s:"B",q:"¿Qué statement de JavaScript se utiliza para implementar manejo de errores según el texto?",
    o:["catch...finally","try...catch...finally","error...handle","throw...catch"],
    c:1,
    e:"El texto indica que 'el statement try...catch...finally (a menudo utilizado en conjunción con el statement throw) implementa manejo de errores'. Primero intenta ejecutar el código del try; si hay error, pasa al catch; finalmente, siempre ejecuta el bloque finally."},

  {s:"B",q:"¿Qué palabra clave de JavaScript se utiliza para lanzar una excepción según el texto?",
    o:["raise","throw","error","exception"],
    c:1,
    e:"El texto indica que 'el statement throw (a menudo utilizado en conjunción con el statement try...catch) implementa manejo de errores. Lanza una excepción (técnicamente un objeto Error)'."},

  /* ============================================================
     SECCIÓN C — DOM: acceso y manipulación (10)
     ============================================================ */
  {s:"C",q:"¿Qué significa la sigla DOM en el contexto de JavaScript según el texto?",
    o:["Data Object Management","Document Object Model","Dynamic Order Method","Direct Output Mode"],
    c:1,
    e:"El texto indica que 'el Document Object Model (DOM) de JavaScript HTML proporciona una forma para que JavaScript acceda a todos los elementos de una página web HTML'."},

  {s:"C",q:"¿Qué método de JavaScript se utiliza para acceder a un elemento HTML por su atributo id?",
    o:["document.getElementByName(id)","document.getElementById(id)","document.findElement(id)","document.queryElement(id)"],
    c:1,
    e:"El texto indica que 'una forma común de acceder a un elemento es asignarle un id... El elemento puede entonces ser identificado en JavaScript aplicando el método getElementById al objeto document'."},

  {s:"C",q:"¿Qué propiedad de JavaScript se utiliza para cambiar el contenido HTML interno de un elemento?",
    o:["innerText","textContent","innerHTML","htmlContent"],
    c:2,
    e:"El texto muestra ejemplos como 'document.getElementById(\"Added\").innerHTML=\"and using JavaScript\"' y explica que 'su propiedad innerHTML, que es el texto dentro de un elemento, puede establecerse asignando valores a la propiedad relevante del objeto elemento'."},

  {s:"C",q:"¿Qué método del DOM se utiliza para crear un nuevo elemento HTML en JavaScript?",
    o:["document.newElement()","document.createElement()","document.addElement()","document.makeElement()"],
    c:1,
    e:"El texto lista en su tabla de métodos del DOM: 'document.createElement(element) — Crea elemento HTML'. Ejemplo: var x = document.createElement(\"A\") crea un ancla."},

  {s:"C",q:"¿Qué método del DOM se utiliza para añadir un elemento hijo a un elemento existente?",
    o:["document.addChild(element)","document.appendChild(element)","document.insertNode(element)","document.pushChild(element)"],
    c:1,
    e:"El texto lista en su tabla: 'document.appendChild(element) — Añade elemento HTML'. Su complementario es removeChild (elimina)."},

  {s:"C",q:"¿Qué método del DOM se utiliza para eliminar un elemento hijo de un elemento existente?",
    o:["document.deleteChild(element)","document.removeChild(element)","document.popChild(element)","document.dropChild(element)"],
    c:1,
    e:"El texto lista en su tabla de métodos del DOM: 'document.removeChild(element) — Elimina elemento HTML'. Su complementario es appendChild (añade)."},

  {s:"C",q:"¿Qué método del DOM devuelve una colección de todos los elementos con un nombre de etiqueta específico?",
    o:["document.getElementsByTagName(name)","document.getElementsByName(name)","document.getElementByType(name)","document.findByTag(name)"],
    c:0,
    e:"El texto lista en su tabla de métodos del DOM: 'document.getElementsByTagName(name) — Devuelve colección de elementos por nombre de etiqueta (es decir, por tipo de elemento)'."},

  {s:"C",q:"¿Qué método del DOM se utiliza para obtener elementos por su nombre de clase CSS?",
    o:["document.getClassElements(name)","document.getElementsByClass(name)","document.getElementsByClassName(name)","document.findByClass(name)"],
    c:2,
    e:"El texto lista en su tabla de métodos del DOM: 'document.getElementsByClassName(name) — Devuelve colección de elementos por nombre de clase'."},

  {s:"C",q:"¿Qué método del DOM se utiliza para escribir HTML directamente en el flujo de salida del documento?",
    o:["document.print()","document.write()","document.output()","document.render()"],
    c:1,
    e:"El texto lista en su tabla de métodos del DOM: 'document.write(element) — Escribe directamente a la salida HTML'. Se suele usar principalmente para propósitos de prueba."},

  {s:"C",q:"Según el texto, ¿qué estructura tiene el DOM de una página HTML?",
    o:["Una tabla lineal","Una lista enlazada","Una estructura de árbol con nodos","Un grafo cíclico"],
    c:2,
    e:"El texto explica que 'el navegador crea un DOM (es decir, un objeto document) para una página cuando se carga la página por primera vez. Esto tiene una estructura de árbol, con el elemento raíz (o nodo) siendo el elemento <html> de la página'."},

  /* ============================================================
     SECCIÓN D — Objetos, arrays, strings y errores (10)
     ============================================================ */
  {s:"D",q:"Según el texto, ¿qué es un objeto en JavaScript?",
    o:["Un array especial","Un contenedor que contiene propiedades y métodos","Un tipo de variable primitiva","Una función anónima"],
    c:1,
    e:"El texto indica que 'los objetos JavaScript son contenedores que contienen propiedades y métodos'. Ejemplo: var person = {title:\"Mr\", surname:\"Smith\", age:30}."},

  {s:"D",q:"¿Cómo se accede a una propiedad de un objeto en JavaScript según el texto?",
    o:["Solo con person.title","Solo con person[\"title\"]","Con person.title o person[\"title\"] (ambas formas)","Con person->title"],
    c:2,
    e:"El texto indica que 'las propiedades de objeto pueden accederse de dos formas, ya sea aquí, por ejemplo, person.title o person[\"title\"] (ambas de las cuales en este caso devolverían un valor de \"Mr\")'."},

  {s:"D",q:"¿Cómo se define un array en JavaScript según el texto?",
    o:["var a = new Array(1,2)","var a = (\"France\", \"Germany\")","var a = [\"France\", \"Germany\"]","var a = {France, Germany}"],
    c:2,
    e:"El texto muestra ejemplos: 'var a = [\"France\", \"Germany\"]; var b = [1, 2, 5, 4];' y explica que 'los arrays contienen múltiples valores (indexados) en una sola variable. Los índices de array están basados en cero'."},

  {s:"D",q:"¿Qué método de array se utiliza para añadir elementos al final de un array según el texto?",
    o:["push()","pop()","shift()","unshift()"],
    c:0,
    e:"El texto lista en la tabla de métodos de array: 'push() — Añade nuevos elementos al final del array y devuelve la nueva longitud'. Su opuesto es pop() que elimina el último."},

  {s:"D",q:"¿Qué método de string se utiliza para convertir una cadena a mayúsculas según el texto?",
    o:["toUpper()","toUpperCase()","upper()","uppercase()"],
    c:1,
    e:"El texto lista en la tabla de métodos de string: 'toUpperCase() — Devuelve una cadena que es la cadena original convertida a caracteres en mayúscula'. Su opuesto es toLowerCase()."},

  {s:"D",q:"¿Qué propiedad de un string devuelve el número de caracteres que contiene según el texto?",
    o:["size","count","length","dim"],
    c:2,
    e:"El texto lista en la tabla de propiedades de string: 'length — Devuelve la longitud de la cadena'. Una cadena vacía tiene longitud 0."},

  {s:"D",q:"¿Qué método de string se utiliza para extraer una parte de una cadena según el texto?",
    o:["slice()","cut()","extract()","piece()"],
    c:0,
    e:"El texto lista en la tabla de métodos de string: 'slice() — Devuelve una nueva cadena formada por una parte de la cadena original'. Sus parámetros son la posición inicial y (opcionalmente) la final."},

  {s:"D",q:"¿Qué dos propiedades intrínsecas tienen los objetos de error en JavaScript según el texto?",
    o:["code y description","message y number","type y value","text y status"],
    c:1,
    e:"El texto indica que 'los objetos Error tienen dos propiedades intrínsecas, la propiedad .message que contiene una descripción del error y la propiedad .number que contiene el número de error del error'."},

  {s:"D",q:"¿Qué valor devuelve JavaScript en una operación numérica que no tiene sentido (por ejemplo, dividir texto por un número)?",
    o:["null","undefined","0","NaN"],
    c:3,
    e:"El texto indica que NaN representa 'Not-a-Number (es decir, si el cálculo se desborda)'. Es el resultado de una operación numérica inválida."},

  {s:"D",q:"¿Qué formato tiene una expresión regular en JavaScript según el texto?",
    o:["[pattern][modifiers]","{pattern}(modifiers)","/pattern/modifiers","<pattern modifiers>"],
    c:2,
    e:"El texto indica que las expresiones regulares 'toman la forma: /pattern/modifiers. Ejemplo: var x = /nematrian/i;'. Los modificadores pueden ser i (case-insensitive), g (global) o m (multilínea)."}
]};

window.BANCO_JS = BANCO_JS;