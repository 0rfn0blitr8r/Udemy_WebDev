const fs = require('fs');

let dirName = process.argv[2] || 'NewDir';
let htmlFileName = process.argv[3] || 'index';
let cssFileName = process.argc[4] || 'app';
let jsFileName = process.argv[5] || 'app';

fs.mkdirSync(dirName);
fs.writeFileSync(`${dirname}/index.html`);
fs.writeFileSync(`${dirname}/app.css`);
fs.writeFileSync(`${dirname}/app.js`);
// fs.writeFileSync(`${dirname}/${htmlFileName}.html`);
// fs.writeFileSync(`${dirname}/${cssFileName}.css`);
// fs.writeFileSync(`${dirname}/${jsFileName}.js`);