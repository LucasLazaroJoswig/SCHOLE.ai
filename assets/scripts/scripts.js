let sections = document.querySelectorAll('.section')
let navLinks = document.querySelectorAll('div a')
let usuario_logeado=""

// window.addEventListener('resize', function(){

//   let anchoLimite = 900;
//   let hoh = document.querySelector('#hamb-options-header');
//   let hamb = document.querySelector('#hamb');
//   let hamb2 = document.querySelector('#hamb2');
//   console.log(window.innerWidth)
//   if (window.innerWidth > anchoLimite) {
//     window.reload
// } else {
//     hoh.style.display = 'flex';
//     hamb2.style.display='none';
//     hamb.style.display='flex';
//     if(hamb2.style.display='flex'){
      
//     }
// }
// if(window.innerWidth = anchoLimite){
  
// }
// if(window.innerWidth > anchoLimite){
//   hamb.style.display='flex';
// }

// })

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(to >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('div a[href*=' + id + ']').classList.add('active');
      });
    }
  })
}




function fInicio(){
  // document.getElementById('noti').classList.remove('mostrar-noti');
  
  gsap.to("#sol",{
    scrollTrigger:{
      trigger:"#sol",
      // start:"top center",
      // end:"top 100px",
      scrub: 1,
      
      toggleActions:"reverse pause reverse none"
      
    },
    y: 300,
    duration:3
  });
  gsap.to("#img1",{
    scrollTrigger:{
      trigger:"#img1",
      // start:"top center",
      // end:"top 100px",
      scrub: 1,
      
      toggleActions:"reverse pause reverse none"
      
    },
    y: -120,
    duration:1
  });
  gsap.to("#img2",{
    scrollTrigger:{
      trigger:"#img2",
      // start:"top center",
      // end:"top 100px",
      scrub: 1,
      
      toggleActions:"reverse pause reverse none"
      
    },
    y: -70,
    duration:2
  });
  gsap.to("#img3",{
    scrollTrigger:{
      trigger:"#img3",
      // start:"top center",
      // end:"top 100px",
      scrub: 1,
    
      toggleActions:"reverse pause reverse none"
      
    },
    y: -50,
    duration:3

    
  });
  gsap.to("#cards-tittle",{
    scrollTrigger:{
      trigger:"#cards-tittle",
      // start:"top center",
      // end:"top 100px",
      scrub: 1,
      
      toggleActions:"reverse pause reverse none"
      
    },
    y: 10,
    duration:3
  });


	// -----------------------Script para el scroll-------------------------
	// const panels = gsap.utils.toArray(".carousel-item");
	// const items = gsap.utils.toArray("#carousel-item");
	// const controls = document.querySelectorAll(".carousel-navigation li");
	// controls.forEach((item, i) => {
	//   item.addEventListener("click", () => {
	// 	gsap.to(window, { scrollTo: { y: items[i]} });
	//   });
	// });
	
	items.forEach((layer, i) => {
	  if (i < items.length - 1) {
		ScrollTrigger.create({
		  trigger: layer,
		  duration:1,
		//pin: true,
		  start: "top top",
		//   pinSpacing: false,
		  snap: 1,
		//   onEnter: () => controls[i].classList.add("active"),
		//   onLeave: () => controls[i].classList.remove("active"),
		//   onEnterBack: () => controls[i].classList.add("active"),
		//   onLeaveBack: () => controls[i].classList.remove("active")
		});
	  } else {
		ScrollTrigger.create({
		  trigger: layer,
		  duration:1,
		//   pin: true,
		  start: "top",
		//   pinSpacing: true,
		  snap: 1,
		//   onEnter: () => controls[i].classList.add("active"),
		//   onLeave: () => controls[i].classList.remove("active"),
		//   onEnterBack: () => controls[i].classList.add("active"),
		//   onLeaveBack: () => controls[i].classList.remove("active")
		});
	  }
	});

  
	
	// const tlfour = gsap.timeline({
	//   scrollTrigger: {
	// 	duration:0.5,
	// 	trigger: ".carousel-inner",
	// 	start: "top-=100px",
	// 	end: "0",
	// 	marker: true,
	// 	toggleActions: "play none none reverse",
	// 	endTrigger: panels[panels.length - 1]
	//   }
	// });
	//----------------------------------------------------------------
}
function flip(event){
  var element = event.currentTarget;
  if (element.className === "card") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};
