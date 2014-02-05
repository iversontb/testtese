<?php
/**
 * EDIT THE VALUES BELOW THIS LINE TO ADJUST THE CONFIGURATION
 * EACH OPTION HAS A COMMENT ABOVE IT WITH A DESCRIPTION
 */

/**
 * Define the way the subscribe form works.
 * The value can be one of "list" or "mail".
 * When you choose "list", you must also specify the $listFile option.
 * All subscribed email addresses will be logged each on a new line in a local file.
 */
$type       = 'list';

/**
 * This option is only useful if $type is set to "list".
 * This specifies the path to the local file in which all email addresses will be written.
 * On *nix systems you need to make sure, that the file is writable if exists,
 * or that it is possible to be created with write permissions.
 * No errors will be shown otherwise, but it just won't work.
 */
$listFile   = 'subscribed.txt';

/**
 * If you chose to set $type to "mail" you can specify the email address to which,
 * all subscribed email addresses will be sent.
 * Each subscribed address is sent as a separate email message when submitted.
 * The script will try to use PHP's mail() function,
 * so if it is not properly configured it will fail silently (no error).
 */
$mailTo     = 'example@mail.com';

/**
 * If you chose to set $type to "mail" you can specify the subject of the email sent,
 * when anyone decides to subscribe. The message being sent will have $mailSubj as a subject,
 * and the subscribed email address as content.
 */
$mailSubj   = 'New subscriber';

/**
 * Set the message that will be shown on success
 */
$successMsg = 'Thank you!';

/**
 * Set the message that will be shown on error
 */
$errorMsg   = 'Hm.. seems there is a problem, sorry!';

/**
 * DO NOT EDIT ANYTHING BELOW THIS LINE, UNLESS YOU'RE SURE WHAT YOU'RE DOING
 */
$success    = true;
if (isset($_POST['email'])) {
    switch($type) {
        case 'list': {
            $fp = @fopen($listFile, 'ab+');
            if ($fp) {
                @fwrite($fp, $_POST['email'] . "\r\n");
                @fclose($fp);
            } else {
                $success = false;
            }
        } break;
        case 'mail': {
            $success = @mail($mailTo, $mailSubj, $_POST['email'], "From: " . $_POST['email']);
        } break;
    }
} else {
    $success = false;
}
if ($success) {
    echo '<script type="text/javascript">window.parent.$(".subscribe .result").html("' . $successMsg . '");</script>';
} else {
    echo '<script type="text/javascript">window.parent.$(".subscribe .result").html("' . $errorMsg . '");</script>';
}