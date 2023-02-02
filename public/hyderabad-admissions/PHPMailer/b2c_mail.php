<?php 
//header('content-type: application/json; charset=utf-8');
//header("Access-Control-Allow-Origin: *");
$fname  = $_REQUEST['fname'];
$emailc = $_REQUEST['email'];
$phnum = $_REQUEST['phnum'];
$inrstdin = $_REQUEST['city'];
require_once 'PHPMailerAutoload.php';
$results_messages = array();
$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';
ini_set('default_charset', 'UTF-8');
class phpmailerAppException extends phpmailerException {}
try {
	$to = 'noreply@analogeducation.in';
	if(!PHPMailer::validateAddress($to)) {
	  throw new phpmailerAppException("Email address " . $to . " is invalid -- aborting!");
	}
	$mail->isSMTP();
	$mail->SMTPDebug = 0;
	$mail->Debugoutput = 'html';
	$mail->isSMTP();
	$mail->Host = 'localhost';
	$mail->SMTPAuth = false;
	$mail->SMTPAutoTLS = false; 
	$mail->Port = 25;
	 
	$mail->Username = "noreply@analogeducation.in";
	$mail->Password = "q8CXh*8V";
	$mail->setFrom("noreply@analogeducation.in", "Noreply Analogeducation");
	$mail->addAddress("ias.analog@gmail.com", "Analog IAS Academy");
	
	$recipients = array(
 	   
 	   'ias.analog@gmail.com' => 'Analogeducation Enquiries'
 	   
	);
	foreach($recipients as $email => $name)
	{
	   $mail->AddBCC("srinivas@marksandmethods.com", "Srinivas");
	}
	$mail->Subject  = "Analog IAS Academy";
	$message = '<html><body>';
	$message .= '<table rules="all" style="border: 1px solid #909090;" cellpadding="7">';
	$message .= "<tr style='background: #7a7b7c;color:#f2f2f2;text-align: center;'><td colspan='2'><strong>Analog IAS Academy</strong></td></tr>";
	$message .= "<tr><td><strong>Name:</strong> </td><td>" . $fname . "</td></tr>";
	$message .= "<tr><td><strong>Phone:</strong> </td><td>" . $phnum  . "</td></tr>";
	$message .= "<tr><td><strong>Email:</strong> </td><td>" . $emailc . "</td></tr>";
	$message .= "<tr><td><strong>City:</strong> </td><td>" . $inrstdin . "</td></tr>";
	$message .= "<tr style='background: #7a7b7c;'><td colspan='2'>&nbsp;</strong></td></tr>";
	$message .= "</table>";
	$message .= "</body></html>";
	$body = $message;
	//$mail->WordWrap = 78;
	$mail->msgHTML($body, dirname(__FILE__), true); //Create message bodies and embed images
	try {
	  $mail->send();
	  echo "sent";
	}
	catch (phpmailerException $e) {
	  throw new phpmailerAppException('Unable to send to: ' . $to. ': '.$e->getMessage());
	}
}
catch (phpmailerAppException $e) {
  $results_messages[] = $e->errorMessage();
}
 

?>