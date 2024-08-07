import express from 'express';
import configuration from './config';

const app = express();
const port = configuration.port;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
