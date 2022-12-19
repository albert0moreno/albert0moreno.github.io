function plegarTexto(){
    let x = document.getElementById("inputUser");
    if(x.value<=0){
        document.getElementById("inputUser").style.placeholder.fontSize = "8px";
    }
}