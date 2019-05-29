import express, { Express } from 'express';
import bodyParser from 'body-parser';

import Routes from './routes';

class Server {
    private static instance: Express;
    
    private constructor() {}

    private static configure(): void {
        this.instance.use(bodyParser.json());
        this.instance.use(bodyParser.urlencoded({ extended: false }));
    }

    public static getInstance(): Express {
        if (!this.instance) {
            this.instance = express();
            this.configure();

            new Routes(this.instance);
        }

        return this.instance;
    }
}

export default Server.getInstance();