import responseMessage from '../../utils/common/responseMessage';
// import {headerParams} from '../../utils/common/swaggerHeaders';
// import {Status} from '../../utils/enums';

export const adminTag = {
  name: 'Admin Module',
  description: 'APIs related to admin such as  login, forgot password etc',
};


export const adminSchema = {
  required: ['name', 'email', 'password', 'role', 'isProfileCompleted'],
  properties: {
    id: {
      type: 'string',
      uniqueItems: true,
    },
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    profileImage: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    passwordResetExpiresAt: {
      type: 'date',
    },
    dob: {
      type: 'date',
    },
    timezone: {
      type: 'string',
    },
    isProfileCompleted: {
      type: 'boolean',
    },
  },
};
export const adminLoginSchema = {
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
};


export const adminEmailPasswordSchema = {
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
};



export const adminJSON = {
  '/admin/login': {
    post: {
      tags: [adminTag.name],
      summary: 'Signin admin into the application',
   //   parameters: [headerParams.deviceidParam],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: adminEmailPasswordSchema,
          },
        },
      },
      responses: {
        200: {
          description: 'Success Response',
          content: {
            'application/json': {
              schema: {
                properties: {
                  status: {
                    type: 'integer',
                  },
                  msg: {
                    type: 'string',
                  },
                  data: {
                    type: 'object',
                    properties: {
                      token: {
                        type: 'string',
                        example: 'abcd',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Error Response',
          content: {
            'application/json': {
              schema: {
                properties: {
                  status: {
                    type: 'integer',
                  },
                  msg: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
    },
  },



};
