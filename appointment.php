<?php 
if ($_POST) {

	$firstName	= $_POST['firstName'];
	$lastName 	= $_POST['lastName'];
	$phone 		= $_POST['phone'];
	$email		= $_POST['email'];
	$day 		= $_POST['day'];
	$preferred_time 	= $_POST['preferred-time'];
	$patient    = $_POST['patient'];
	$hearFrom   = $_POST['hearFrom'];
	$Message 	= $_POST['message'];
	
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
		echo "Email is not Valid";
		exit;
	}
	 
	/*
    if(!preg_match("/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/", $phoneNumber)) {
     	echo "Phone is not Valid";
    	   exit;
    }
    */

    $msg 	= "\n\nGood day Dr. Joseph Fortino,\n\n";
    $msg 	.= "\nYou have an appointment request.\n\n";
    $msg 	.= "\nFirst Name: $firstName\n\n";
    $msg 	.= "Last Name: $lastName\n\n";
    $msg 	.= "Phone Number: $phone\n\n";
    $msg 	.= "E-mail: $email\n\n";
    $msg 	.= "\nPreferred Day: $day\n\n";
    $msg 	.= "Preferred Time: $preferred_time\n\n";
	$msg 	.= "\nHow did you hear about us?: $hearFrom\n\n";
	$msg 	.= "\nMessage: \n\n$Message\n\n";

	$from_email = "Fortino-dental"; //from mail, it is mandatory with some hosts
    $recipient_email = 'info@fortinodental.com'; //recipient email (most cases it is your personal email)
	$subject="Appointment Request";

	// boundary
    $semi_rand = md5(time());
    $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";

    //read from the uploaded file & base64_encode content for the mail
    $encoded_content = chunk_split(base64_encode($msg));

    $boundary = md5("sanwebe");
    //header
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From:" . $from_email . "\r\n";
    $headers .= "Reply-To: " . $email. "" . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n";

    //plain text
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($msg));

    //$body .= $encoded_content;

	$sentMail = mail($recipient_email, $subject, $body, $headers);
    if ($sentMail) //output success or failure messages
    {
        echo "<script>window.open('submitted.html','_self')</script>";
    } else {
        echo "<script>alert('Error please try again !')</script>";
    }

}

?>
