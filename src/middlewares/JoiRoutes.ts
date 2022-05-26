import Joi from 'joi'

const schemaBody = Joi.object().keys({
  full_name: Joi.string().alphanum().min(3).required(),
  email: Joi.string().email().required(),
  email_confirmation: Joi.string().email().valid(Joi.ref('email')).required(),
  cpf: Joi.string().length(11).required(),
  cellphone: Joi.string().min(11).max(12).required(),
  birthdate: Joi.string().isoDate().required(),
  email_sms: Joi.boolean().required(),
  whatsapp: Joi.boolean().required(),
  country: Joi.string().required(),
  postal_code: Joi.string().length(8).required(),
  address: Joi.string().required(),
  number: Joi.number().required()
})

export default schemaBody
