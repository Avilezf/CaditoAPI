import express from 'express';
require('dotenv').config();

export default class Server {

    public app : express.Application;
    public port: number = 3000;

    constructor() {
        this.app = express();
    }

    start( callback: () => void ) {
        this.app.listen(process.env.PORT || 3000, callback);
    }
    
}