const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const htmlPath = path.join(baseDir, 'index.html');
const cssPath = path.join(baseDir, 'assets', 'css', 'style.css');
const dataPath = path.join(baseDir, 'assets', 'js', 'data.js');
const particlesPath = path.join(baseDir, 'assets', 'js', 'particles.js');
const mainPath = path.join(baseDir, 'assets', 'js', 'main.js');

let html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const data = fs.readFileSync(dataPath, 'utf8');
const particles = fs.readFileSync(particlesPath, 'utf8');
const main = fs.readFileSync(mainPath, 'utf8');

// Replace css link
html = html.replace(
  '<link rel="stylesheet" href="assets/css/style.css" />',
  `<style>\n${css}\n</style>`
);

// Replace script tags
html = html.replace(
  /<script src="assets\/js\/data\.js"><\/script>[\s\S]*?<script src="assets\/js\/main\.js"><\/script>/,
  `<script>\n${data}\n\n${particles}\n\n${main}\n</script>`
);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Bundle complete. index.html is now 100% self-contained!');
