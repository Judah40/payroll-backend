import { Sequelize } from 'sequelize';
import config from '../config/database.config.js';
const { sequelize } = config;
const Employee = sequelize.define(
  'employee',
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    middleName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },

    gender: {
      type: Sequelize.ENUM('Male', 'Female'),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: 'Default',
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.ENUM('Admin', 'User'),
      allowNull: false,
      defaultValue: 'User',
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    profile_picture: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    otp: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isDeleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    department: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    jobTitle: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    EmployeeId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Employee',
  },
);

export default Employee;
