<?php
$fileNames = $_GET[ 'fileNames' ];
$arrFile = split( ',', $fileNames );
$arrLength = count( $arrFile );

for( $i = 0; $i < $arrLength; $i++ ) {
	unlink( trim( $arrFile[ $i ] ) );
}

// if any error - return "error"
echo 'ok';

?>