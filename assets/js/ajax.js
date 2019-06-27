$( document ).ready(function() {
    $("#siginin_btn").click(
        function(){
            sendAjaxForm('result_form', 'signin_form', 'action_ajax_form.php');
            return false;
        }
    );
});

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
      
        	$('#result_form').html('<p style="padding-left:10px;background:white;color:green">Cообщение: Спасибо, заявка успешно отправлена</p>');
    document.getElementById("signin_form").reset();
        },
    	error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
    	}
 	});
}
