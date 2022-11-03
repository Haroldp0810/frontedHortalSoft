Aqui estaran las instrucciones y desarrollo fronted del proyecto.

Cada parte de la pantalla estara distribuida por componentes que se dividen en su 
respectivo archivo de logica (.JSX) y archivo de estilos (.SCSS)

Se usaran 



Comandos y extensiones para instalar dentro de visual : 

    * Iconos: npm install @mui/icons-material @mui/material @emotion/styled @emotion/react 

    * ES7+ React/Redux/React-Native snippets: Plugin visual.

    * SASS: npm add node-sass

    * Boostrap: npm install bootstrap@5.2.2

Dependencias para usar 

    react-router-dom: una guia de enrutador https://v5.reactrouter.com/web/guides/quick-start

    Icons de Material: Tiene una peculiaridad de poder cambiar tamaño, color sin 
    distorcionarse ni volverse borroso.

    SASS: informacion (https://sass-lang.com/): Sass es un lenguaje de hojas de estilo
    compilado en CSS. Le permite usar variables , reglas anidadas , 
    mixins , funciones y más, todo con una sintaxis totalmente compatible con CSS

Mediciones para estilos 

VH: Viewport heigth (Altura del dispositivo) en relacion con el porcentaje especifico
Ejemplo: heigth:10vh = heigth:10%



Noticas Js

    Existe una clase dentro de un div llamada <div className="cubierta">, realmente es llamado 
    (wrapper), este es un componente que envuelve componentes desconocidos y proporcionan una 
    estructura predeterminada para visualizar los componentes secundarios.

    
Propiedades para css: 

    - width: Ancho 
    - height: Alto
    - background-color: Color de fondo
    - position: Posicion
        Existen variantes para esta propiedad tales, como:

        * position: static; -> Las propiedades asignadas a este valor, como izquierda derecha, etc
                               no tienen nigun efecto, es un elemento estatico 

        * position: relative: -> Las propiedades asignadas a este valor se ajusta lejos de su posicion 
                               normal

    - top: Parte superior
    - z-index: indica el orden de un elemento posicionado, los elementos con mayor valor de z-index cubren
    aquellos con menos valor 

