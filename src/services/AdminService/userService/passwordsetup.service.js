import Employee from '../../../models/users.models.js';
import passwordHash from '../../../utils/generators/hashPassword.js';
export const updatePassWord = async (password, id) => {
  const hashedPasswrd =await passwordHash(password);
  console.log(hashedPasswrd)
  const updatepassword = await Employee.update(
    {
      password: hashedPasswrd,
      isActive: true,
    },
    {
      where: { id: id },
    },
  );

  if (!updatepassword) {
    return {
      message: "Couldn't update password please try again later",
    };
  }
  return {
    message: 'successfully updated password',
  };
};
