import { handleInsertUser } from '../../../services/AdminService/userService/register.service.js';

export const handleRegisterController = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      gender,
      email,
      password,
      address,
      role,
      phoneNumber,
      profile_picture,
      department,
      jobTitle,
    } = req.body;

    const newEmployee = await handleInsertUser(
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      gender,
      email,
      password,
      address,
      role,
      phoneNumber,
      profile_picture,
      department,
      jobTitle,
    );

    

    // Return a success response with the newly created user
    return res.status(201).json({
      message: 'Employee created successfully',
      user: newEmployee,
    });
  } catch (error) {
    console.error('Error in user creation:', error);
    // Return a failure response
    return res.status(400).json({
      message: error.message || 'An error occurred while creating the user',
    });
  }
};
