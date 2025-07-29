const http = require ('http');
const students = require('./students');
const url = require('url');


const PORT = 5000;

const server = http.createServer((req, res)=>{
    //Logic will come here 

    const parsedURL = url.parse(req.url, true);
    const path = parsedURL.pathname;
    const method = req.method;

    //Route for the GET ALL request
    if(path ==='/students' && method === "GET" ){
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(students));
    } else if(path.startsWith('/students/') && method === "GET") {
        const id = parseInt(path.split("/")[2]);
        const student = students.find(s => s.id === id);
        if(student) {
            res.writeHead(200, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify(student));
        } else {
            res.writeHead(404);
            res.end('Student not found');
        }
    } else if(path === "/students" && method === "POST"){
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString()
        } )

        req.on("end", () => {
            const newStudent = JSON.parse(body);
            newStudent.id = Date.now();
            students.push(newStudent);

            res.writeHead(200, {'Content-Type' : 'application/json'});
            res.end(JSON.stringify(newStudent));
        })
    }
    
    else {
        res.writeHead(404);
        res.end("Route not found");
    }
});
server.listen(PORT, () => {
    console.log(`Server got started on the port ${PORT}`)
})