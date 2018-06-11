var getHTML = require('./step5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML(html){
  console.log(html + "HERE");
};

getHTML(requestOptions, printHTML);