<?php session_start(); ?>
<html>

<head>
    <title> Order Product 2 </title>
</head>

<body>
    <form action="session2.php" method="post">
        <?php
        $sample_hidden = $_SESSION["sample_hidden"];
        print "<h1> Sample hidden= $sample_hidden</h1>";
        $product = $_POST["product"];
        $quantity = $_POST["quantity"];
        print "<br>You selected product=$product and quantity=$quantity";
        $_SESSION["product"] = $product;
        $_SESSION["quantity"] = $quantity;
        print '<br>Please enter your name';
        print '<input text type="text" size="15" maxlength="20" name="name">';
        print ' and Billing Code: (5 digits)';
        print '<input text type="text" size="5" maxlength="5" name="code">';
        print '<br> <input type=submit value="Process Order">';
        print '<input type=reset>';
    ?>