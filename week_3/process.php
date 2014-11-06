<?php
//var_dump($_POST);
$message = "";
$data = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
foreach($data as $name => $value)
{
    //process name to look nice
    $message .= ucwords(str_replace("_", " ",$name)).": ";
    
    //process special if an array
    $message .= is_array($value) ? implode(", ", $value):$value;
    /*if(is_array($value))
    {
        $message .= implode(", ", $value);
    }
    else
    {
        $message .= $value;
    }*/
    
    //new line
    $message .= "\r\n";
}

mail("brent@onlythegame.com", "My Form Info", $message);
?>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="content-type" content="text/html" />
    
    <title>Processed!</title>
</head>

<body>
    <h1>Process complete!</h1>
    
    <p>We have captured the following information:</p>
    <pre><?php echo $message; ?></pre>
    <p>We appreciate your interest! Your information is appreciated and will be expiditiously sold to all our affiliates.</p>
    <a href="./">Go Back.</a>


</body>
</html>