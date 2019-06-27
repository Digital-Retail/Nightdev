<?php
require_once '../system/connect.php';
require_once '../system/funcs.php';


$messages = get_mess();

 ?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/bootstrap/css/bootstrap.css">
	<link rel="stylesheet" href="css/styles.css">
	<title>Портал NightDEV</title>
  <style>
  .note {
    padding: 5px;
  	border: 1px solid black;
  	border-radius: 5px;

  }
  .del-msg {
    color:red;
display: inline-block;
cursor: pointer;
  }
  .del-msg:hover {
    border-bottom: 1px solid silver;
  }
  </style>
</head>
<body>
  <div id="wrapper">
<h2>Заявки DR GROUP</h2>

<?php if(!empty($messages)): ?>
	<?php foreach($messages as $message): ?>
		<div class="note">
			<p>Автор: <?=htmlspecialchars($message['author'])?> | Дата: <?=$message['date']?></p>
			<p>Инстаграмм: <?=nl2br(htmlspecialchars($message['insta']))?></p>
			<div><p><?=nl2br(htmlspecialchars($message['text']))?></p></div>
      <p class="del-msg" id=<?=$message['id']?> >Удалить</p>
  	</div>

	<?php endforeach; ?>
<?php endif; ?>
</div>
</body>
</html>
