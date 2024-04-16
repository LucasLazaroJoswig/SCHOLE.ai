<?php
require_once ("Conexion.php");

class BBDD_CTRLR{
    public static function Consultas ($sql){
        $lista = array();
        $cnx = Conexion::conectar();
        $rs = mysqli_query($cnx, $sql);
        $lista = mysqli_fetch_all($rs, MYSQLI_ASSOC);
        // while ( ($reg = mysqli_fetch_array($rs,MYSQLI_ASSOC)) != null){
        //     $lista[] = $reg;
        // }
        mysqli_close($cnx);
        return $lista;
    }
    
    public static function CRUD($sql, $como){        
        $cnx = Conexion::conectar();
        mysqli_query($cnx, $sql);
        if ($como == 'i'){
            $n = mysqli_insert_id($cnx);    
        } else{
            $n = mysqli_affected_rows($cnx);
        }
        mysqli_close($cnx);
        return $n;
    }
}