startF();

//----------------FUNCIONES----------------//
//FUNCION TOMAR INFO
function startF(){
    do {
        var opc = Number(prompt("Seleccione que desea hacer:\n 1.- Calcular cual es el número es mayor\n 2.- Sumar\n 3.- Restar\n 4.- Multiplicar\n 5.- Dividir\n 6.- Mostrar los números ingresados\n 7.- Salir"));
        if (opc !== 1 && opc !== 2 && opc !== 3 && opc !== 4 && opc !== 5 && opc !== 6 && opc !== 7){
            alert("¡Ingrese un número del 1 al 7 por favor!");
        }
        //VERIFICIO LA OPCION
        switch (opc){
            case 1:
                numeroMayor();
            break;
            case 2:
                suma();
            break;
            case 3:
                resta();
            break;
            case 4:
                multiplicacion();
            break;
            case 5:
                division();
            break;
            case 6:
                mostrarNumeros();
            break;
            default:

            break;
        }
    } while (opc !== 7);
}

//FUNCION NUMERO MAYOR
function numeroMayor ()
{
    var n1 = Number(prompt("Ingrese el primer número"));
    var n2 = Number(prompt("Ingrese el segundo número"));
    if (n1>n2){
        alert ("El número "+n1+" es mayor que "+n2);
    } else if (n2>n1){
        alert ("El número "+n2+" es mayor que "+n1);
    } else {
        alert ("Ambos números son iguales");
    }
}

//FUNCION SUMAR
function suma (){
    var n1 = Number(prompt("Ingrese el primer número"));
    var n2 = Number(prompt("Ingrese el segundo número"));
    alert("La suma de los números es: "+(n1+n2))
}

//FUNCION RESTAR
function resta (){
    var n1 = Number(prompt("Ingrese el primer número"));
    var n2 = Number(prompt("Ingrese el segundo número"));
    alert("La resta de ambos números es: "+(n1-n2))
}

//FUNCION MULTIPLICAR
function multiplicacion (){
    var n1 = Number(prompt("Ingrese el primer número"));
    var n2 = Number(prompt("Ingrese el segundo número"));
    alert("La multiplicacion de ambos números es: "+(n1*n2))
}

//FUNCION DIVIDIR
function division (){
    var n1 = Number(prompt("Ingrese el primer número"));
    do {
        var n2 = Number(prompt("Ingrese el segundo número"));
        if (n2===0 ){
            alert("¡No puede dividir por 0, por favor vuelva a ingresar un número!")
        }
    } while(n2===0);
    alert("La división de los números es: "+(n1/n2))
}

//FUNCION MOSTRAR
function mostrarNumeros (){
    var n1 = Number(prompt("Ingrese el primer número"));
    var n2 = Number(prompt("Ingrese el segundo número"));
    alert("Los números ingresados son: "+n1+" y "+n2)
}
