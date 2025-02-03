import Employee from '../../../models/users.models.js';
import { handleGenerateEmployeeeId } from '../../../utils/generators/employeeId.generator.js';
import generateOTP from '../../../utils/generators/otp.generator.js';

export const handleInsertUser = async (
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
) => {
  console.log(
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
  try {
    // Check if the email already exists
    const alreadyExistingEmployee = await Employee.findOne({
      where: { email },
    });

    if (alreadyExistingEmployee) {
      throw new Error(`Employee with the email ${email} already exists`);
    }

    // Generate Employee ID and OTP
    const employeeId = handleGenerateEmployeeeId();
    const otp = generateOTP();

    // Create the new employee
    const newEmployee = await Employee.create({
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      gender: gender,
      email: email,
      password: password,
      address: address,
      role: role,
      phoneNumber: phoneNumber,
      profile_picture: profile_picture,
      otp: otp,
      department: department,
      jobTitle: jobTitle,
      employeeId: employeeId,
    });

    return newEmployee;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; // Re-throw the error for the calling function to handle
  }
};
