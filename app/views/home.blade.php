<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Homestead</title>
	<link href="{{ asset_path('app.css') }}" rel="stylesheet">
</head>
<body>

	<div class="container">
		<img src="{{ asset_path('logo.png') }}" alt="">
		<h1>Hello :)</h1>
		<p>Saving any file in the following directories will run the corresonding gulp tasks that manage compiling, optimization, and browser refreshing/syncing.</p>
		<ul class="code-list">
			<li><span>app/assets/stylesheets</span></li>
			<li><span>app/assets/javascripts</span></li>
			<li><span>app/assets/images</span></li>
			<li><span>app/assets/fonts</span></li>
			<li><span>app/views</span></li>
		</ul>
		<p>
			Go ahead. Give it a try.
		</p>
	</div>

	<script src="{{ asset_path('app.js') }}"></script>
</body>
</html>