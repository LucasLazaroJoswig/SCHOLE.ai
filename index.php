<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScholeAI</title>
    <link rel="stylesheet" href="assets/estilos/estilos.css">
    <script src="assets/scripts/scripts.js"></script>

    <!-- Fuente -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Asap+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"rel="stylesheet">
    
    <!-- Animaciones de scroll -->
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    
    <!-- Carga el script platform.js desde la URL proporcionada de Google. 
            Este script contiene las funciones necesarias para integrar los servicios de Google en la página web -->
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <!-- Especifica el ID del cliente necesario para la autenticación de Google. El contenido del atributo content es 
            el ID del cliente asociado con la aplicación web en la consola de desarrolladores de Google. Este ID se 
            utiliza para identificar la aplicación cuando se realiza la autenticación con Google. -->
    <meta name="google-signin-client_id" content="76666712146-7s9nc15pikb8fikrb7h2ihejbibdb96j.apps.googleusercontent.com">

</head>

<body onload="fInicio()">
    <div class="carousel-inner">

        <div class="carousel-item">
            <div id="header">
                <div id="header-content">
                    <div id="logo">SCHOLE.AI</div>
                    <div id="pages"></div>
                    <div id="options-header">
                        <div class="index">
                            Más info
                        </div>
                        <div class="index">
                            Comó utilizar
                        </div>
                        <div class="index">
                            Quién somos
                        </div>
                        <div id="hamb">
                            <svg width="28" height="16" viewBox="0 0 22 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0L10.7039 8.89972L21.4077 0H0Z" fill="#42270D"/>
                            </svg>
                        </div>
                        <div id="boton_login" onclick="fAbrirModalLogin()">
                            LOGIN
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="spacer1">
        <!-- <img src="assets/images/degradado.jpg" alt="" class="diapos-100"> -->
    </div>
    <div class="spacer2">
        <!-- <img src="assets/images/fondo_marrón.jpg" alt="" class="diapos-200"> -->
    </div>


    <div id="form_login_inicio_sesion">
        <div id="div_registro">*Logo*

            <div id="expandir_registro" onclick="fExpandirRegistro()" title="Expandir registro"><</div>
            <form id="form_registro" method="post">

                <table>
                    <th colspan="2" class="Titulo_de_Forms">
                        Crear una nueva cuenta
                    </th>

                    <tr>
                        <td>
                            <div>&nbsp;</div>
                        </td>
                    </tr>
                    <tr>

                        <td><input type="text" id="nombre" name="nombre" placeholder="Deivi Daniel Perdomo" required=""><br><br></td>

                    </tr>
                    <tr>
                        <td><input type="text" id="nombre_usuario" name="nombre" placeholder="deivimpt56" required=""><br><br></td>
                    </tr>
                    <tr>

                        <td><input type="email" id="email_registro" name="email" placeholder="ejemplo@gmail.com" required=""><br><br></td>
                    </tr>
                    <tr>
                        <td><input type="password" id="password_registro" name="password" placeholder="Contraseña" required=""><br><br></td>
                    </tr>
                    <tr>
                        <td><input type="password" id="rpassword_registro" name="rpassword" placeholder="Repita la Contraseña" required=""><br><br></td>

                    </tr>
                    <tr>
                        <td>
                            <input name="enviar" type="submit" onclick="fControlRegistrar()">
                    </tr>
                    <tr>
                        <td>
                            <div onclick="fCerrarLogin()" class="cerrar_modal_login">Cerrar</div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div id="rdiv_error">&nbsp;</div>
                        </td>
                    </tr>

                </table>
                <br>
                <br>

                <div id="iniciar_sesion_google">Iniciar sesion con Google</div>

                <div class="g-signin2" data-onsuccess="onSignIn"></div>
                <a href="#" onclick="signOut();">Sign out</a>
            </form>

        </div>
        <div id="div_iniciar_sesion">
            <div id="expandir_login" onclick="fExpandirLogin()" title="Expandir login">></div>
            <form id="form_login">
                <table>
                    <th class="Titulo_de_Forms">
                        Inicio sesion
                    </th>

                    <tr>
                        <td>
                            <div>&nbsp;</div>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="email" id="email_login" name="email" placeholder="ejemplo@gmail.com"><br><br>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="password" id="password_login" name="password" placeholder="Contraseña"></td>
                    </tr>
                    <tr>
                        <td class="td_login">
                            <input type="submit" id="btn-login" value="Iniciar sesión">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id="div_error">&nbsp;</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div onclick="fCerrarLogin()" class="cerrar_modal_login">Cerrar</div>
                        </td>
                    </tr>
                </table>
        </div>
    </div>






<?php
include("assets/php/correo.php")  
?> 

</body>

</html>