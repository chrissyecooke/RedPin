<?php
try {
    $db = new PDO("mysql:host=localhost;dbname=RedPinRegister","root","root");

}catch(PDOException $e)
    {
    echo "Connection failed: ";
    }

?>
