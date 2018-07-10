<!doctype html>
<html lang="">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		<title>Components</title>
		<meta name="description" content="">
		<link rel="icon" href="" type="image/png">
		<link rel="stylesheet" href="./dist/lib/bootstrap.min.css">
		<link rel="stylesheet" href="./dist/lib/prism.css">
		<link rel="stylesheet" href="./dist/assets/docs.css">

		<script src="./dist/lib/jquery.min.js"></script>
		<script src="./dist/lib/popper.min.js"></script>
		<script src="./dist/lib/bootstrap.min.js"></script>
		<script src="./dist/lib/prism.js"></script>
		<script src="./dist/lib/clipboard.min.js"></script>
	</head>

	<body class="p-5 bg-light">
		<h3 class="mb-3">Project <small class="text-muted">components</small></h3>
		<!-- @include('docs/components/btns') -->
		<?php
			include 'components/btns.blade.php';
		?>

		<script src="./dist/assets/docs.js"></script>
	</body>
</html>
