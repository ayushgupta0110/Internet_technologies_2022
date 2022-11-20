// importing modules
const http = require('http');
const fs = require('fs');
const mysql = require('mysql2'); 

// specifying the hostname and port
const hostname = '127.0.0.1'; //localhost
const port = 3000;

// database connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
});

// signin function
function dosignin(req, res, body) {
    let username = body.get("username");
    let password = body.get("password");
    con.connect(function (err) {
        con.query("SELECT * FROM userlogin where username=? and password=?;", [username, password], function (err, result, fields) {
            if (err) {
                res.write("Failed to Execute Login Query!");
                res.end();
                return;
            };
            if (result.length <= 0) {
                res.write('Invalid Login Credentials');
                res.end();
                return;
            }
            else { // if user found
                fs.readFile('welcome.html', function (err, data) {
                    res.write(data);
                    return res.end();
                });
                return;
            }
        });
    });
}

function dosignup(req, res, body) {
    let username = body.get("username");
    let password = body.get("password");
    con.connect(function (err) {    
        con.query("SELECT * FROM userlogin where username=?;", [username], function (err, result, fields) {
            if (err) {
                res.write("Failed to execute SingUp Query!");
                res.end();
                return;
            };
            if (result.length > 0) {
                res.write("Username Already Exist!");
                res.end();
            }
            else {
                con.query("INSERT INTO userlogin VALUES(?,?);", [username, password], function (err, result, fields) {
                    if (err) {
                        res.write("Failed to execute SingUp Query!");
                        res.end();
                        return;
                    };
                    // redirect to index.html
                    fs.readFile('index.html', function (err, data) {
                        res.write(data);
                        return res.end();
                    });
                });
            }
        });
    });
}

// creating server
const server = http.createServer(function(req,res){
    // setting res statusCode and Header
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (req.url == '/') {
        fs.readFile('index.html', function (err, data) {
            res.write(data);
            return res.end();
        });
    }
    else if (req.url == '/signinpage') {
        fs.readFile('signin.html', function (err, data) {
            res.write(data);
            return res.end();
        });
    }
    else if (req.url == '/signuppage') {
        fs.readFile('signup.html', function (err, data) {
            res.write(data);
            return res.end();
        });
    }
    else if (req.url == '/dosignin') {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            var post = new URLSearchParams(body);
            dosignin(req, res, post);
        });
    }
    else if (req.url == '/dosignup') {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            var post = new URLSearchParams(body);
            dosignup(req, res, post);
        });
    }
    else {
        res.end("Page Not Found!");
    }
});

// setting server to listen
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
