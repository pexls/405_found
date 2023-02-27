<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");

$response = array();
$upload_dir = '../uploads/'; // move outside of web root
$server_url = 'http://localhost/devtest/reactjs/';

// Create the upload directory if it doesn't exist
if (!file_exists($upload_dir)) {
    mkdir($upload_dir, 0777, true);
}

if (!empty($_FILES['file'])) {
    $file = $_FILES['file'];

    // validate file type and size
    $allowed_types = array('image/jpeg', 'image/png', 'image/gif');
    $max_size = 5 * 1024 * 1024; // 5MB
    if (!in_array($file['type'], $allowed_types)) {
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Invalid file type. Please upload a JPEG, PNG, or GIF image."
        );
    } elseif ($file['size'] > $max_size) {
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "File size is too large. Please upload a file smaller than 5MB."
        );
    } elseif ($file['error'] !== UPLOAD_ERR_OK) {
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error uploading the file: " . $file['error']
        );
    } else {
        $random_name = rand(1000, 1000000) . "-" . $file['name'];
        $upload_path = $upload_dir . strtolower(preg_replace('/\s+/', '-', $random_name));

        if (move_uploaded_file($file['tmp_name'], $upload_path)) {
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "File uploaded successfully",
                "url" => $server_url . basename($upload_path)
            );

            // insert into database using prepared statement
            $host = "localhost";
            $user = "root";
            $password = "";
            $dbname = "testingdb";

            $conn = new mysqli($host, $user, $password, $dbname);
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $stmt = $conn->prepare("INSERT INTO users (username, name, photo) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $username, $name, $photo);
            $username = "cairocoders";
            $name = "cairocoders Ednalan";
            $photo = basename($upload_path);
            $stmt->execute();
            $stmt->close();
            $conn->close();
        } else {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            );
        }
    }
} else {
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => "No file was sent!"
    );
}

echo json_encode($response);
?>



