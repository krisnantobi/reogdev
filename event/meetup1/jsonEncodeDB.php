<?php

$data = [
    [
        "nama" => "kris",
        "alamat" => "ponorogo"
    ],
    [
        "nama" => "mas bima",
        "alamat" => "ponorogo"
    ]
];

$db    = new PDO('mysql:host=localhost;dbname=cms', 'root', '');
$query = $db->prepare('SELECT * FROM users');
$query->execute();
$data = $query->fetchAll(PDO::FETCH_ASSOC);



$data = json_encode($data);
echo($data);