import responseMessage from "../../utils/common/responseMessage";
// import {headerParams} from '../../utils/common/swaggerHeaders';
// import {Status} from '../../utils/enums';

export const userTag = {
  name: "User Module",
  description: "APIs related to user such as  register",
};

export const userSchema = {
  required: ["firstname", "lastname", "email", "password", "designation"],
  properties: {
    id: {
      type: "string",
      uniqueItems: true,
    },
    firstname: {
      type: "string",
    },
    lastname: {
      type: "string",
    },
    email: {
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


export const userJSON = {
  "/user/register": {
    post: {
      tags: [userTag.name],
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
