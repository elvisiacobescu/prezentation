<?php

$obj = $_GET['obj'];


// $conn = new mysqli($servername, $username, $password,$dbname);
// if (!$conn) {
//     die("Connection failed: " . mysqli_connect_error());
// }

//$obj = json_encode(array('functie' => 'getexp'));
$json = json_decode($obj, true);
//echo "<pre>";print_r($json);echo "</pre>";
switch ($json['functie']) {
  case 'getexp':
    getexp();
  break;
  case 'gethob':
    gethob();
  break;

  default:
    # code...
    break;
}



function getexp(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "cv_online";
  $conn = new mysqli($servername, $username, $password,$dbname);
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }

$sql="SELECT * FROM expe";
$result = mysqli_query($conn, $sql);
$back=array();
if (mysqli_num_rows($result)>0){
  $i=0;
  while($row = mysqli_fetch_assoc($result)) {
      $rezult=array();
      $rezult['nume']=$row["nume"];
      $rezult['nivel']=$row["nivel"];
      $rezult['photo']=$row["photo"];
      $rezult['descriere']=$row["descriere"];
      $back[$i]=$rezult;
      $i+=1;
    }
    //parsam jsonu
    echo json_encode($back);
}else echo "ceva a mers foarte prost";
}

function gethob(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "cv_online";
  $conn = new mysqli($servername, $username, $password,$dbname);
  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }

$sql="SELECT * FROM hobiuri";
$result = mysqli_query($conn, $sql);
$back=array();
if (mysqli_num_rows($result)>0){
  $i=0;
  while($row = mysqli_fetch_assoc($result)) {
      $rezult=array();
      $rezult['nume']=$row["nume"];
      $rezult['photo']=$row["photo"];
      $rezult['descriere']=$row["content"];
      $back[$i]=$rezult;
      $i+=1;
    }
    //parsam jsonu
    echo json_encode($back);
}else echo "ceva a mers foarte prost";
}

 ?>
