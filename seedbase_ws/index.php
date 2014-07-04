<?php

include 'include/db.php';
$action = $_REQUEST['action'];

switch ($action) {
    case 'login':
        $response = array();
        $username = null;
        $password = null;

        // mod_php
        if (isset($_SERVER['PHP_AUTH_USER'])) {
            $username = $_SERVER['PHP_AUTH_USER'];
            $password = $_SERVER['PHP_AUTH_PW'];

            // most other servers
        } elseif (isset($_SERVER['HTTP_AUTHORIZATION'])) {

            if (strpos(strtolower($_SERVER['HTTP_AUTHORIZATION']), 'basic') === 0)
                list($username, $password) = explode(':', base64_decode(substr($_SERVER['HTTP_AUTHORIZATION'], 6)));
        }
        if (is_null($username)) {
            header('WWW-Authenticate: Basic realm="My Realm"');
            header('HTTP/1.0 401 Unauthorized');
            echo 'Text to send if user hits Cancel button';
            die();
        } else {
            $selectUserSql = "SELECT * FROM sb_users where username='$username'";
            $result = mysql_query($selectUserSql);

            if (!$result) {
                $response['status'] = 'error';
                $response['reason'] = 'Invalid Credentials';
            }
            if (mysql_num_rows($result) == 0) {
                $response['status'] = 'error';
                $response['reason'] = 'Invalid Credentials';
            } else {
                $data = mysql_fetch_assoc($result);
                if ($data['password'] == sha1($password)) {
                    $response['status'] = 'success';
                } else {
                    $response['status'] = 'error';
                    $response['reason'] = "Incorrect password";
                }
            }
            echo json_encode($response);
            exit;
        }
        break;

    default:
        break;
}
exit;
?>
