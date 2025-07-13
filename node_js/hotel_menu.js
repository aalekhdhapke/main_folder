const http = require("http");

const server = http.createServer((req, res) => {
 
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title> hotel menu </title></head>");
    res.write("<body><h1> hotel menu</h1>");
    res.write("<ul><li> dosa</li><li>idli</li><li>uttapam</li></ul>");
    res.write("<ul><li> chana</li><li>pav bhaji</li><li> dal</li></ul>");
    res.write("</body></html>");
    return res.end();
  }

  if (req.url === "/submit") {
    res.write(`<html>
        <head><title>Submit</title></head>
        <body>
          <h1>Submit Form</h1>
            <input style="height:30px;" type="text" placeholder="menu_id"/>
          <input style="height:30px;" type="text" placeholder="category_id"/>
          <input style="height:30px;" type="password" placeholder="description"/>
          <button style="height:30px; background-color: lightblue; margin-left:35px;">Submit</button>
        </body>
      </html>`);
    return res.end();
  }

  if (req.url === "/update") {
    res.write(`<html>
        <head><title>Update</title></head>
        <body>
          <h1>Update Form</h1>
          <input style="height:30px;" type="text" placeholder="menu_id"/>
          <input style="height:30px;" type="text" placeholder="category_id"/>
          <input style="height:30px;" type="password" placeholder="description"/>
          <button style="height:30px; background-color: lightblue; margin-left:35px;">Submit</button> 
        </body>
      </html>`);
    return res.end();
  }

  if (req.url === "/delete/id") {
    res.write("<html>");
    res.write("<head></head>");
    res.write("<body><h1>Delete id successful</h1>");
    res.write("</body></html>");
    return res.end();
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});

