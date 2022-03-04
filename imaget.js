const thread =require("threads")
const http =require("http")
http.createServer( async function (req, res) {
  if(req.method == 'POST') {
    var body = '';
    console.log("request accepted")
    req.on('data',async function (data) {
    
      body += data;
      var out = JSON.parse(body);
      var url =out['imageurl']
     
      //main(url)
      console.log("request accepted")
      const image = await thread.spawn(new thread.Worker("module.js"))
      const hash=await image.hashed(url)
      console.log(hash)
      if(hash=="error"){
        res.statusCode=404
        res.write("{'success': false,'error': check the url}")
        res.end("failure")
      }
      else{
        res.write("{'success': true,'message': successfully processed}")
        res.end("success")
      }
      //res.write(x)
      //res.end("success")
    }); 
  } 
  else{
    res.statusCode=404
    res.end("method not suitable")
  }
}).listen(8080);
async function main(url){
  console.log("request accepted")
  const image = await thread.spawn(new thread.Worker("module.js"))
  const hash=await image.hashed(url)
  console.log(hash)
  //await thread.Thread.terminate(image)
}













