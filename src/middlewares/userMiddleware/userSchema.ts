import Joi from 'joi'

const userSchema = Joi.object().keys({
  full_name: Joi.string().required(),
  email: Joi.string().required(),
  email_confirmation: Joi.string().required(),
  cpf: Joi.string().required(),
  cellphone: Joi.string().required(),
  birthdate: Joi.date().required(),
  email_sms: Joi.boolean(),
  whatsapp: Joi.boolean(),
  country: Joi.string().required(),
  postal_code: Joi.string().required(),
  address: Joi.string().required(),
  number: Joi.number().required()
}).or('email_sms', 'whatsapp').options({
  abortEarly:false
})

export default userSchema
