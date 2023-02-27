<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json;");


include 'config.php';

$user = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];
switch($method){

     case "GET":
        $con=crud::connect();

        $sql="SELECT * FROM users";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        // print_r($path);  
        if(isset($path[4]) && is_numeric($path[4])){

            $sql .= " WHERE id =:id";
            $db = $con->prepare($sql);
            $db->bindValue(':id' , $path[4]);
            $db->execute();
            $data= $db->fetch(PDO::FETCH_ASSOC);

        }else{

            $db =$con->prepare($sql);
            $db->execute();
            $data= $db->fetchAll(PDO::FETCH_ASSOC);
        }

    echo json_encode($data);
    break;


    case "PUT":
                $user = json_decode(file_get_contents('php://input')); 
                
                $db = crud::connect()->prepare("UPDATE users SET fullName=:fullName, email=:email, password=:password, phone=:phone, image=:image WHERE id = :id");
                // $created_at = date('Y-m-d');
                $db->bindValue(':id' , $user->id);
                $db->bindValue(':fullName' , $user->fullName);  
                $db->bindValue(':email' , $user->email);
                $db->bindValue(':password' , $user->password);
                $db->bindValue(':phone' ,  $user->phone);
                $db->bindValue(':image' ,  $user->image);
                
                if($db -> execute()) {
                    $response = ['status' =>1, 'message'=>"Record updated succcesfully"];
                }else{
                    $response = ['status' =>0, 'message'=>"Record Faild to update"];
                }
                echo json_encode($response);
                break;

}