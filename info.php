
<?php

$formdata = isset($_SERVER['QUERY_STRING']) ? $_SERVER['QUERY_STRING'] : '';
$formdata = str_replace("+", " ", $formdata);
$query = "select \"elevation\" as \"elevation\",\"prominence\" as \"prominence\",\"mountain range\" as \"range\", \"route\" as \"route\", \"description\" as \"description\" from peaks where \"Mountain Peak\"=\"{$formdata}\";";

$db = new SQLite3('db/peaks.db');

$results = $db->query($query);
while ($row = $results->fetchArray(SQLITE3_ASSOC)){ 
    $json = $row;
}

// clean the text
$json = preg_replace('/\xc2\xa0/', '', $json);
$json = str_replace("ft (", " ft (", $json);
$json = str_replace("m)", " m)", $json);

echo json_encode($json);

?>
