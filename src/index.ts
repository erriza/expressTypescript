// import express from 'express'
import { calculator, Operation } from '../multiplier';
import diaryRouter from './routes/diaries';

import express = require('express');

const app = express();

app.use(express.json());

app.get('/api/ping', (_req, res) => {
    res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.post('/calculate', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { value1, value2, op } = req.body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = calculator(Number(value1), Number(value2), op as Operation);
    res.send({ result });
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
});