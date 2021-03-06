import config, { nodeEnv } from './config';
import express from 'express';
import api from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use (sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set ('view engine', 'ejs'); //it will look for ejs file in views folder.

server.get('/', (req, res)=>{
    res.render ('index',{content: 'Hello from EJS'});
});

server.use('/api', api);
server.use(express.static('public'));


server.listen(config.port, (err)=>{
    console.log (err || ("The server is running on port:" + config.port)); 
});