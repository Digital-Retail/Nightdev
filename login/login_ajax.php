<?php

if (!empty($_POST["login"]) && !empty($_POST["pass"])) { 

	// Формируем массив для JSON ответа
 
	$login= $_POST["login"];
	$pass=$_POST["pass"];
     // Переводим массив в JSON
	if($login=="admin" && $pass=="12345678") {
	echo True; 
		
	}
    
	else
	echo False;
}

?>