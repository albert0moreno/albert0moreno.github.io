
function mostrarPassword(){
    var password = document.getElementById('password');

    if(password.type == 'text'){
        password.type = 'password';
    }else{
        password.type = 'text';
    }
}

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
