
function fAbrirModalLogin(){   
    document.querySelector("#form_login_inicio_sesion").style.display = "flex";
}   
function fCerrarLogin(){
    document.querySelector("#form_login_inicio_sesion").style.display = "none";
}
function fExpandirLogin(){ 
    document.querySelector("#expandir_login").style.display = "none";
    document.querySelector("#div_registro").style.flexGrow = 1;
    document.querySelector("#div_iniciar_sesion").style.flexGrow = 0;
    document.querySelector("#div_iniciar_sesion").style.width = 150 + "px";
    document.querySelector("#form_registro").style.display = "block";
    document.querySelector("#form_login").style.display = "none";
    setTimeout(function() {
        document.querySelector("#expandir_registro").style.display = "flex";
    }, 1000);}
function fExpandirRegistro(){
    document.querySelector("#div_registro").style.flexGrow = 0;
    document.querySelector("#div_iniciar_sesion").style.flexGrow = 1;
    document.querySelector("#expandir_registro").style.display = " none";
    document.querySelector("#div_registro").style.width = 150 + "px";
    document.querySelector("#div_iniciar_sesion").style.width = 100 +"vh";
    document.querySelector("#form_registro").style.display = "none";
    document.querySelector("#form_login").style.display = "block";
    setTimeout(function() {
        document.querySelector("#expandir_login").style.display = "flex";
    }, 1000);
}