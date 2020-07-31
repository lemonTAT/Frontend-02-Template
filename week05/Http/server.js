const http = require('http');
const {request} = require('https');

http.createServer((requset, response) => {
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk.toString());
    }).on('end', () => {
        // body = Buffer.concat(body).toString();
        console.log('body:', body);
        res.setHeader('Content-Type', 'text/html');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(`
            <html>  
                <head>  
                    <title>放置文章标题</title>  
                    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" /> 
                    <style>
                        #container{
                            width: 500px;
                            height: 300px;
                            display: flex;
                            background-color: rgb(0,255,255);
                        }
                        
                        #myid {
                            width: 200px;
                            height: 100px;
                            background-color: rgb(255,0,0);
                        }
                        
                        .c1 {
                            flex: 1;
                            background-color: rgb(0,255,0);
                        }
                    </style>
                </head> 
                <body> 
                    <div id="container">
                        <div id="myid"></div>
                        <div class="c1"></div>
                    </div>
                </body> 
            </html>
        `);
    });
}).listen(8088)

console.log('server started')