import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({server});

interface ExtWebSocket extends WebSocket {
    isAlive: boolean;
}

function createMessage(data: object) {
    return JSON.stringify(data);
}


wss.on('connection', (ws: WebSocket) => {
    const extWs = ws as ExtWebSocket;

    extWs.isAlive = true;

    ws.on('pong', () => {
        extWs.isAlive = true;
    });

    ws.on('error', (err) => {
        console.warn(`Client disconnected - reason: ${err}`);
    })
});


const getRandomData = (from: number, to: number) =>  Math.floor(Math.random() * to) + from

const generateRandomData = () => {
    const currentTimestampDate = Date.now();

    return [
        {
            id: 1, timestamp: currentTimestampDate, temperature: getRandomData(0, 40), data: getRandomData(0, 150)
        },
        {
            id: 2, timestamp: currentTimestampDate, temperature: getRandomData(0, 40), data: getRandomData(0, 150)
        },
    ]
}
    //connection is up, let's add a simple simple event
    
setInterval(() => {
    wss.clients.forEach((ws: WebSocket) => {
        const randomData = generateRandomData();

        ws.send(createMessage(randomData));

        const extWs = ws as ExtWebSocket;

        if (!extWs.isAlive) return ws.terminate();

        extWs.isAlive = false;
        ws.ping(null, undefined);
    });
}, 200);

//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port "ws://localhost:8999" :)`);
});