<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Form 2</title>
	<!-- Other meta here -->
	<link href="style.css" rel="stylesheet" type="text/css" />
	<script src="nav.js" type="text/javascript"></script>
</head>
<body>
<?php
	include_once ("php_menu.html");
?>
	<!-- Web page starts here -->
	<h1>Input Checking with Regular Expressions</h1>
	
	<!-- just a regular HTML form -->
	<form method="post" action="php_process_regex.php">
				<p><label for="firstname">Enter First Name:</label>
			<input type="text" id ="firstname" name="fname" />
		</p>
		<p><label for="lastname">Enter Last Name:</label>
			<input type="text" id ="lastname" name="lname" />
		</p>
		<p><label for="favnumber">Enter Favourite Number between 1 and 100::</label>
			<input type="text" id ="favnumber" name="favnum" />
		</p>
		<p>
			<input type="submit" value="Process" />
		</p>
	</form>
</body>
</html>