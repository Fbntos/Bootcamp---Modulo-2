//DEFINO MIS DOS VARIABLES PARA LOS NÚMEROS
var n1 = Number(prompt('Ingrese un número'))
var n2 = Number(prompt('Ingrese otro número'))
mmi(n1,n2);


//FUNCION PARA DETERMINAR MAYOR, MENOS O IGUAL
function mmi (n1,n2)
{
    if (n1>n2){
        alert ("El número "+n1+" es mayor que "+n2);
        console.log("if1");
    } else if (n2>n1){
        alert ("El número "+n2+" es mayor que "+n1);
        console.log("if2");
    } else {
        alert ("Ambos números son iguales");
        console.log("if3");
    }
}
