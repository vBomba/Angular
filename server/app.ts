import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as q from 'q';
import Api from './api';

class App {

    public express: express.Application;
    private mongurl: string;

    constructor() {
        this.express = express();
        this.preparation();
        this.middleware();
    }

    public run(): void {
        this.routes();
    }

    private preparation(): void {
        dotenv.load({path: '.env'});
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
        this.express.use('/', express.static(path.join(__dirname, '../public')));
    }

    public database(): Promise<any> {
        const defer: any = q.defer();

        // if (process.env.NODE_ENV === 'test') {
        //     this.mongurl = process.env.MONGODB_TEST_URI;
        // } else {
        //     this.mongurl = process.env.MONGODB_URI;
        //     this.express.use(logger('dev'));
        // }
        //
        // mongoose.connect(this.mongurl, {useMongoClient: true}).then(
        //     () => defer.resolve(),
        //     () => defer.reject()
        // );

        defer.resolve();

        return defer.promise;
    }

    private routes(): void {
        Api(this.express);

        this.express.get('/*', function (req, res) {
            res.sendFile(path.join(__dirname, '../public/index.html'));
        });
    }

}

export default new App();
