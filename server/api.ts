import * as express from 'express';

export default function Api(app) {
    const router = express.Router();

    router.route('/test/kurwa').post((req, res) => {
        res.status(200).json({
            res: () => {
              return 'kurwa';
            }
        });
    });

    app.use('/api', router);
}


//http://localhost:8080/api/test/kurwa;
