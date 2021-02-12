const http = require("http");

const host = 'localhost'; 

const port = 5000; 

const requestListener = function (req, res) { 

    res.setHeader("Content-Type", "application/json"); 

    switch (req.url) {
        case "/": 

            res.writeHead(200); 

            res.write(`This is home Page`); 

            break; 
            case "/student": 

            res.writeHead(200); 

            res.write(`This is student Page`); 

            break; 
            case "/admin": 

            res.writeHead(200); 

            res.write(`This is admin Page`); 
            
            break; 
            case "/data": 

            res.writeHead(200,{'Content-Type': 'application/json'}); 

            res.write (JSON.stringify({ message: "This is a message from web server!"})); 
            
            break; 
            default: 

            res.writeHead(404); 

            res.end(JSON.stringify({error:"Resource not found"}));
            
  
    } 
    res.end(); 

} 

const server = http.createServer(requestListener); 

server.listen(port, host, () => { 

    console.log(`Server is running on http://${host}:${port}`); 

}); 

