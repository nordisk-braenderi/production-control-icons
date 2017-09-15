const fs = require('fs');
const path = require('path');
const json2svg = require('json2svg');
const icons = require('./icons.json');
const _ = require('lodash');

const svgs = Object.assign({}, ...icons.map(icon => {
  return {[_.camelCase(icon.title)]: json2svg(icon)};
}));

fs.writeFile(path.resolve(__dirname, '../dist/index.json'), JSON.stringify(svgs));