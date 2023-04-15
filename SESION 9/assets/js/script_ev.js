// VALIDAR FORMULARIO DE CONTACTO
function validarFormCom(){
    if (!(document.getElementById('name-com').value.trim() == '')){
        let nombre = document.getElementById('name-com').value; 
        if(!(document.getElementById('email-com').value.trim() =='')){
            let correo = document.getElementById('email-com').value;
            if (!(document.getElementById('phone-com').value.trim() == '')){
                let telefono = document.getElementById('phone-com').value;
                if (!(document.getElementById('reason-com').value.trim() == '')){
                    let motivo = document.getElementById('reason-com').value;
                    if (!(document.getElementById('message-com').value.trim() == '')){
                        let message = document.getElementById('message-com').value;
                        alert ('Muchas gracias '+nombre+' hemos recibido su sugerencia y enviaremos una pronta respuesta al correo '+correo);
                        return true;
                    } else {
                        alert('¡El mensaje del contacto es obligatorío!');
                        return false;
                    }
                } else {
                    alert('¡El motivo de contacto es obligatorío!');
                    return false;
                }
            } else {
                alert('¡El Teléfono es obligatorío!');
                return false;
            }
        } else { 
            alert('¡El Correo Electrónico es obligatorío!');
            return false;
        }
    } else {
        alert('¡El nombre es obligatorío!');
        return false;
    }
}

// VALIDAR FORMULARIO DE RESERVA
function validarFormRes(){
    if (!(document.getElementById('name-res').value.trim() == '')){
        let nombre = document.getElementById('name-res').value; 
        if(!(document.getElementById('email-res').value.trim() =='')){
            let correo = document.getElementById('email-res').value;
            if (!(document.getElementById('phone-res').value.trim() == '')){
                let telefono = document.getElementById('phone-res').value;
                if (!(document.getElementById('fecha-res').value.trim() == '')){
                    let motivo = document.getElementById('fecha-res').value;
                    if (!(document.getElementById('hora-res').value.trim() == '')){
                        let message = document.getElementById('hora-res').value;
                        if (!(document.getElementById('cantidad-res').value.trim() == '')){
                            let asistentes = document.getElementById('cantidad-res').value;
                            alert ('Muchas gracias '+nombre+' hemos recibido su reserva');
                            return true;
                        } else {
                            alert('¡La cantidad de asistentes de la reserva es obligatoría!');
                            return false;
                        }
                    } else {
                        alert('¡La hora de la reserva es obligatoría!');
                        return false;
                    }
                } else {
                    alert('¡La fecha de la reserva es obligatoría!');
                    return false;
                }
            } else {
                alert('¡El Teléfono es obligatorío!');
                return false;
            }
        } else { 
            alert('¡El Correo Electrónico es obligatorío!');
            return false;
        }
    } else {
        alert('¡El nombre es obligatorío!');
        return false;
    }

}

// MOSTRAR FORMULARIO DE CONTACTO EN DISPOSITIVOS PEQUEÑOS
function mostrarFormCom(){
    const containerForm1 = document.getElementById('container-form1');
    containerForm1.classList.remove('d-none');
}

// MOSTRAR FORMULARIO DE RESERVA EN DISPOSITIVOS PEQUEÑOS
function mostrarFormRes(){
    const containerForm2 = document.getElementById('container-form2');
    containerForm2.classList.remove('d-none');
}