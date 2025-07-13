const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/students") {
    res.write("<html>");
    res.write("<head><title>Students</title></head>");
    res.write("<body><h1>Students</h1>");
    res.write("<ul><li>Alekh</li><li>Ayush</li><li>Atharv</li></ul>");
    res.write("</body></html>");
    res.end();
  } else {
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write("<body>");
    res.write("<form action='/students' method='post' style='background-color'blue''  >");
    res.write("<input type='number' placeholder='number' />");
    res.write("<input type='number' placeholder='number' />");
    res.write("<button type='submit'>addition</button>");
    res.write("</form>");
    res.write("</body></html>");
    res.end();
  }
  if (req.url === "/submit" && req.method === "post") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
  }const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/students") {
    res.write("<html>");
    res.write("<head><title>Students</title></head>");
    res.write("<body><h1>Students</h1>");
    res.write("<ul><li>Alekh</li><li>Ayush</li><li>Atharv</li></ul>");
    res.write("</body></html>");
    res.end();
  } else if (req.url === "/submit" && req.method === "post") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const numbers = body.split("&").map((pair) => pair.split("=")[1]);
      const sum = numbers.reduce((a, b) => parseInt(a) + parseInt(b), 0);
      res.write("<html>");
      res.write("<head><title>Result</title></head>");
      res.write("<body>");
      res.write("<h1>Result: " + sum + "</h1>");
      res.write("</body></html>");
      res.end();
    });
  } else {
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write("<body>");
    res.write("<form action='/submit' method='post' style='background-color: blue'>");
    res.write("<input type='number' name='num1' placeholder='number' />");
    res.write("<input type='number' name='num2' placeholder='number' />");
    res.write("<button type='submit'>addition</button>");
    res.write("</form>");
    res.write("</body></html>");
    res.end();
  }
});

const address = "127.0.0.1";
const port = 52000;

server.listen(port, address, () => {
  console.log(" server is running on http://" + address + ":" + port);
});
});

const address = "127.0.0.1";
const port = 52000;

server.listen(port, address, () => {
  console.log(" server is running on http:/" + "127.0.0.1" + ":" + 52000);
});
