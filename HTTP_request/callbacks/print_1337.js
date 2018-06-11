var getHTML = require('../step5.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
}

function print_1337(html){
  html = html.toLowerCase();
  var groupings = {'ck' : 'x', 'er' : '0r', 'you' : 'j00'};
  for(var pair in groupings){
    while(html.search(pair) > -1){
      html = html.replace(pair, groupings[pair]);
    }
  }

  var singles = {a : '4', e : '3', l : '1', o : '0', s : '5', t : '7'};
  for(var letter in singles){
    while(html.search(letter) > -1){
      html = html.replace(letter, singles[letter]);
    }
  }

  console.log(html);


}

getHTML(requestOptions, print_1337);