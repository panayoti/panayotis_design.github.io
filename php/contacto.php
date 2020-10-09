<?php
error_reporting(0);
$nombre = $_POST['name'];
$mail= $_POST['email'];
$message=$_POST['message'];
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Su Mensaje es: " . $_POST['message'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'panayoti92@gmail.com';
$asunto = 'Nuevo Correo de la página Web';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo "<script language='javascript'>
alert('Mensaje enviado, muchas gracias.');
window.location.href = 'http://panayotis-design.com.ve/';
</script>";
?>
