const Joi = require('joi')

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
    .required(),
  password: Joi.string().trim().min(10).required(),
})

module.exports = schema
