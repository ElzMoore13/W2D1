var https = require('https');

function getAndPrintHTML (options){

  https.get(options, function(response){

    response.setEncoding('utf8');

    var output = '';

    response.on('data', function(dataChunk){
      output += dataChunk.toString();
    });

    response.on('end', function(){
      console.log(output + '\n\nStream Complete! :) ')
    })

  })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);