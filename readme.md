## Laravel Gulp Pipeline

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/downloads.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

### Installation

Clone the repo, then:

```bash
$ composer install
$ npm install
$ gulp
```

### Overview

Saving any file in the following directories will run the corresonding gulp tasks that manage compiling, optimization, and browser refreshing/syncing.

* app/assets/stylesheets
* app/assets/javascripts
* app/assets/images
* app/assets/fonts
* app/views

And, with the awesomeness that is browserysync, you can visit your **External URL** from any device on the network and it will update _that_ device's browser with the new assets. You can even scroll on one device or click on a link, and all devices will follow. It's black magic.

## For Development

```bash
$ gulp
```

The above command will compile all your assets and start up BrowserSync. From there, you can make updates to any of the folders being watched and the gulp tasks will take care of everything else. It serves via proxy http://homestead.app:8000 and makes it accessible at http://localhost:3000.

## For Production

```bash
$ gulp production
```

Does all the same things `gulp watch`, without BrowserSyncing, and adds minification. It also does the file rev'ing and creates a manifest file which is then used via the `asset_path()` function in `app/helpers.php`.

### File Revisioning within Views

This ensures that files served to the client are the newest version of that file (cachebusted). What this allows for is:

```html
<link href="{{ asset_path('app.css') }}" rel="stylesheet">
<img src="{{ asset_path('logo.png') }}" alt="Logo">
```

To compile to:

```html
<link href="/assets/app-90d1132a.css" rel="stylesheet">
<img src="/assets/logo-4c2e07e0.png" alt="Logo">
```
