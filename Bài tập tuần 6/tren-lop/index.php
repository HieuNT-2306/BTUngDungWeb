<html>
<head>
    <title>Test form</title>
</head>
<body>
    <div>
        <h1>Form nhập thông tin:</h1>    
        <form method='post' action="<?php echo $_SERVER['PHP_SELF']; ?>" > 
            <label for="name1">Nhập tên người dùng:</label> <br>
            <input type="text" name="name" id="name" required> <br>
            <label for="email">Nhập địa chỉ email:</label> <br>
            <input type="email" name="email" id="email" required> <br>
            <input type="submit" value="Submit">
        </form> 
        <h1>Thông tin bảng:</h1>
        <?php 
            $servername = "localhost:3306";
            $username = "root";
            $password = "";
            $dbname = "temp";
            $sql_select = "SELECT * FROM bai2";
            $conn = new mysqli($servername, $username, $password, $dbname);
            $result = $conn->query($sql_select);
            if ($result->num_rows > 0) {
                echo "<table border='1'><tr><th>Tên</th><th>Email</th></tr>";
                while($row = $result->fetch_assoc()) {
                    echo "<tr><td>".$row["name"]."</td><td>".$row["email"]."</td></tr>";
                }
                echo "</table>";
            } else {
                echo "0 results";
            }
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $name = $_POST['name'];
                $email = $_POST['email'];
                $sql_insert = "INSERT INTO bai2 (name, email) VALUES ('$name', '$email')";
                if ($conn->query($sql_insert) === TRUE) {
                    echo "<meta http-equiv='refresh' content='0'>";
                } else {
                    echo "Lỗi: " . $sql . "<br>" . $conn->error;
                }
            }
        ?>
    </div>
</body>