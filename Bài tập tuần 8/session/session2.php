<?php 
    require 'vendor/autoload.php';
    session_start(); 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        use PHPMailer\PHPMailer\PHPMailer;

        $sample_hidden = $_SESSION["sample_hidden"];  
        $quantity=$_SESSION["quantity"];
        $product=$_SESSION["product"]; 
        $name=$_POST["name"];       
        $code=$_POST["code"];


        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->SMTPDebug = 0;
        $mail->Debugoutput = 'html';
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->SMTPSecure= 'tls';
        $mail->Port = 587;
        $mail->Username = '********@gmail.com'; //gmail nguoi gui
        $mail->Password = '**** **** **** ****';//mat khau app gmail
        $mail->From = 'hieubeo2369@gmail.com';
        $mail->FromName = "Hardware Product Order Form, new order from  $name";
        $toAddress = 'hieubeo22336@gmail.com';
        $mail->addAddress($toAddress);;  
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';
        $mail->Subject = 'Subject';
        $body = "New Order: Product=$product   Number=$quantity   Cust=$name   Code=$code";
        $mail->Body = $body;
        if($mail->send()){
            echo "Sent mail to $toAddress, please confirm!";
          }else{
            echo 'Error Message';
        }
        print '<font size=4>';
        print "<br>Sending e-mail to order handling department at $toAddress ... </font>";
        print "<br>The e-mail body is <i>: $body. </i>";
        print '<br><font color="blue"> E-mail sent. Thanks for ordering. </font>';
        print "<br>By the way, sample hidden=$sample_hidden";
    ?>
</body>
</html>