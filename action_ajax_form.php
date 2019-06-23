<?php

if (isset($_POST["contact_name"]) && isset($_POST["contact_message"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'contact_name' => $_POST["contact_name"],
    	'contact_insta' => $_POST["contact_insta"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>