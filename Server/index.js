const http = require("http");
const fs = require("fs");

const MyServer = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} : New Req Recive \n`;
  fs.appendFile("log.txt", log, (err, data) => {
   switch (req.url) {
      case '/':
          res.end("Homepage")
         break;
      case '/about': 
            res.end("I am Anuj Yadav")   
             break;
       case '/contactUs': 
              res.end("annu@gmail.com")  
              break;    
      default: res.end("404 Not Faound");
   }
  });
});

MyServer.listen(8000, () => console.log("Server Started "));
