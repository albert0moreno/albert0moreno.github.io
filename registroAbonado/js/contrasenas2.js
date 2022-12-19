// VISIBILIZA EL OJO ABIERTO CUANDO HAY ALGO ESCRITO
function mostrarOjo2(){
    let password = document.getElementById("inputContraseña2").value
    
    if(password.length==0){
        document.getElementById("mostrar2").style.display = "none";
        document.getElementById("ocultar2").style.display = "none";}

    else{
        document.getElementById("mostrar2").style.display = "block";
        document.getElementById("ocultar2").style.display = "none";

    }

    this.fallo01();
    this.fallo02();
}


// OCULTA EL OJO ABIERTO
function desactivarOjoMostrar2(){
    document.getElementById("mostrar2").style.display = "none";
}

// VISIBILIZA EL OJO CERRADO
function activarOjoOcultar2(){
    document.getElementById("ocultar2").style.display = "block";
}


// CONVIERTE LA CONTRASEÑA EN TEXTO
function mostrarContraseña2(){
    let x = document.getElementById("inputContraseña2");
    if (x.type==="password"){
        x.type="text"
    } else{
        x.type="password";
    }
}

// OCULTA EL OJO CERRADO
function desactivarOjoOcultar2(){
    document.getElementById("ocultar2").style.display ="none";
}

// CONVIERTE EL TEXTO EN CONTRASEÑA
function ocultarContraseña2(){
    let x = document.getElementById("inputContraseña2");
    if (x.type==="text"){
        x.type="password"
    } else{
        x.type="password";
    }

}

// VISIBILIZA EL OJO ABIERTO
function activarOjoMostrar2(){
    document.getElementById("mostrar2").style.display ="block";
}




// SUBSANA EL ERROR DE ACTIVACIÓN DE OJO MOSTRAR CUANDO SE ESCRIBE O BORRA CON OJO OCULTAR ACTIVO
function fallo01(){
    let x = document.getElementById("inputContraseña2");
    if (x.type==="text"){
        document.getElementById("mostrar2").style.display ="none";
        document.getElementById("ocultar2").style.display ="block";

    }
}

// SUBSANA EL ERROR QUE SE PRODUCE CUANDO BORRAS TODO Y SIGUE ACTIVO EL OJO OCULTAR
function fallo02(){
    let password = document.getElementById("inputContraseña2").value
    if(password.length==0){
        document.getElementById("ocultar2").style.display = "none";
    }
}