import Joi from 'joi';

const employeeValidationSchema = Joi.object({
  firstName: Joi.string().trim().min(2).max(50).required().messages({
    'string.empty': 'First name is required.',
    'string.min': 'First name must be at least 2 characters long.',
    'string.max': 'First name must not exceed 50 characters.',
  }),
  middleName: Joi.string().trim().min(2).max(50).optional().messages({
    'string.min': 'Middle name must be at least 2 characters long.',
    'string.max': 'Middle name must not exceed 50 characters.',
  }),
  lastName: Joi.string().trim().min(2).max(50).required().messages({
    'string.empty': 'Last name is required.',
    'string.min': 'Last name must be at least 2 characters long.',
    'string.max': 'Last name must not exceed 50 characters.',
  }),
  dateOfBirth: Joi.date().iso().less('now').required().messages({
    'date.base': 'Date of birth must be a valid date.',
    'date.less': 'Date of birth must be in the past.',
    'any.required': 'Date of birth is required.',
  }),
  gender: Joi.string().valid('Male', 'Female', 'Other').required().messages({
    'any.only': 'Gender must be Male, Female, or Other.',
    'any.required': 'Gender is required.',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address.',
    'any.required': 'Email is required.',
  }),

  address: Joi.string().trim().max(100).optional().messages({
    'string.max': 'Address must not exceed 100 characters.',
  }),
  role: Joi.string().valid('Admin', 'User', 'Manager').required().messages({
    'any.only': 'Role must be Admin, User, or Manager.',
    'any.required': 'Role is required.',
  }),
  phoneNumber: Joi.string()
    .pattern(/^[+0-9]{10,15}$/)
    .required()
    .messages({
      'string.pattern.base':
        'Phone number must be a valid international format (e.g. +123456789)',
      'any.required': 'Phone number is required',
    }),

  profile_picture: Joi.string().uri().optional().messages({
    'string.uri': 'Profile picture must be a valid URL.',
  }),
  department: Joi.string().trim().min(2).max(50).required().messages({
    'string.empty': 'Department is required.',
    'string.min': 'Department must be at least 2 characters long.',
    'string.max': 'Department must not exceed 50 characters.',
  }),
  jobTitle: Joi.string().trim().min(2).max(50).required().messages({
    'string.empty': 'Job title is required.',
    'string.min': 'Job title must be at least 2 characters long.',
    'string.max': 'Job title must not exceed 50 characters.',
  }),
});

//USER LOGIN
const employeeRegisterValidator = (req, res, next) => {
  const { error } = employeeValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 'error',
      message: error.details.map((detail) => detail.message).join(', '),
      statusCode: 400,
    });
  }
  next();
};
export default employeeRegisterValidator;
