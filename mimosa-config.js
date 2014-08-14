exports.config = {
  "modules": [
    "copy",
    "jshint",
    "minify-js",
    "minify-css",
    "live-reload",
    "stylus"
  ],
  
  "watch": {
    "sourceDir": "assets-src",
    "compiledDir": "assets",
    "javascriptDir": "js"
  }
}