var https = require('https');

function getHTML(options, callback){


  https.get(options, function(response){

    response.setEncoding('utf8');

    var output = '';

    response.on('data', function(dataChunk){
      output += dataChunk.toString();
    });

    response.on('end', function(){
      output += '\n\nStream Complete! :)';
      return callback(output)
    })

  })

}

function printHTML(html){
  console.log(html + "HERE");
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML);