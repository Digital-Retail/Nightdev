$('#login-button').click(function(){
  $('#login-button').fadeOut("slow",function(){
    $("#container").fadeIn();
    TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
    TweenMax.to("#container", .4, { scale: 1, ease:Sine.easeInOut});
  });
});

$(".close-btn").click(function(){
  TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
  TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
  $("#container, #forgotten-container").fadeOut(800, function(){
    $("#login-button").fadeIn(800);
  });
});

/* Forgotten Password */
$('#forgotten').click(function(){
  $("#container").fadeOut(function(){
    $("#forgotten-container").fadeIn();
  });
});


    $("#login_ajax").click( function(){
            sendAjaxForm('result_form', 'login_form', '/login/login_ajax.php');
            return false; 
        }
    );

 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
         if(response==true) {
          $('#result_form').html('<p style="padding:10px;background:white;color:green">Успешно авторизованы!</p>');
          setTimeout( 'location="/news";', 2000 );
         }
         else 
           $('#result_form').html('<p style="padding:10px;background:white;color:red">Неверный логин или пароль</p>');

        
        },
      error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
      }
  });
}