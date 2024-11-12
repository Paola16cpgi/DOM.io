//funcion circulo
// function cambiarText(){

//     const selectorTitulo= document.getElementById('Titulo');
//     const nombreUsuario= prompt('Ingrese su nombre');
//     const contenedor= document.getElementById("cont-general");

//     //CAMBIANDO CONTENIDO DE UNA ETIQUETA DESDE JS
//     selectorTitulo.innerText = 'DIANA ACOSTA'

//     selectorTitulo.innerHTML = "<strong> USUARIO: <strong/> "+ nombreUsuario;

//     //CAMBIANDO ESTILOS DE UNA ETIQUETA DESDE JS
//     selectorTitulo.style.backgroundColor = 'pink';
//     selectorTitulo.style.padding ='20px';
//     selectorTitulo.style.color = '#000';

//     //CAMBIANDO ESTRUCTURA DE UNA ETIQUETA DESDE JS

//     contenedor.classList.add('dia');

// }

function circulo(){
    const selectorTitulo= document.getElementById('Titulo');
    const selectorFigura= document.getElementById('Figura');

    selectorTitulo.innerText = "CIRCULO";
    selectorFigura.style.borderRadius="50%";

}

function rombo(){
    const modiRombo= document.getElementById('Titulo');
    const modiRombo1= document.getElementById('Figura');

    modiRombo.innerText ="ROMBO";
    modiRombo1.style.transform= "rotate(45deg)";
}

function fondo(){
    const fondo = document.getElementById('cont-general');
    const tit= document.getElementById('Titulo')

    fondo.style.backgroundColor="pink";
    tit.innerText="Cambio de fondo";

}

function arriba(){
    const mover=document.getElementById('Figura');
    const top=document.getElementById('Titulo');

    top.innerText="TOP";
    mover.style.position= 'relative';
    mover.style.top= "-70px";
}

function izquierda(){
    const m1=document.getElementById('Figura');
    const m2=document.getElementById('Titulo');

    m2.innerText="IZQUIERDA";
    m1.style.alignSelf= "flex-start";
    m1.style.marginLeft= "10px";
}

function abajo(){
    const move=document.getElementById('Figura');
    const move1=document.getElementById('Titulo');

    move1.innerText="DOWN";
    move.style.position= 'relative';
    move.style.bottom= "-150px";
}

function derecha(){
    const m3=document.getElementById('Figura');
    const m4=document.getElementById('Titulo');

    m4.innerText="DERECHA";
    m3.style.alignSelf="flex-end"
    m3.style.marginRight= "10px";
}

function fondoimagen(){
    const figuras=document.getElementById('Figura');
    const texto=document.getElementById('Titulo');
    const imagenes=["img/hoy.PNG"];

    figuras.style.backgroundImage= `url(${imagenes})`;
    texto.innerText="Cambio de imagen";
}

function diagonal(){
    const figuras=document.getElementById('Figura');
    const texto=document.getElementById('Titulo');

    
    texto.innerText="DIAGIONAL";
    figuras.style.position= 'relative';
    figuras.style.left= "150px"
    figuras.style.top= "-70px";

     
}

function degradado(){
    const selectortitulo= document.getElementById('Titulo');
    Figura.classList.add('degradado');
    selectortitulo.innerText = "DEGRADADO";
}

function cambiarAEstrella() {
    const cambioestrella = document.getElementById("Figura");
    const cambiotexto = document.getElementById("Titulo");

    // Cambia la forma del cuadrado a una estrella usando clip-path
    cambioestrella.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    cambioestrella.style.backgroundColor = "aquamarine"; // Cambia el color, si deseas

    // Cambia el texto para reflejar el cambio
    cambiotexto.innerText = "STAR";
}

function animacions(){
    const texto=document.getElementById("Titulo");
    Figura.classList.add('animacions');

    texto.innerText= "ANIMACIÓN";
}

function panelLateral(){
    const panel=document.getElementById("panelLateral");

    panel.classList.toggle("active")
}

function panelSuperior(){
    const panel=document.getElementById("panelSuperior");

    panel.classList.toggle("active")
}

function volver(){
    const panel=document.getElementById("panelLateral");

    panel.classList.toggle("active")
}

function play(){
    const panel=document.getElementById("panelSuperior");

    panel.classList.toggle("active")
}