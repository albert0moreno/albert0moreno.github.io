
//FUNCIONES MODO OSCURO Y CLARO
function oscuro(){
    document.querySelector('.luna').style.display='none';   //Desactiva la luna
    document.querySelector('.sol').style.display='block';   //Activa el sol

    document.querySelector('body').style.backgroundColor='black';   //Activa el fondo negro
    document.querySelector('body').style.color='white'; //Activa el color de letra blanco
}

function claro(){
    document.querySelector('.sol').style.display='none';    //Desactiva el sol
    document.querySelector('.luna').style.display='block';  //Activa la luna

    document.querySelector('body').style.backgroundColor='white';   //Activa el fondo blanco
    document.querySelector('body').style.color='inherit';   //Activa el color de letra heredado
}

//FUNCIÓN QUE VERIFICA SI SE HA MANDADO EL CORREO
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.email').addEventListener('submit', function(event) {
        var emailInput = document.querySelector('.email input[type="email"]');
        if (emailInput.checkValidity()) {   // Si el campo de entrada de correo electrónico es válido
            //Se muestra el siguiente mensaje
            alert('Hemos guardado su correo en nuestra BBDD satisfactoriamente');
        }
    });
});


