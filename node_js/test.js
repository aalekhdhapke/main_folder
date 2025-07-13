function StudentHandler(req, res){
    
    // function StudentHandler(){
    //     (req, res) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            if (req.url === "/students") {
            
                res.write("<html");
                res.write("<head><title>Students</title></head");
                res.write(`<body><h1>Student</h1>`);
                res.write("<ul><li>alekh</li><li>atharv</li><li>ayush</li></ul>");
                res.write("</body></html>");
                return res.end();
            }else if(req.url==="/create-student" && req.method === "post"){
                let body="";
                req.on("data" , (chunk)=>{
                    body = body + chunk.toString();
                    // body += chunk.toSring();
                    console.log(body);
                });
        
                req.on("end" , ()=>{
                    console.log("data student =" + body);
                });
        
                req.on("error" , (err)=>{
                    console.log("404");
                });
            }
            else {
                res.write(`<form action="create-student" method="port"><input type="text" placeholder="username"/><input type="number" placeholder="password"/><button style="">Submit</button></form>`);
                res.write(`<input type="text" placeholder="username"/><input type="number" placeholder="password"/><button style="">Submit</button>`);
                res.end();
            }};

         
            module.export = {
        StudentHandler
            }