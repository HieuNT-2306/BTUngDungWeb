<?php $prefers = $_POST["prefers"];
    $custname = $_POST["custname"];
    $expire = time() + (60 * 60 * 24 * 30);
    setcookie("custname", $custname, $expire);
    setcookie("prefers", $prefers, $expire);
?>
<html>
<html>

<head>
    <title>Happy Harry's Hardware Catalog</title>
</head>

<body>
    <?php $name = $_COOKIE["custname"];
    $preference = $_COOKIE["prefers"];
    print '<font color="blue" size=4>';
    if (isset($name)) {
        print "Welcome back to our humble hardware site, $name.";
    } else {
        print '<font color="red">';
        print 'Welcome to our humble hardware site.</font>';
    }
    if ($preference == 'handtools') {
        print '<br> We have hammers on sale for 5 dollars!';
    } elseif ($preference == 'powertools') {
        print '<br> We have power drills on sale for 25 dollars!';
    } elseif ($preference == 'airfresheners') {
        print '<br> We now carry extra-strength air fresheners!';
    } else {
        print '<br> <font color="red">';
        print 'We have drills and hammers on special today!';
    }
    ?>

</html>

<body>
    <?php
    print "Thanks $custname!";
    print "Let’s now look at $prefers... ";
    ?>
</body>

</html>