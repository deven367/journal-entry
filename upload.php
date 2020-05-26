<?php
if(isset($_POST['date']))
{
$data=$_POST['entry'];
$fp = fopen('entry.txt', 'w');
fwrite($fp, $data);
fclose($fp);
}
?>
