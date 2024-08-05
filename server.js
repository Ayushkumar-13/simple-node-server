// let http = require("http");
//  let fs = require("fs");
let {Buffer} = require("buffer");

buf = Buffer.from("hello");

console.log(buf);

 console.log("starting server")

//  http
//  .createServer((req,res)=> {
//    fs.readFile("response.html", (err,data) => {
//       if (!err){
//          res.writeHead(200, {
//           "Content-Type": "text/html",
//           "X-Auth-Token": "d0hi34ds4jkd9v0d1lk902ioj"
//          });
//          res.write(data);
//          return res.end();
//       } 
//       res.write(500); n
//        console.error(err);
//       res.write("error while reading file");
//       return res.end();
//     });
// }) 
// .listen(8080);

