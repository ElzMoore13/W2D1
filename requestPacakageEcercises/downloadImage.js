var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function(err){
          console.log("I've encountered and error :( ")
          throw err;
       })
       .on('response', function(response){
        console.log('Downloading image...\n')
        console.log('Response Status Message: ' + response.statusMessage);
        console.log('Content Type: ' + response.headers['content-type']);
        console.log('\n...Image downloaded!\n')
       })
       .pipe(fs.createWriteStream('./future.jpg'));
