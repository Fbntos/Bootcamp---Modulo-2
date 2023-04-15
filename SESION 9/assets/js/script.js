// document.gestElementById
var h1 = document.getElementById('h-1');
var boton = document.getElementById("btn-1");

function cambiarTexto(){
    boton.innerHTML = ("Cambiar texto 2");
    h1.style.border = ('black solid 1px');
}

function revertirCambio(){
    boton.innerHTML = ("Cambiar texto");
    h1.style.border = '';
}

function insertElementBody(){
    var newElement = document.createElement('p');
    newElement.textContent = 'Este elemento fue creado a traves de JS.';
    document.body.appendChild(newElement);
}

function insertElement(){
    var classN = document.querySelector('.cont-newElement');
    var newP = document.createElement('p');
    newP.textContent = 'Este elemento fue creado a través de JS. N2';
    classN.append(newP)
}


