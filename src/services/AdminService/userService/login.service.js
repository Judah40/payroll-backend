import Employee from '../../../models/users.models.js';
import { generateEmployeeJwtAccessToken } from '../../../utils/generators/token.generator.js';
import bycrypt from 'bcrypt';
export const userAuth = async (employeeId, password) => {
  const user = await Employee.findOne({
    where: {
      EmployeeId: employeeId,
    },
  });
  if (!user) {
    throw new Error('Employee Id Incorrect/Employee Id Does not exist');
  }
  const token = generateEmployeeJwtAccessToken(
    user.id,
    user.role,
    user.isActive,
  );
  if (password === user.password) {
    return {
      token: token,
      message: 'please setup password',
      isActive: user.isActive,
    };
  }

  const isPasswordValid = await bycrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return { error: 'Password is Invalid.' };
  }
  return {
    message: 'Login successful',
    token: token,
    userType: user.role,
    isActive: user.isActive,
    id: user.id,
  };
};
