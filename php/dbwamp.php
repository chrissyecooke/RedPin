<?php
try {
    $db = new PDO("mysql:host=localhost;dbname=redpinregister","root","");

}catch(PDOException $e)
    {
    echo "Connection failed: ";
    }

?>
