<?php
// Enable CORS
header("Access-Control-Allow-Origin: *");  // Allows all domains to access this resource
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");  // Specify allowed methods
header("Access-Control-Allow-Headers: Content-Type, Authorization");  // Specify allowed headers

//connect to the MySQL DB
$servername = "localhost";
$username = "root"; 
$password = "Lmz19980105!";     
$dbname = "course_report";


//create connection
$conn = new mysqli($servername, $username, $password, $dbname);

//check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//query the enrolment data
$sql = "SELECT Users.first_name, Users.last_name, Courses.description, Status.status_description
        FROM Enrolments
        JOIN Users ON Enrolments.user_id = Users.user_id
        JOIN Courses ON Enrolments.course_id = Courses.course_id
        JOIN Status ON Enrolments.status_id = Status.status_id";

$result = $conn->query($sql);

//format result as JSON and return
$enrolments = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $enrolments[] = $row;
    }
}

//return the result as JSON
header('Content-Type: application/json');
echo json_encode($enrolments, JSON_PRETTY_PRINT);

//close the connection
$conn->close();
?>