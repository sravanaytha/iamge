const download = require('node-image-downloader')
const ex=require("threads/worker")
const { mainModule } = require('process');
const sharp =require("sharp")
var x=""
const y = (sre) => {
    return new Promise(resolve => {
      
        var fs = require('fs'),
    request = require('request');
    

var download = function(uri, filename, callback){
 
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    if( res.headers['content-type']=="application/xml; charset=UTF-8" || res.headers['content-type']=="application/xml"  )
    {
      x="error"
    }
    console.log('content-length:', res.headers['content-length']);
    
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

            download(sre, 'google.png', function(){
              console.log(x)
                if(x=="error"){
                  resolve("error")
                }
              else{
                sharp("google.png").resize(320, 240).toFile('googleresize.png', (err, info) => { });
                resolve("done")
              }
            });
        
            
    })
}
ex.expose({
  async hashed(password) {
  

        var x = await y(password);
        return x;

  }
})