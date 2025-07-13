const http = require('http');
const querystring = require('querystring'); // Import querystring to parse form data

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write("<body>");
    res.write("<form action='/students' method='post'>");
    res.write("<input type='text' placeholder='Name' name='name' />"); 
    res.write("<input type='text' placeholder='Address' name='address' />"); 
    res.write("<button type='submit' style='background-color: lightblue;'>Submit</button>");
    res.write("</form>");
    res.write("</body></html>");
    res.end();
  } else if (req.url === "/students" && req.method === "POST") {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString(); // Collect POST data
    });
    
    req.on('end', () => {
      const parsedData = querystring.parse(body); // Parse the POST data
      const name = parsedData.name || "N/A";
      const address = parsedData.address || "N/A";
      
      // Display submitted form data on the response page
      res.write("<html>");
      res.write("<head><title>Form Submitted</title></head>");
      res.write("<body>");
      res.write("<h1>Form Submitted Successfully</h1>");
      res.write(`<p><strong>Name:</strong> ${name}</p>`);
      res.write(`<p><strong>Address:</strong> ${address}</p>`);
      res.write("</body></html>");
      res.end();
    });
  } else {
    // Handle 404 - Not Found
    res.statusCode = 404;
    res.write("<html>");
    res.write("<head><title>404 Not Found</title></head>");
    res.write("<body><h1>Page Not Found</h1></body>");
    res.write("</html>");
    res.end();
  }
});

const address = "127.0.0.1";
const port = 19000;

server.listen(port, address, () => {
  console.log("Server is running on http://" + address + ":" + port);
});
