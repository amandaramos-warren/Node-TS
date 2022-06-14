import Joi from 'joi'

const userSchema = Joi.object()
  .keys({
    fullName: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    emailConfirmation: Joi.string().email().valid(Joi.ref('email')).required(),
    cpf: Joi.string().length(11).required(),
    cellphone: Joi.string().min(11).max(12).required(),
    birthdate: Joi.date().iso().required(),
    emailSms: Joi.boolean(),
    whatsapp: Joi.boolean(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    postalCode: Joi.string().length(8).required(),
    address: Joi.string().required(),
    number: Joi.number().required()
  })
  .options({
    abortEarly: false
  })

export default userSchema
