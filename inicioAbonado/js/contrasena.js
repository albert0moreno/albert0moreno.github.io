function autofocus(){
         document.getElementById("inputContraseña")
         setAttribute("autofocus", "");
}


// VISIBILIZA EL OJO ABIERTO CUANDO HAY ALGO ESCRITO
function mostrarOjo(){
    let password = document.getElementById("inputContraseña").value
    
    if(password.length==0){
        document.getElementById("mostrar").style.display = "none";
        document.getElementById("ocultar").style.display = "none";
 
    }
    
    else{
        document.getElementById("mostrar").style.display = "block";
        document.getElementById("ocultar").style.display = "none";

    }

    this.fallo1();
    this.fallo2();

}

// OCULTA EL OJO ABIERTO
function desactivarOjoMostrar(){
    document.getElementById("mostrar").style.display = "none";
}

// VISIBILIZA EL OJO CERRADO
function activarOjoOcultar(){
    document.getElementById("ocultar").style.display = "block";
}


// CONVIERTE LA CONTRASEÑA EN TEXTO
function mostrarContraseña(){
    let x = document.getElementById("inputContraseña");
    if (x.type==="password"){
        x.type="text"
    } else{
        x.type="password";
    }
}

// OCULTA EL OJO CERRADO
function desactivarOjoOcultar(){
    document.getElementById("ocultar").style.display ="none";
}

// CONVIERTE EL TEXTO EN CONTRASEÑA
function ocultarContraseña(){
    let x = document.getElementById("inputContraseña");
    if (x.type==="text"){
        x.type="password"
    } else{
        x.type="password";
    }

}

// VISIBILIZA EL OJO ABIERTO
function activarOjoMostrar(){
    document.getElementById("mostrar").style.display ="block";
}



// SUBSANA EL ERROR DE ACTIVACIÓN DE OJO MOSTRAR CUANDO SE ESCRIBE O BORRA CON OJO OCULTAR ACTIVO
function fallo1(){
    let x = document.getElementById("inputContraseña");
    if (x.type==="text"){
        document.getElementById("mostrar").style.display ="none";
        document.getElementById("ocultar").style.display ="block";

    }
}

// SUBSANA EL ERROR QUE SE PRODUCE CUANDO BORRAS TODO Y SIGUE ACTIVO EL OJO OCULTAR
function fallo2(){
    let password = document.getElementById("inputContraseña").value
    if(password.length==0){
        document.getElementById("ocultar").style.display = "none";
    }
}

