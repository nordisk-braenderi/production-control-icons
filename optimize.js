const fs = require('fs');
const path = require('path');
const svgo = new (require('svgo'))({
  plugins: [
    {removeTitle: true},
    {removeDimensions: true},
    {removeUselessStrokeAndFill: true},
  ],
});

fs.readdir(path.resolve(__dirname, 'icons'), (err, files) => {
  const svgs = files.filter(file => path.extname(file) === '.svg');

  svgs.map(svg => {
    const file = path.resolve(__dirname, 'icons', svg);
    fs.readFile(file, 'utf8', (err, data) => {
      // console.log(data);
      svgo.optimize(data, ({data}) => {
        fs.writeFile(file, data, err => {
          console.log(err);
        });
      });
    });
  });

});