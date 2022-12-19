
// SI LAS CONTRASEÑAS NO COINCIDEN BLOQUEA EL SUBMIR Y LANZA UNA ALERTA
function validationPasswords(){
    
a = document.getElementById("inputContraseña").value
b = document.getElementById("inputContraseña2").value

if(a!=b){
    submit = document.getElementById("submit");
    submit.disabled = true;
    alert("Las contraseñas introducidas no coinciden. Inténtelo de nuevo.");
    }
}

// ACTIVA EL SUBMIT
function activationSubmit(){
    submit = document.getElementById("submit");
    submit.disabled = false;
    
}