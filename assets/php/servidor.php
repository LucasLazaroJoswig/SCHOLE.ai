<?php
require_once("BBDD_CTRLR.php");
if (isset($_REQUEST['peticion'])) {
    switch ($_REQUEST['peticion']) {
        
        case "ControlLogin":
            // Recuperar parametros
            $alias = $_REQUEST['alias'];
            $password = $_REQUEST['password'];
            // Preparo el SQL   
            $sql = "SELECT * FROM usuarios WHERE usu_alias = '$alias' AND usu_password=md5('$password')";
            $datos['sql']=$sql;
            // Ejecuto el SQL guardando el resultado
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
            // Devuelvo a JS los datos codificados como JSON
            echo json_encode($datos);  
            break; 

        case "ControlRegistro":
            $nombre = $_REQUEST['nombre'];
            $nombre_usu = $_REQUEST['nombre_usu'];
            $email = $_REQUEST['email'];
            $password = $_REQUEST['password'];
            $sql = "INSERT INTO usuarios (nombre, contraseña, usu_foto, correo, estilo, nombre_usuario) VALUES 
                                            ('$nombre', md5('$password'), NULL, '$email', '0', '$nombre_usu')";
            $datos['sql']=$sql;
            $datos['datos'] = BBDD_CTRLR::CRUD($sql, 'i');
            // Devuelvo a JS los datos codificados como JSON
            echo json_encode($datos); 
            $to = 'anamarvelperdomo@gmail.com';
            $subject = 'Confirmación de correo electrónico';
            $message = 'Haz clic en el siguiente enlace para confirmar tu correo electrónico: http://tusitio.com/confirmar-correo?token=abcd1234';
            $headers = 'From: deivi54357326@gmail.com' . "\r\n" .
                        'anamarvelperdomo@gmail.com' . "\r\n" .
                        'X-Mailer: PHP/' . phpversion();

            
            if (mail($to, $subject, $message, $headers)){
                echo "Correo enviado con éxito";
            }else{
                echo "Error al enviar correo";
            }


            break;



    }             
}   
        

