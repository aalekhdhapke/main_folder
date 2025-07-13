const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {

  const split =  url.parse(req.url, true);
  const query = split.query;
  let returnstring = "";
  if (query?.age){
    returnstring = `Hello, = ${query.age} years old.`;
  }
  if (query?.hairstyle){
    returnstring += ` hello, ${query.hairstyle} hairstyle.`;
  }


  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allowfrontend-Methods", "GET, POST, PUT, DELETE");
  res.writeHead(200, { "Content-Type": "text/plain" });


  if (req.url === "/alekh") {
    res.write("Hello, Alekh!"+returnstring);
    return res.end();
  } else if (req.url === "/ayush") {
    res.write("Hello, Ayush!"+returnstring);
    return res.end();
  }
  res.write("Hello, World!"+returnstring);
  res.end();

});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");


});
