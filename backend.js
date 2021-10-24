const http = require('http');
const path = require('path');
const fs = require('fs');

fileExtensions = 
{
    ".html" : "text/html",
	".css" : "text/css",
	".js" : "application/javascript",
	".jpg" : "image/jpeg",
    ".png" : "image/png"
};

function getFile(path, response, mimeType)
{
    fs.stat(path, function(error, stat)
    {
        if(!error) //file found
        {
            fs.readFile(path, function(error, content)
            {
                if (error)
                {
                    console.dir(error);
                }
                else
                {
                    response.writeHead(200, 
                        {
                            'Content-Type' : mimeType,
                            'Content-Length' : content.length
                        });
                    response.write(content);
                    response.end();
                }
            });
        }
        else if (error.code === 'ENOENT') //404
        {
            console.log(path);
            response.writeHead(404);
            response.write("404: Page not found.");
            response.end();
        }
        else
        {
            console.dir(error);
        }
    });
};

function requestHandler(request, response)
{
    var fileName = path.basename(request.url) || 'heatmap.html';
    var serverFolder = __dirname + '/';
    var extension = path.extname(fileName);
    getFile((serverFolder + fileName), response, fileExtensions[extension]);
};

const webServer = http.createServer(requestHandler);
webServer.listen(8080);