const dns=require('dns');
/*dns.lookup('localhost',(err,data)=>{
    if(err) console.log(err);
    console.log(data)
})*//*
dns.resolve4('www.hackerearth.com',(err,data)=>{
    if(err) console.log(err);
    console.log(data)
})*/
dns.reverse('35.161.75.227',(err,data)=>{
    if(err) console.log(err);
    console.log(data)
})