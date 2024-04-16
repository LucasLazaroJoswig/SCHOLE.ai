<?php
require_once("configuracionBBDD.php");
class Conexion {
    static function Conectar(){
        $cnx = mysqli_connect(SERVIDOR, USUARIO, PASSWORD, BBDD);
        return $cnx;
    }
}