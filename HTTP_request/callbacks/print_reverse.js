var getHTML = require('../step5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
}

function printReverse(html){

  html = html.split('').reverse();
  console.log(html.join(''));

}

getHTML(requestOptions, printReverse);