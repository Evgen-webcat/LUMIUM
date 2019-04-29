<?php

$sendto   = "contact@lumium-fragrances.com";

    $subject = $_POST['subject'];
    $username = $_POST['firstname'];
    $userlastname = $_POST['lastname'];
    $email = $_POST['e-mail'];
    $usertel = $_POST['phone'];
    $message = $_POST['message'];



	$subject  = $subject;
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>".$subject."</h2>\r\n";
    $msg .= "<p><strong>Сообщение от:</strong> ".$username." ".$userlastname."</p>\r\n";
	$msg .= "<p><strong>Контакты:</strong> ".$usertel." ".$email."</p>\r\n";
    $msg .= "<p><strong>Сообщение:</strong> ".$message."</p>\r\n";
	$msg .= "</body></html>";

	@mail($sendto, $subject, $msg, $headers);
?>
