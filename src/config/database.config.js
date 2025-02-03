import Sequelize from 'sequelize';
import dbConnect from './default.config.js';

const sequelize = new Sequelize(dbConnect.dbName, dbConnect.dbUsername, dbConnect.dbPassword, {
  dialect: 'postgres',
  host: dbConnect.dbUrl,
//   dialectOptions: {
//     ssl: {
//       require: true, // This will help you. But you will see nwe error
//       rejectUnauthorized: false, // This line will fix new error
//     },
//   },
});

const connectDB = async (app) => {
  try {
    if (app) {
      await sequelize.sync();
      console.log('Database connected successfully');
      app.listen(dbConnect.appPort, () => {
        console.log(`🚀 Server Listening on port ${dbConnect.appPort}`);
      });
    }
  } catch (error) {
    console.error('❌ Postgres connection error:', error.message);
  }
  console.log(dbConnect.jwtSecret);
};

export default { sequelize, connectDB };
