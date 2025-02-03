import Joi from 'joi';

const loginValidationSchema = Joi.object({
  employeeId: Joi.string()
    .guid({ version: ['uuidv4'] }) // Ensure it's a valid UUID (specifically v4)
    .required()
    .messages({
      'string.guid': 'Employee ID must be a valid UUID.',
      'string.empty': 'Employee ID is required.',
      'any.required': 'Employee ID is required.',
    }),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required.',
    'any.required': 'Password is required.',
  }),
});

const loginValidator = (req, res, next) => {
  const { error } = loginValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 'error',
      message: error.details.map((detail) => detail.message).join(', '),
      statusCode: 400,
    });
  }
  next();
};
export default loginValidator;
