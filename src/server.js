import app from './app.js';
import config from './config/database.config.js';
import Employee from "./models/users.models.js"
import Attendance from './models/attendance.models.js';
import Payroll from './models/payroll.models.js';
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  config.connectDB(app);
};

startServer();
