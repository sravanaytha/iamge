const thread =require("threads")
const http =require("http");
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
const { rawListeners } = require("process");
const { resolveObjectURL } = require("buffer");
http.createServer( async function (req, res) {
    console.log("hi")
    if(req.method == 'POST') {
      var body = '';
     
      req.on('data',async function (data) {
      
        body += data;
        var out = JSON.parse(body);
        var url =out['imageurl']
        var uname=out['uname']
        var pwd=out['pwd']
        //console.log(uname,pwd);
        //main(url)
        if(uname=="sravan" && pwd=="sra123")
        {
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
      }
      else{
        res.end("credentials given wrong")
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

function getuname(){
  return new Promise(resolve=>{
    rl.question('enter ur user name',(msg)=>{
      resolve(msg)
    })
  })
}
function getpwd(){
  return new Promise(resolve=>{
    rl.question('enter ur pwd',(msg)=>{
      resolve(msg)
    })
  })
}










