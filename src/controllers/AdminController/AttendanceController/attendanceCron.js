import cron from 'node-cron';
import Attendance from '../../../models/attendance.models.js';

const attendanceCron = () => {
  cron.schedule('0 18 * * *', async () => {
    try {
      const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
      const absentees = await Attendance.findAll({
        where: { date: today, signInTime: null },
      });

      for (const absentee of absentees) {
        absentee.status = 'Absent';
        await absentee.save();
      }

      console.log(`Marked ${absentees.length} employees as absent.`);
    } catch (error) {
      console.error('Error during daily attendance check:', error);
    }
  });
};

export default attendanceCron;
