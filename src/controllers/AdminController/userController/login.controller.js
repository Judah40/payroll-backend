import { userAuth } from '../../../services/AdminService/userService/login.service.js';
import Attendance from '../../../models/attendance.models.js';
export const handleLoginController = async (req, res) => {
  const { employeeId, password } = req.body;
  try {
    const response = await userAuth(employeeId, password);

    if (response.error) {
      return res.status(401).json({ error: response.error });
    }

    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    const now = new Date();
    const formattedTime = now.toLocaleTimeString('en-GB', { hour12: false });
    if (response) {
      const UserTodaysAttendace = await Attendance.findOne({
        where: {
          employeeId: response.id,
          date: today,
        },
      });
      if (!UserTodaysAttendace) {
        await Attendance.create({
          employeeId: response.id,
          date: today,
          signInTime: formattedTime,
          status: 'Present',
        }).catch((err) => {
          console.log('COULD NOT SAVE USER DUE TO:', err);
        });
      }
    }
    return res.status(200).json({
      message: response.message,
      token: response.token,
      ...(response.userType && { userType: response.userType }), // Conditionally include userType
      ...(response.isActive !== undefined && { isActive: response.isActive }), // Include isActive if available
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
