import { Sequelize } from 'sequelize';
import config from '../config/database.config.js';

const { sequelize } = config;

const Attendance = sequelize.define(
  'attendance',
  {
    employeeId: {
      type: Sequelize.INTEGER, // Assuming employeeId is a string
      allowNull: false,
      reference: {
        model: 'employees',
        key: 'id',
      },
    },
    date: {
      type: Sequelize.DATEONLY, // For storing date in YYYY-MM-DD format
      allowNull: false,
    },
    signInTime: {
      type: Sequelize.TIME, // For storing time in HH:mm:ss format
      allowNull: true, // Can be null initially
    },
    signOutTime: {
      type: Sequelize.TIME, // For storing time in HH:mm:ss format
      allowNull: true, // Can be null initially
    },
    status: {
      type: Sequelize.ENUM('Late', 'Present', 'Absent'), // Predefined status values
      allowNull: false,
      defaultValue: 'Absent', // Default status is Absent
    },
    emergencyReason: {
      type: Sequelize.TEXT, // Allows longer text for emergency reasons
      allowNull: true, // Optional field
    },
  },
  {
    sequelize,
    modelName: 'Attendance',
  },
);

export default Attendance;
