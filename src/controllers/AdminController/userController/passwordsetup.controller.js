import { updatePassWord } from '../../../services/AdminService/userService/passwordsetup.service.js';

export const handlePasswordSetup = async (req, res) => {
  const { password, confirmPassword } = req.body;

  const { id } = req.user;

  try {
    const response = await updatePassWord(password, id);
    if (response.error) {
      return res.status(401).json({ error: response.error });
    }

    return res.status(200).json({
      message: response.message,
      statusCode: 200,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
