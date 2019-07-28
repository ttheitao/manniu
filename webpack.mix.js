let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/pc/js/app.js', 'public/pc/js')
    .sass('resources/assets/pc/sass/app.scss', 'public/pc/css')
    .version();

mix.js('resources/assets/mobile/js/app.js', 'public/mobile/js')
    .sass('resources/assets/mobile/sass/app.scss', 'public/mobile/css')
    .version();