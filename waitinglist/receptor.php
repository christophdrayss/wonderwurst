<?php

function sendTelegramMessage($chatID, $messaggio, $token) {
    
    $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID;
    $url = $url . "&text=" . $messaggio;
    $ch = curl_init();
    $optArray = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;

}

$filename_prefix = 'log_';
$filename_postfix = '.txt';
$date = date('Y-m-d');
$datetime = date('Y-m-d H:i:s');
file_put_contents($filename_prefix.$date.$filename_postfix, $datetime.'> New email subscription '.$_POST["email"].PHP_EOL, FILE_APPEND | LOCK_EX);

$entityBody = file_get_contents('php://input');

sendTelegramMessage("672216444", "New subscription: ".$_POST["email"], "1495277926:AAFY70Wf8JvBX7VQyNDl3bMm20bKR7rLBwY");

echo "OK";

?>