<?php

// $data = file_get_contents("data.json");
$headers = [
    "Accept: application/json",
    "Content-Type: application/json",
    "Authorization: Bearer em6cc4obemglsvkcx876e5n5pu2yqxkq"
];
$options = [
    CURLOPT_HTTPHEADER => $headers,
];

$curl = curl_init("http://ec2-13-229-250-222.ap-southeast-1.compute.amazonaws.com/rest/V1/products?searchCriteria=null");
curl_setopt_array($curl, $options);
$response 	= curl_exec($curl);
curl_close($curl);


// $data = json_decode($data, true);
// foreach ($data as $key => $value) {
//     // echo $value;
// }

echo json_decode($response);