function timeout(){
  setTimeout(fLimpiarInputContactos, 1000)
let correo = document.querySelector("#correo").value
let mensaje = document.querySelector("#mensaje").value
  if(correo != "" || mensaje != ""){
    document.getElementById('noti-correcto').classList.add('mostrar-noti');
    setTimeout(fQuitarNoti, 3000)
  }
  else{
    console.log("incorrecto")
    document.getElementById('noti-incorrecto').classList.add('mostrar-noti');
    setTimeout(fQuitarNoti, 3000)
  }
}
function fQuitarNoti(){
  document.getElementById('noti-correcto').classList.remove('mostrar-noti');
  document.getElementById('noti-incorrecto').classList.remove('mostrar-noti');
}
function fLimpiarInputContactos(){
  document.getElementById("correo").value="";
  document.getElementById("mensaje").value="";
}

function fMostrarOptionsHeader() {
  document.getElementById('hamb-options-header').classList.add('mostrar');
  // document.querySelector("#hamb-options-header").style.display="flex"
  document.querySelector("#hamb").style.display="none"
  document.querySelector("#hamb2").style.display="block"
  

}
function fOcultarOptionsHeader() {
  // document.querySelector("#hamb-options-header").style.display="none"
  document.querySelector("#hamb").style.display="block"
  document.querySelector("#hamb2").style.display="none"
  document.getElementById('hamb-options-header').classList.remove('mostrar');
}



function fAbrirModalLogin() {
    document.querySelector("#form_login_inicio_sesion").style.display = "flex";
    fExpandirRegistro();
}
function fAbrirModalRegister() {
  document.querySelector("#form_login_inicio_sesion").style.display = "flex";
  fExpandirLogin();
}
function fCerrarLogin() {
    document.querySelector("#form_login_inicio_sesion").style.display = "none";
}
function fExpandirLogin() {
    document.querySelector("#expandir_login").style.display = "none";
    document.querySelector("#div_registro").style.flexGrow = 1;
    document.querySelector("#div_iniciar_sesion").style.flexGrow = 0;
    document.querySelector("#div_iniciar_sesion").style.width = 300 + "px";
    document.querySelector("#form_registro").style.display = "block";
    document.querySelector("#form_login").style.display = "none";
    setTimeout(function () {
        document.querySelector("#expandir_registro").style.display = "flex";
    }, 1000);
}
function fExpandirRegistro() {
    document.querySelector("#div_registro").style.flexGrow = 0;
    document.querySelector("#div_iniciar_sesion").style.flexGrow = 1;
    document.querySelector("#expandir_registro").style.display = " none";
    document.querySelector("#div_registro").style.width = 0 + "px";
    document.querySelector("#div_iniciar_sesion").style.width = 100 + "vh";
    document.querySelector("#form_registro").style.display = "none";
    document.querySelector("#form_login").style.display = "block";
    setTimeout(function () {
        document.querySelector("#expandir_login").style.display = "flex";
    }, 1000);
}



// Recoge los datos del usuario logeadp de Google y los saca por pantalla 
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); 

    let usu_nombre = profile.getName();
    let usu_email = profile.getEmail();
    let Image_URL = profile.getImageUrl();
    let password = "Random";

    
    let URL = 'assets/php/servidor.php?peticion=ControlRegistroGoogle';
    URL += "&usu_nombre=" + usu_nombre;
    URL += "&usu_alias=" + usu_nombre;
    URL += "&usu_email=" + usu_email;
    URL += "&Image_URL=" + Image_URL;
    URL += "&password=" + password;
    console.log("Parametros del login-Google")
    console.log("nombre: ",usu_nombre)
    console.log("alias_usu: ",usu_alias)
    console.log("email: ",usu_email)
    console.log("Image_URL: ",Image_URL)
    console.log("password: ",password)
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log("REGISTRO GOOGLE", data);
            if (data.datos == 0) {
                document.querySelector("#rdiv_error").innerHTML = "Inténtelo más tarde";
                return;
            }
            // // Mostrar un mensaje
            // document.querySelector("#mensaje").innerHTML = "Registro correcto";
            // fMostrar("form_mensaje");
            // // Pasado x tiempo, mostrar el formulario de login
            // evento = setTimeout(fCerrarEvento, 2000);


        })
}

