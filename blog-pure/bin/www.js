const http = require('http');
const serverHandler = require('../app');


const port = process.env.PORT || 8080;
const server = http.createServer(serverHandler);

server.listen(port, () => {
    console.log(`listening on port ${port}`);
});