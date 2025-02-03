import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
const app = express();
import attendanceCron from './controllers/AdminController/AttendanceController/attendanceCron.js';
dotenv.config();
app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
  res.send({ message: 'Hello, world!' });
});

attendanceCron();
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Route not found',
    status: 404,
  });
});

export default app;
