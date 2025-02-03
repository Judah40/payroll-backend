import jwt from 'jsonwebtoken';
import jwtSecret from '../../config/default.config.js';

export const generateEmployeeJwtAccessToken = (user, userRole, isActive) => {
  const payload = {
    id: user,
    role: userRole,
    isActive: isActive,
  };
  try {
    return jwt.sign(payload, jwtSecret.jwtSecret, {
      expiresIn: '1d',
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
