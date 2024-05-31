/*
    This is the express server used for routing the requests to the appropriate pages.
    The server listens on port 3000 and serves the static files from the dirname directory.
    This is used because live server does not support routing.

    Run the application with the command: 
        node js/server.js
*/
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const dirname = path.join(__dirname, '..');

// Middleware to serve static files
app.use(express.static(dirname));

function servePage(res) {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // add base href to the head tag to make the router work
        data = data.replace('</head>', '<base href="http://localhost:3000"/></head>');
        res.send(data);
    });
}

app.get('*', (req, res) => {
    servePage(res);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});