import express from 'express';
import bodyParser from 'body-parser';

import configuration from './config';
import authRouter from './routes/auth.routes';

const app = express();
const port = configuration.port;

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/auth', authRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
