<?php
file_put_contents("test_debug.txt", print_r($_POST, true));
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/src/PHPMailer.php";
require "PHPMailer/src/SMTP.php";
require "PHPMailer/src/Exception.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $mail = new PHPMailer(true);

    try {
        $mail ->isSMTP();
        $mail ->Host = "smtp.gmail.com";
        $mail ->SMTPAuth = true;
        $mail ->Username = "rs.rimdev@gmail.com";
        $mail ->Password = "ieyc lauf bzxn tohx";
        $mail ->SMTPSecure = "tls";
        $mail ->Port = 587;

        $mail->setFrom("rs.rimdev@gmail.com", "Pensiju forma");
        $mail->addAddress("rs.rimdev@gmail.com");

        $mail ->isHTML(false);
        $mail ->Subject = "Gauta pensiju forma";

        $body = "forma uzpildyta:\n\n";
        foreach ($_POST as $key => $value) {
            if (is_array($value)) {
                $body .= ucfirst($key) . ": " . implode(", ", $value) . "\n";
            } else {
                $body .= ucfirst($key) . ": " . $value . "\n";
            }
        }

        $mail ->Body = $body;

        $mail ->send();
        echo "<script>alert('Forma sėkmingai išsiųsta!'); window.location.href='index.html';</script>";
    } catch (Exception $e) {
        echo "Nepavyko išsiūsti: {$mail->ErrorInfo}";
    }
}