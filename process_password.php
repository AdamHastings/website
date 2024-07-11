<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['pwd'])) {
        $password = $_POST['pwd'];

        if ($password === 'elephants') {
            // Display the yellow box if the password is "elephants"
            echo '<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Password Form</title>
                <style>
                    .yellow-box {
                        background-color: yellow;
                        padding: 20px;
                        margin-top: 20px;
                        border: 1px solid black;
                    }
                </style>
            </head>
            <body>
                <form action="process_password.php" method="POST">
                    <p>
                        <label for="pwd">Password:</label>
                        <input type="password" id="pwd" name="pwd" required>
                        <input type="submit">
                    </p>
                </form>
                <div class="yellow-box">Password is correct!</div>
            </body>
            </html>';
        } else {
            // Process and hash the password (not "elephants")
            $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

            // In a real application, you would store this in a database
            echo '<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Password Form</title>
            </head>
            <body>
                <form action="process_password.php" method="POST">
                    <p>
                        <label for="pwd">Password:</label>
                        <input type="password" id="pwd" name="pwd" required>
                        <input type="submit">
                    </p>
                </form>
                <div>Hashed Password: ' . htmlspecialchars($hashedPassword) . '</div>
            </body>
            </html>';
        }
    } else {
        echo "Password is required.";
    }
} else {
    echo "Invalid request method.";
}
?></body>