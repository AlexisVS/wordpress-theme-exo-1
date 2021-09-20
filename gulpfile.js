const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const headerComment = require('gulp-header-comment');
// const postcss = require('gulp-postcss')



const comment = `
Theme Name: Theme exo one
Theme URI: https://wordpress.org/themes/twentytwenty/
Author: gogolplus
Author URI: https://wordpress.org/
Description: Our default theme for 2020 is designed to take full advantage of the flexibility of the block editor. Organizations and businesses have the ability to create dynamic landing pages with endless layouts using the group and column blocks. The centered content column and fine-tuned typography also makes it perfect for traditional blogs. Complete editor styles give you a good idea of what your content will look like, even before you publish. You can give your site a personal touch by changing the background colors and the accent color in the Customizer. The colors of all elements on your site are automatically calculated based on the colors you pick, ensuring a high, accessible color contrast for your visitors.
Tags: blog, one-column, custom-background, custom-colors, custom-logo, custom-menu, editor-style, featured-images, footer-widgets, full-width-template, rtl-language-support, sticky-post, theme-options, threaded-comments, translation-ready, block-styles, wide-blocks, accessibility-ready
Version: 1.0
Requires at least: 5.8
Tested up to: 5.8
Requires PHP: 7.4
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: twentytwenty
This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
`
gulp.task('sass', () => {
  return gulp.src('./src/sass/**/app.sass')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(headerComment(comment))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass-watch', function () {
  gulp.watch('./src/sass/**/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series(['sass', 'sass-watch']));