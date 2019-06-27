<?php
require_once 'system/connect.php';
require_once 'system/funcs.php';

    if(!empty($_POST)){
    	save_mess();
    	header("Location: {$_SERVER['PHP_SELF']}");
    echo ("true");
    	exit;
    }


    // Переводим массив в JSON


?>
