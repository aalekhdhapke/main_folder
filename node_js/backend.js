const http = require("http");

const messageArray = [];

const server = http.createServer((req, res) => {
  console.log("User Agent:", req.headers["user-agent"]);

  // CORS policy
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "GET" && req.url === "/students") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(studentsData));
  } else if (req.method === "POST" && req.url === "/students") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const student = JSON.parse(body);
        console.log("Received student:", student);

        studentsData.push(student);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ message: "Student data received successfully" })
        );
      } catch (error) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Invalid JSON data");
      }
    });
  }

  // Route: POST /post-message
  else if (req.method === "POST" && req.url === "/post-message") {
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
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

// Start server
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
