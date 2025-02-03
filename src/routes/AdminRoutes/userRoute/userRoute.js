import express from 'express';
import { handleRegisterController } from '../../../controllers/AdminController/userController/register.controller.js';
import { handleLoginController } from '../../../controllers/AdminController/userController/login.controller.js';
import {
  handleGetSingleUserDetail,
  handleGetAllUserDetails,
} from '../../../controllers/AdminController/userController/getUserDetails.controller.js';
import {
  handleActivateUser,
  handleDeactivateUser,
  handleGetUserStatus,
} from '../../../controllers/AdminController/userController/status.controller.js';
import employeeRegisterValidator from '../../../utils/validators/employee.validator.js';
import loginValidator from '../../../utils/validators/login.validator.js';
import { handlePasswordSetup } from '../../../controllers/AdminController/userController/passwordsetup.controller.js';
import priviledges from '../../../middlewares/authentication.middleware.js';
import passwordValidator from '../../../utils/validators/password.validator.js';
const router = express.Router();
const { requireAuthenticatedUser } = priviledges;
//RESGISTER EMPLOYEE
router.post(
  '/register-employee',
  employeeRegisterValidator,
  handleRegisterController,
);
//USER LOGIN
router.post('/login-user', loginValidator, handleLoginController);
//GET SINGLE USER DETAILS
router.get('/getSingleEmployee/:id', handleGetSingleUserDetail);
//PASSWORD SETUP
router.put(
  '/password-setup',
  passwordValidator,
  requireAuthenticatedUser,
  handlePasswordSetup,
);
//GET ALL USERS
router.get('/getAllUser', handleGetAllUserDetails);
//ACTIVATE USER
router.put('/activate-user', handleActivateUser);
//DEACTIVATE USER
router.put('/deactivate-user', handleDeactivateUser);
//GET ACTIVE STATUS
router.get('/status', handleGetUserStatus);
export default router;
