const http = require("http");

const { pool } = require("pg");

const db = new pool({
  host: "localhost",
  port: 1900,
  user: " alekhuser",
  password: "alekhuser",
  database: "alekhDetabseOne",
});
function getmenu(a, b) {
  const result = database.query("select * from hotel_menu");
  console.log(result);
  a.end(json.stringify(result.rows));
}

if (req.url === "/") {
  res.write("<html>");
  res.write("<head><title> hotel menu </title></head>");
  res.write("<body><h1> hotel menu</h1>");
  res.write("</body></html>");
  return res.end();
}

if (req.url === "/menu") {
  res.write("<html>");
  res.write("<head></head>");
  res.write("<body><h1>Delete id successful</h1>");
  res.write("</body></html>");
  return res.end();
}


let server = http.crerateserver((request,Response)) 

const address = "127.0.0.1";
const port = 19000;

server.listen(port, address, () => {
  console.log("Server is running on http://" + address + ":" + port);
});
