
function mostrarOjo(){
    let a = document.getElementById("inputContraseña");
    if(a.value<=0){
        document.getElementById("mostrar").style.display = "none";
    }else{
        document.getElementById("mostrar").style.display = "block";
    }
}

function desactivarOjoMostrar(){
    document.getElementById("mostrar").style.display = "none";
}

function activarOjoOcultar(){
    document.getElementById("ocultar").style.display = "block";
}

function mostrarContraseña(){
    let x = document.getElementById("inputContraseña");
    if (x.type==="password"){
        x.type="text"
    } else{
        x.type="password";
    }
}

function desactivarOjoOcultar(){
    document.getElementById("ocultar").style.display ="none";
}

function activarOjoMostrar(){
    document.getElementById("mostrar").style.display ="block";
}