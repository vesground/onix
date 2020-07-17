import path from 'path';
import express from 'express';

const server = express();

server.use('/', express.static(path.join(__dirname, '../build')));
server.use('/public', express.static(path.join(__dirname, '../public')));

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server is listening on port ${port}`));
