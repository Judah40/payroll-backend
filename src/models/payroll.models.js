import { Sequelize } from 'sequelize';
import config from '../config/database.config.js';
const { sequelize } = config;

const Payroll = sequelize.define(
  'payroll',
  {
    employeeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'employees',
        key: 'id',
      },
    },
    basicSalary: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    payStartPeriod: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    payEndPeriod: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    deduction: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    allowance: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    overtimePay: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    netPay: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    paymentDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    paymentStatus: {
      type: Sequelize.ENUM('Pending', 'Paid', 'Failed'),
    },
  },
  {
    sequelize,
    modelName: 'Payroll',
  },
);

export default Payroll;
