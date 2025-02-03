import Joi from 'joi';
const passwordValidationSchema = Joi.object({
  password: Joi.string()
    .min(8)
    .max(30)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
    .message(
      'Password must be 8-30 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.',
    )
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Confirm password must match the password.',
  }),
});

const passwordValidator = (req, res, next) => {
  const { error } = passwordValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 'error',
      message: error.details.map((detail) => detail.message).join(', '),
      statusCode: 400,
    });
  }
  next();
};

export default passwordValidator;
