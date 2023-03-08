
//FUNCIONES MODO OSCURO Y CLARO
function oscuro(){
    document.querySelector('.luna').style.display='none';   //Desactiva la luna
    document.querySelector('.sol').style.display='block';   //Activa el sol


    document.querySelector('body').style.backgroundColor='black';   //Activa el fondo negro
    document.querySelector('body').style.color='white'; //Activa el color de letra blanco

    document.getElementsByClassName('card')[0].style.backgroundColor=' rgb(163, 163, 163)'; //Activa el fondo blanco de la primera columna
    document.getElementsByClassName('card')[1].style.backgroundColor=' rgb(163, 163, 163)'; //Activa el fondo blanco de la segunda columna
    document.getElementsByClassName('card')[2].style.backgroundColor=' rgb(163, 163, 163)'; //Activa el fondo blanco de la tercera columna

    document.querySelector('.text-muted').style.color='white';

}

function claro(){
    document.querySelector('.sol').style.display='none';    //Desactiva el sol
    document.querySelector('.luna').style.display='block';  //Activa la luna

    document.querySelector('body').style.backgroundColor='white';   //Activa el fondo blanco
    document.querySelector('body').style.color='inherit';   //Activa el color de letra heredado

    document.getElementsByClassName('card')[0].style.backgroundColor='white';
    document.getElementsByClassName('card')[1].style.backgroundColor='white';
    document.getElementsByClassName('card')[2].style.backgroundColor='white';

    document.querySelector('.text-muted').style.color='var(--bs-secondary-color)';
}