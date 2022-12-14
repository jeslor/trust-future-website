<?php
if (isset($_POST['Email'])) {

    // EDIT THE FOLLOWING TWO LINES:
    $email_to = 'sponsor@trustfutureministries.org';
    $email_subject = 'New sponsor details';

    function problem($error)
    {
        echo "We're sorry, but there were error(s) found with the form you submitted. ";
        echo 'These errors appear below.<br><br>';
        echo $error . '<br><br>';
        echo 'Please go back and fix these errors.<br><br>';
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['first_name']) ||
        !isset($_POST['last_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['address']) ||
        !isset($_POST['children_total']) ||
        !isset($_POST['children_chosen']) ||
        !isset($_POST['comments'])
    ) {
        problem(
            'We are sorry, but there appears to be a problem with the form you submitted.'
        );
    }

    $first_name = $_POST['first_name']; // required
    $last_name = $_POST['last_name']; // required
    $email = $_POST['email']; // required
    $address = $_POST['address']; // required
    $children_total = $_POST['children_total']; // required
    $children_chosen = $_POST['children_chosen']; // required
    $comments = $_POST['comments']; // required

    $error_message = '';
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .=
            'The Email address you entered does not appear to be valid.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    // if (!preg_match($string_exp, $name)) {
    //     $error_message .= 'The Name you entered does not appear to be valid.<br>';
    // }

    if (strlen($message) < 2) {
        $error_message .=
            'The Message you entered do not appear to be valid.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = ['content-type', 'bcc:', 'to:', 'cc:', 'href'];
        return str_replace($bad, '', $string);
    }

    $email_message .= 'Name: ' . clean_string($first_name . $last_name) . "\n";
    $email_message .= 'Address: ' . clean_string($address) . "\n";
    $email_message .=
        'Sponsorship amount: ' . clean_string($children_total) . "\n";
    $email_message .=
        'Children Names: ' . clean_string($children_chosen) . "\n";
    $email_message .= 'Message: ' . clean_string($comments) . "\n";

    // create email headers
    $headers =
        'From: ' .
        $email .
        "\r\n" .
        'Reply-To: ' .
        $email .
        "\r\n" .
        'X-Mailer: PHP/' .
        phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
    ?>

    echo "<fieldset>";
	echo "<div id='success_page'>";
	echo "<h2>Form Sent Successfully.</h2>";
	echo "<p>Thank you <strong>$first_name</strong>, your form has been submitted to us.</p>";
	echo "</div>";
	echo "</fieldset>";

<?php
}
?>
