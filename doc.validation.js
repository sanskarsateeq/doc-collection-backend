const Joi = require("joi");

const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid mongo id');
  }
  return value;
};

const doc = {
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    mobileNumber: Joi.number().required(),
    emailId: Joi.string().required(),
    fathersName: Joi.string().required(),
    residentialAddress: Joi.string().required(),
    bankAccountNumber: Joi.string().required(),
    bankIfscCode: Joi.string().required(),
    upiId: Joi.string(),
    adhaarCardFront: Joi.string().required(),
    adhaarCardBack: Joi.string().required(),
    panCard: Joi.string().required(),
    identityProof: Joi.string().required(),
    proofOfResidence: Joi.string().required(),
    passportSizePhoto: Joi.string().required(),
  }),
};

module.exports = {
  doc,
};
