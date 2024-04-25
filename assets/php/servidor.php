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
            $usu_alias = $_REQUEST['usu_alias'];
            $usu_nombre = $_REQUEST['usu_nombre'];
            $usu_email = $_REQUEST['usu_email'];
            $password = $_REQUEST['password'];
            $sql = "INSERT INTO usuarios (usu_id, usu_alias, usu_nombre, usu_email, usu_password, eleccion_tema, foto_perfil, correo_verificado) VALUES 
                                            (null, '$usu_alias', '$usu_nombre', '$usu_email', '$password', '0', 'foto.png', '0')";
            $datos['sql']=$sql;
            $datos['datos'] = BBDD_CTRLR::CRUD($sql, 'i');
            // Devuelvo a JS los datos codificados como JSON
            echo json_encode($datos);
            
            $to = $usu_email;
            $subject = 'Confirmación de correo electrónico';
            $message = 'Haz clic en el siguiente enlace para confirmar tu correo electrónico: http://tusitio.com/confirmar-correo?token=abcd1234';
            $headers = 'From: deivi54357326@gmail.com' . "\r\n" .
                        'anamarvelperdomo@gmail.com' . "\r\n" .
                        'X-Mailer: PHP/' . phpversion();

            $mail=mail($to, $subject, $message, $headers);

            if ($mail){
                echo "<h1>corrwo enviado exitosamente</h1>";
            }else{ 
                echo "<h1>Error al enviar correo</h1>";
            }


            break;

        case "ControlRegistroGoogle":
            $usu_alias = $_REQUEST['usu_alias'];
            $usu_nombre = $_REQUEST['usu_nombre'];
            $usu_email = $_REQUEST['usu_email'];
            $Image_URL = $_REQUEST['Image_URL'];
            $password = $_REQUEST['password'];
            $sql = "INSERT INTO usuarios (usu_id, usu_alias, usu_nombre, usu_email, usu_password, eleccion_tema, foto_perfil, correo_verificado) VALUES 
                                            (null, '$usu_alias', '$usu_nombre', '$usu_email', '$password', '0', '$Image_URL', '1')";
            $datos['sql']=$sql;
            $datos['datos'] = BBDD_CTRLR::CRUD($sql, 'i');
            // Devuelvo a JS los datos codificados como JSON
            echo json_encode($datos); 
            // $to = 'anamarvelperdomo@gmail.com';
            // $subject = 'Confirmación de correo electrónico';
            // $message = 'Haz clic en el siguiente enlace para confirmar tu correo electrónico: http://tusitio.com/confirmar-correo?token=abcd1234';
            // $headers = 'From: deivi54357326@gmail.com' . "\r\n" .
            //             'anamarvelperdomo@gmail.com' . "\r\n" .
            //             'X-Mailer: PHP/' . phpversion();

            // $mail=mail($to, $subject, $message, $headers);

            // if ($mail){
            //     echo "<h1>corrwo enviado exitosamente</h1>";
            // }else{ 
            //     echo "<h1>Error al enviar correo</h1>";
            // }


            break;

    }             
}   
        

