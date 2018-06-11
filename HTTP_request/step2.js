var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    var output = '';

    response.on('data', function(dataChunk){
      output += dataChunk.toString();
    });

    response.on('end', function(){
      console.log(output + '\n\nStream Complete! :)');
    });


  })

}

getAndPrintHTML();

