<?php
foreach (getallheaders() as $name => $value) {
    if($name == 'Authorization')
        echo "$name: $value\n";
}
exit;
?>
