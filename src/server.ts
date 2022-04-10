import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import ApiRouter from './router/api';
import cors from 'cors';
import bodyParser from 'body-parser'

dotenv.config();
const server = express();

server.use(cors({
    origin: '*'
}));

server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

server.use(ApiRouter);

server.use((req: Request, res: Response)=>{
    res.status(404);
    res.json({
        error: 'Endpointer não encontrado.'
    });
});

server.listen(process.env.PORT);