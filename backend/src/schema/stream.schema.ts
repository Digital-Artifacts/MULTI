import * as Joi from 'joi';

const multistream = Joi.object({
  targets: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
    }),
  ),
});

export const CreateStreamSchema = Joi.object({
  stream_name: Joi.string().required(),
  type: Joi.string().valid('public', 'jwt', 'webhook').required(),
  record: Joi.boolean().default(false),
  webhookId: Joi.when('type', {
    is: 'webhook',
    then: Joi.string().required().messages({
      'string.required': 'Webhook is required when type is "webhook"',
    }),
    otherwise: Joi.forbidden().messages({
      'string.invalid': 'Webhook not needed when type is not "webhook"',
    }),
  }),
  webhookContext: Joi.when('type', {
    is: 'webhook',
    then: Joi.object().required().messages({
      'object.required': 'webhookContext is required when type is "webhook"',
    }),
    otherwise: Joi.forbidden().messages({
      'object.invalid': 'WebhookContext not needed when type is not "webhook"',
    }),
  }),
  multistream: multistream.required(),
}).options({ abortEarly: false, allowUnknown: false });

export const multistreamTargetSchema = Joi.object({
  name: Joi.string().required(),
  url: Joi.string()
    .regex(/^(rtmps?|srt):\/\//)
    .required(),
  profile: Joi.string().valid('source', '720p', '480p', '360p', '240p'),
  disabled: Joi.boolean().default(false),
  videoOnly: Joi.boolean().optional(),
});

export const streamTargetSchema = Joi.object({
  url: Joi.string()
    .regex(/^(rtmps?|srt):\/\//)
    .required(),
  name: Joi.string().required(),
  userId: Joi.string().uuid().required(),
});
