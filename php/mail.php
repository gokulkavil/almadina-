<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['phone']))
$phone = $_POST['phone'];
if(isset( $_POST['iemi']))
$iemi = $_POST['iemi'];
if(isset( $_POST['message']))
$message = $_POST['message'];

$content="From: $name \n phone: $phone \n Message: $message";
$recipient = "rgokul716@gmail.com";
$mailheader = "From: $name \r\n";
mail($recipient, $message, $content, $mailheader) or die("Error!");
echo "Email sent!";
?>

