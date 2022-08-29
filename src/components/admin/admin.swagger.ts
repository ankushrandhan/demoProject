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
export const userRegisteredSchema = {
  required: ["firstname", "lastname", "email", "designation", "password"],
  properties: {
    email: {
      type: "string",
    },
    firstname: {
      type: "string",
    },
    lastname: {
      type: "string",
    },
    designation: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
};
export const userUpdateSchema = {
  required: ["firstname", "lastname", "designation"],
  properties: {
    firstname: {
      type: "string",
    },
    lastname: {
      type: "string",
    },
    designation: {
      type: "string",
    },
  },
};
export const changePasswordSchema = {
  required: ["oldPassword", "newPassword", "confirmPassword"],
  properties: {
    oldPassword: {
      type: "string",
    },
    newPassword: {
      type: "string",
    },
    confirmPassword: {
      type: "string",
    },
  },
};
export const updateProfileSchema = {
  required: ["name", "email"],
  properties: {
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
  },
};


export const adminJSON = {
  '/admin/login': {
    post: {
      tags: [adminTag.name],
      summary: 'Signin admin into the admin panel',
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
export const userJSON = {
  "/admin/user-registered": {
    post: {
      tags: [adminTag.name],
      summary: "Signup user into the application",
      //   parameters: [headerParams.deviceidParam],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: userRegisteredSchema,
          },
        },
      },
      responses: {
        200: {
          description: "Success Response",
          content: {
            "application/json": {
              schema: {
                properties: {
                  status: {
                    type: "integer",
                  },
                  msg: {
                    type: "string",
                  },
                  data: {
                    type: "object",
                    properties: {
                      token: {
                        type: "string",
                        example: "abcd",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Error Response",
          content: {
            "application/json": {
              schema: {
                properties: {
                  status: {
                    type: "integer",
                  },
                  msg: {
                    type: "string",
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
export const updateProfileUserJSON = {
  "/admin/user-updateProfile": {
    put: {
      tags: [adminTag.name],
      summary: "Profile updation of user by admin.",
      //   parameters: [headerParams.deviceidParam],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: userUpdateSchema,
          },
        },
      },
      responses: {
        200: {
          description: "Success Response",
          content: {
            "application/json": {
              schema: {
                properties: {
                  status: {
                    type: "integer",
                  },
                  msg: {
                    type: "string",
                  },
                  data: {
                    type: "object",
                    properties: {
                      token: {
                        type: "string",
                        example: "abcd",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Error Response",
          content: {
            "application/json": {
              schema: {
                properties: {
                  status: {
                    type: "integer",
                  },
                  msg: {
                    type: "string",
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
export const changePasswordJSON = {
  "/admin/change-password": {
    put: {
      tags: [adminTag.name],
      summary: "Password update by admin from admin panel.",
      //   parameters: [headerParams.deviceidParam],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: changePasswordSchema,
          },
        },
      },
      responses: {
        200: {
          description: "Success Response",
          content: {
            "application/json": {
              schema: {
                properties: {
                  status: {
                    type: "integer",
                  },
                  msg: {
                    type: "string",
                  },
                  data: {
                    type: "object",
                    properties: {
                      token: {
                        type: "string",
                        example: "abcd",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Error Response",
          content: {
            "application/json": {
              schema: {
                properties: {
                  status: {
                    type: "integer",
                  },
                  msg: {
                    type: "string",
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
export const updateProfileJSON = {
  "/admin/update-profile": {
    put: {
      tags: [adminTag.name],
      summary: "Profile updation by admin",
      //   parameters: [headerParams.deviceidParam],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: updateProfileSchema,
          },
        },
      },
      responses: {
        200: {
          description: "Success Response",
          content: {
            "application/json": {
              schema: {
                properties: {
                  status: {
                    type: "integer",
                  },
                  msg: {
                    type: "string",
                  },
                  data: {
                    type: "object",
                    properties: {
                      token: {
                        type: "string",
                        example: "abcd",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Error Response",
          content: {
            "application/json": {
              schema: {
                properties: {
                  status: {
                    type: "integer",
                  },
                  msg: {
                    type: "string",
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
