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
			And, with the awesomeness that is browserysync, you can visit your <strong>External URL</strong> from any device on the network and it will update <em>that</em> device's browser with the new assets. You can even scroll on one device or click on a link, and all devices will follow. It's black magic.
		</p>
		<h2>For Development</h2>
		<p>
			<strong>Command: </strong> <code>gulp</code>
		</p>
		<p>
			The above command will compile all your assets and start up BrowserSync. From there, you can make updates to any of the folders being watched and the gulp tasks will take care of everything else.
		</p>
		<h2>For Production</h2>
		<p>
			<strong>Command: </strong> <code>gulp production</code>
		</p>
		<p>
			Does all the same things <code>gulp watch</code>, minus the BrowserSync stuff. It also does the file rev'ing and creates a manifest file which is then used via the <code>asset_path()</code> function in <code>app/helpers.php</code>.
		</p>
	</div>

	<script src="{{ asset_path('app.js') }}"></script>
</body>
</html>