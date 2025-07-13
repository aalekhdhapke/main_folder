const http = require("http");
const { Result } = require("pg");

const messageArray = []; 
function myfunction (a,b,c){
  c(Result)
  return a + b
}
// function callback(X){     
// }
const server = http.createServer((req, res) => {

  // let Z = myfunction (5,10,(X) =>{
  //   console.log("callback function : " + X)             

  // });
  console.log(req.headers["user-agent"]);
  
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  const studentsData = [
    {message:"hello",
     name:"alekh"

    },
    {message:"hello world",
      name:"ayush l"
 
     }, 
     {message:"hello world bye",
      name:"ayush B"
 
     },
  ]

  if ( req.url === "/get-messages") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(messageArray));
  }

  else if ( req.url === "/post-message") {
    let data = "";

    req.on("data", (chunk) => {       
      data += chunk;
    });

    req.on("end", () => {
      try {
        const parsed = JSON.parse(data);
        messageArray.push(parsed);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Message posted successfully");
      } catch (error) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Invalid JSON");
      }
    });
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found ");
  }
});

// Start server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
