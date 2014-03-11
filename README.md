bootstrap3-LESS-theme
=====================

Bootstrap 3 theme starter based on LESS and gulp instead of grunt.

# What's this? 

In my latest projects I needed to create a bunch of custom Bootstrap 3 themes (http://bookpag.es and http://weddingpag.es). I love using LESS for quick CSS modifications and using Grunt is not my thing.

Instead I decided to create a Bootstrap theme starter that uses easy to understand gulp.js (gulpjs.com) that you can modify to fit your liking. Gulp allows you to automate all the minification/compilation of assets in a convenient way. 

This repo is set up to compile all assets in "less" folder, minify them and spit them out as "styles.css" and "styles.min.css" in "dist/css" folder. 

The same goes with JS assets. All JS scripts from "js" folder are combined and minified, then put in the "dist/js" folder.

The icon fonts remain untouched, they are just copied from the source folder to "dist" folder.

## Installation

You need to have npm installed. 

Then just run

```
npm install
```

in the root of this folder. This will install all dependencies and your setup will be ready to go.

## Workflow

To run the file watcher and compile files as they are modified, just run "gulp" from command line:

```
gulp
```

Now, try to add something to the "less/theme.less" file or modify any of Bootstrap's files and save the file. You will see gulp doing its thing, processing the LESS assets and compiling them.

Same goes with JS files. Any scripts you place in "js" folder will be added and combined into one JS file. If you need specific order of JS file concatenation, make sure to check out the docs for gulp-concat plugin : https://github.com/wearefractal/gulp-concat

Enjoy using this small Theme starter to produce awesome Bootstrap 3 themes.

## More resources

I've written a free chapter on integrating Bootstrap 3 in your web applications. You can read it in my new e-book: http://bookpag.es/frontend 

Also, make sure to check out my website that has hundreds of awesome Bootstrap snippets ready for you to copy/paste: http://bootsnipp.com

