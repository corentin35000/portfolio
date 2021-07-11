<?php
    header('Access-Control-Allow-Origin: *');

    ini_set("SMTP","localhost");
    ini_set("smtp_port","1025");

    $from = 'corentindevelopper@hotmail.com';

    // Créer les en-têtes de courriel
    $headers = 'From: '. $from."\r\n".
                'Reply-To: '. $from."\r\n" .
                'X-Mailer: PHP/' . phpversion();

    // Dans le cas où nos lignes comportent plus de 70 caractères, nous les coupons en utilisant wordwrap()
    $message = wordwrap($_POST['message'], 70, "\r\n");

    // Envoi du mail
    mail($_POST['email'], $_POST['sujet'], $message, $headers);