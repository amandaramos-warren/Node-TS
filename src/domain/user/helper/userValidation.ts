import Joi from 'joi'
import User from '../mocks/UserMock'
import UserHelper from './UserHelper'

const userSchema = Joi.object().keys({
  full_name: Joi.string().alphanum().min(3).required(),
  email: Joi.string().email().required(),
  email_confirmation: Joi.string().email().valid(Joi.ref('email')).required(),
  cpf: Joi.string().length(11)
    .custom((value, helpers)=>{
      if(UserHelper.CpfValidate(value)) { return value}
      return helpers.error('any.invalid')
    })
    .custom((value, helpers)=>{
      if(UserHelper.checkIfEquals(value, User)) {return value}
      return helpers.error('any.invalid')

    }).required(),
  cellphone: Joi.string().min(11).max(12).required(),
  birthdate: Joi.date().iso().required(),
  email_sms: Joi.boolean(),
  whatsapp: Joi.boolean(),
  country: Joi.string().required(),
  postal_code: Joi.string().length(8).required(),
  address: Joi.string().required(),
  number: Joi.number().required()
}).or('email_sms', 'whatsapp').options({
  abortEarly:false
})

export default userSchema
