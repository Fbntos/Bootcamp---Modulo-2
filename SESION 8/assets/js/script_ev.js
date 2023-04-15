//CREACION DEL OBJETO USUARIO
function Usuario(rut,nombre,clave,saldo){
    this.rut = rut;
    this.nombre = nombre;
    this.clave = clave;
    this.saldo = saldo;
}
//AGREGANDO UN USUARIO PARA EL EJEMPLO
var user1 = new Usuario('123','Alfonso Diaz','12345',25000);

//EJECUCIÓN
menuOpciones();






// FUNCIONES // 
function login(){
    alert('Bienvenido a Banca en Línea');
    let check = false;
    do {
        var rut = prompt('Ingrese su rut');
        var clave = prompt('Ingrese su clave');
        if (rut==user1.rut && clave==user1.clave){
            alert('Bienvenido '+user1.nombre);
            check = true;
            break;
        } else {
            alert('El rut o la contraseña no son validos, vuelva a intentar');
        }
    } while (!check)
    return true;
}

function menuOpciones(){
    if (login()){
        do {
            var opc = Number(prompt("Seleccione que desea hacer:\n 1.-Ver saldo\n 2.-Realizar giro\n 3.-Realizar Deposito\n 4.-Salir"));
            if (opc !== 1 && opc !== 2 && opc !== 3 && opc !== 4){
                alert("¡Ingrese un número del 1 al 4 por favor!");
            }
            switch (opc){
                case 1:
                    verSaldo();
                break;
                case 2:
                    exGiro();
                break;
                case 3:
                    exDeposito();
                break;
                default:

                break;
            }
        } while (opc !== 4);
    }
}

function verSaldo(){
    alert('Su saldo es de: '+user1.saldo);
}

function exGiro(){
    var montoGiro = Number(prompt('Su saldo actual es: '+user1.saldo+'\n Ingrese el monto que desea girar'));
    if (montoGiro >! 0){
        if (montoGiro <= user1.saldo){
            user1.saldo = user1.saldo - montoGiro;
            alert('Giro Realizado\n Su nuevo saldo es: '+user1.saldo);
        } else {
            alert('El saldo a girar supera el máximo.');
        }
    } else {
        alert('El monto a girar debe ser superior a 0');
    }
        
}

function exDeposito(){
    var montoDeposito = Number(prompt('Su saldo actual es: '+user1.saldo+'\n Ingrese el monto que desea depositar'));
    if (montoDeposito >! 0){
        user1.saldo = user1.saldo + montoDeposito;
        alert('Deposito Realizado\n Su nuevo saldo es: '+user1.saldo);
    } else {
        alert('El monto a depositar debe ser superior a 0');
    }
}
