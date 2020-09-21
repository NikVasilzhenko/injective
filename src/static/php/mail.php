<?php 
if (isset($_POST['email'])) {$email = $_POST['email'];} 
  
$address  = 'anyaddress@gmail.com';
$mes = "Тема: $email\nEmail: $email";   
$sub='Заявка с сайта injectiveprotocol.com'; 
$backemail='injectiveprotocol@info.ru'; 
$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$backemail");  
?> 