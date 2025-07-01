import express from 'express';
import config from './config.js';
import cors from 'cors';
import router from './index.router.js';
import morgan from 'morgan';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use('/api', router);

app.listen(config.app.port, () => {
    console.log(`Server is running on port ${config.app.port}`);
});

