<?php

if (isset($_POST['enviar'])){
    // if (!empty($_POST['name']) && !empty($_POST['name']) && !empty($_POST['name'])){

        $to = 'anamarvelperdomo@gmail.com';
            $subject = 'Confirmación de correo electrónico';
            $message = 'Haz clic en el siguiente enlace para confirmar tu correo electrónico: http://tusitio.com/confirmar-correo?token=abcd1234';
            $headers = 'From: deivi54357326@gmail.com' . "\r\n" .
                        'anamarvelperdomo@gmail.com' . "\r\n" .
                        'X-Mailer: PHP/' . phpversion();

            $mail=@mail($to, $subject, $message, $headers);

            if ($mail){
                echo "<h1>corrwo enviado exitosamente</h1>";
            }else{ 
                echo "<h1>Error al enviar correo</h1>";
            }

    // }
}