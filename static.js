const fs = require('fs');

module.exports = function (req, resp) {

    if (req.url === '/') {
        responseResource('views/index.html', 'text/html', resp, 'utf-8');
    } else if (req.url.endsWith('.html') ) {
        responseResource(`views${req.url}`, 'text/html', resp, 'utf-8');
    } else if (req.url.endsWith('.css') ) {
        let url = req.url.substring(1, req.url.length);
        responseResource(`${url}`, 'text/css', resp, 'utf-8');
    } else {
        resp.end('File not found!!!');
    }

}

function responseResource(path, type, resp, encoding) {

    if (type) {
        fs.readFile(path, encoding, (err, data) => {

            if(err) {
                console.log('*** error ***');
                console.log('path', path);
                resp.end();
            } else {
                resp.writeHead(200, { 'Content-Type': type });
                resp.write(data);
                resp.end();
            }

        });
    } else {
        fs.readFile(path, (err, data) => {
            resp.writeHead(200, { 'Content-Type': type });
            resp.write(data);
            resp.end();
        });
    }

}