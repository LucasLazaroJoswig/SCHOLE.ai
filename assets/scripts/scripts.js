let sections = document.querySelectorAll('.section')
let navLinks = document.querySelectorAll('div a')

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
	// -----------------------Script para el scroll-------------------------
	// const panels = gsap.utils.toArray(".carousel-item");
	const items = gsap.utils.toArray("#carousel-item");
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


function fAbrirModalLogin() {
    document.querySelector("#form_login_inicio_sesion").style.display = "flex";
}
function fCerrarLogin() {
    document.querySelector("#form_login_inicio_sesion").style.display = "none";
}
function fExpandirLogin() {
    document.querySelector("#expandir_login").style.display = "none";
    document.querySelector("#div_registro").style.flexGrow = 1;
    document.querySelector("#div_iniciar_sesion").style.flexGrow = 0;
    document.querySelector("#div_iniciar_sesion").style.width = 150 + "px";
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
    document.querySelector("#div_registro").style.width = 150 + "px";
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
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
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
    let nombre = document.querySelector("#nombre").value;
    if (nombre == "") {
        document.querySelector("#rdiv_error").innerHTML = "Escriba su Nombre";
        return;
    }
    // Leer el nombre de usuario
    let nombre_usu = document.querySelector("#nombre_usuario").value;
    if (nombre_usu == "") {
        document.querySelector("#rdiv_error").innerHTML = "Escriba su Nombre de usuario";
        return;
    }
    // Leer el email
    let email =  document.querySelector("#email_registro").value;
    if (email == "") {
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
    URL += "&nombre=" + nombre;
    URL += "&nombre_usu=" + nombre_usu;
    URL += "&email=" + email;
    URL += "&password=" + password;
    console.log("Parametros del login")
    console.log("nombre: ",nombre)
    console.log("nombre_usu: ",nombre_usu)
    console.log("email: ",email)
    console.log("password: ",password)
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log("REGISTRO", data);
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