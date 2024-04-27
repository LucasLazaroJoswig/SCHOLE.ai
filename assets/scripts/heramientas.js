
function fRedirectWebProfeParticular() {
    window.location.href = "assets/herramientas/Profesor_particular.html";
}
function fRedirectWebGEneradorApuntes() {
    window.location.href = "assets/herramientas/Generador_de_apuntes.html";
}
function fRedirectWebDiocles(){
    window.location.href = "diocles.html";
}
function fRedirectWebArquimedes(){
    window.location.href = "arquimedes.html";
}
function fRedirectWebDeivi(){
    window.location.href = "deivi.html";
}

function fRedirectWebPanel() {
    window.location.href = "panel.html";
}

function fDesplegablePerfil(){
    
    let html= "";

            html+= "<div id='sel_perfil'>"
            html+='<a href="perfil.html">Perfil</a>'
        html+="</div>"
        html+="<div id='cerrar_sesion'>"
            html+= '<a href="index.html">Cerrar Sesión</a>'
        html+= "</div>";
        document.querySelector("#opt_perfil").innerHTML=html;

        document.querySelector("#opt_perfil").style.display= "block";   
}
