<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');  // Allow requests from any origin
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "elitez";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$counts = array();

// Debugging: Check database connection
if ($conn->connect_error) {
    echo json_encode(array("error" => "Connection failed: " . $conn->connect_error));
    exit();
}

// Debugging: Check SQL query
$sql = "SELECT COUNT(*) AS count FROM products";
$result = $conn->query($sql);
if ($result === FALSE) {
    echo json_encode(array("error" => "Query failed: " . $conn->error));
    exit();
}
$row = $result->fetch_assoc();
$counts['products'] = $row['count'];

$sql = "SELECT COUNT(*) AS count FROM customers";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$counts['customers'] = $row['count'];

$sql = "SELECT COUNT(*) AS count FROM orders";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$counts['orders'] = $row['count'];

$sql = "SELECT COUNT(*) AS count FROM deliveredorders";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$counts['delivery'] = $row['count'];

echo json_encode($counts);

$conn->close();
?>
