module.exports = function getHTML(options, callback){
  var https = require('https');

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