// Cierra la sesión del uuario en la app 
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}





function fControlRegistrar() {
    // Leer el nombre
    let usu_nombre = document.querySelector("#nombre").value;
    if (usu_nombre == "") {
        document.querySelector("#rdiv_error").innerHTML = "Escriba su Nombre";
        return;
    }
    // Leer el nombre de usuario
    let usu_alias = document.querySelector("#nombre_usuario").value;
    if (usu_alias == "") {
        document.querySelector("#rdiv_error").innerHTML = "Escriba su Nombre de usuario";
        return;
    }
    // Leer el email
    let usu_email =  document.querySelector("#email_registro").value;
    if (usu_email == "") {
        document.querySelector("#rdiv_error").innerHTML = "Escriba su email";
        return;
    }
    // Leer el password
    let password = document.querySelector("#password_registro").value;
    let password2 = document.querySelector("#rpassword_registro").value;
    if (password == "") {
        document.querySelector("#rdiv_error").innerHTML = "Escriba su Contraseña";
        return;
    }
    // Comprobar los password
    if (password != password2) {
        document.querySelector("#rdiv_error").innerHTML = "Los password no coinciden";
        return;
    }
    
    let URL = 'assets/php/servidor.php?peticion=ControlRegistro';
    URL += "&usu_nombre=" + usu_nombre;
    URL += "&usu_alias=" + usu_alias;
    URL += "&usu_email=" + usu_email;
    URL += "&password=" + password;
    console.log("Parametros del login")
    console.log("nombre: ",usu_nombre)
    console.log("alias_usu: ",usu_alias)
    console.log("email: ",usu_email)
    console.log("password: ",password)
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log("REGISTRO", data);
            if (data.datos == 0) {
                document.querySelector("#rdiv_error").innerHTML = "Inténtelo más tarde";
                return;
            }
            fRedirectWebPanel();
            // // Mostrar un mensaje
            // document.querySelector("#mensaje").innerHTML = "Registro correcto";
            // fMostrar("form_mensaje");
            // // Pasado x tiempo, mostrar el formulario de login
            // evento = setTimeout(fCerrarEvento, 2000);


        })
}

function fControlLogin() {
    // Leer el alias
  let alias = document.querySelector("#nombre_usuario").value;
  // Comprobando que el alias no este vacio
 if (alias == ""){
   document.querySelector("#nombre_usuario").innerHTML = "Escriba su Alias";
   return;
 }
 // Leer el password
 let password = document.querySelector("#password_login").value;
  // Comprobando que el password no este vacio
 if (password == ""){
   document.querySelector("#div_error").innerHTML = "Escriba la Contraseña";
   return;
 }
 // Buscar el alias y el password en la BBDD
 
 let URL = 'assets/php/servidor.php?peticion=ControlLogin';
 URL += "&alias=" + alias;
 URL += "&password=" + password;
 fetch(URL)
     .then((response) => response.json())
     .then((data) => {
         console.log(data);
         alert("Se ha logeado")
         // Si es correcto
         if (data.datos.length == 0){
             document.querySelector("#div_error").innerHTML = "Usuario no registrado";
             return;
         }
         alert("Se logeado")
         fRedirectWebPanel();
         usuario_logeado = data.datos[0];
         console.log('usuario_logeado: ',usuario_logeado)
     })
     .finally( function(){
         // fCancelar();
        

     })
}
function fConfiguracion(){
  document.querySelector("#nombre_usu").innerHTML=usuario_logeado.usu_alias;
  document.querySelector("#correo_usu").innerHTML=usuario_logeado.usu_email;
  document.querySelector("#nombre_apellidos").innerHTML=usuario_logeado.usu_nombre;
}