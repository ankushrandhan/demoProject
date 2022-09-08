

export const adminTag = {
  name: "Admin Module",
  description: "APIs related to admin such as  login, forgot password etc",
};

export const adminEmailPasswordSchema = {
  required: ["email", "password"],
  properties: {
    email: {
      type: "string",
    },
    password: {
      type: "string",
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
    id: {
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
  "/admin/login": {
    post: {
      tags: [adminTag.name],
      summary: "Signin admin into the application",
      //    parameters: [headerParams.deviceidParam],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: adminEmailPasswordSchema,
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
  "/admin/user-registered": {
    post: {

      tags: [adminTag.name],
      summary: "User registered by admin from admin panel.",
      parameters: [
        {
          name: 'token',
          in: 'header',
          description: 'Authorization of the admin',
          schema: {
            type: 'string',
            example: '629f0166df26b02b1c2d08fe62c6bfb119479740f94281d9',
          },
        },
      ],
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
  "/admin/user-updateProfile": {
    put: {

      tags: [adminTag.name],
      summary: "Update profile by admin of user",
      parameters: [
        {
          name: 'token',
          in: 'header',
          description: 'Authorization of the admin',
          schema: {
            type: 'string',
            example: '629f0166df26b02b1c2d08fe62c6bfb119479740f94281d9',
          },
        },
      ],
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
  "/admin/change-password": {
    put: {

      tags: [adminTag.name],
      summary: "Change password by admin",
      parameters: [
        {
          name: 'token',
          in: 'header',
          description: 'Authorization of the admin',
          schema: {
            type: 'string',
            example: '629f0166df26b02b1c2d08fe62c6bfb119479740f94281d9',
          },
        },
      ],
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
  "/admin/update-profile": {
    put: {

      tags: [adminTag.name],
      summary: "Update profile by admin",
      parameters: [
        {
          name: 'token',
          in: 'header',
          description: 'Authorization of the admin',
          schema: {
            type: 'string',
            example: '629f0166df26b02b1c2d08fe62c6bfb119479740f94281d9',
          },
        },
      ],
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
