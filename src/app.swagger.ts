import {
  adminJSON,
  adminTag,
  userUpdateSchema,
  updateProfileUserJSON,
  userRegisteredSchema,
  adminEmailPasswordSchema,
  userJSON,
  changePasswordJSON,
  changePasswordSchema,
  updateProfileJSON,
  updateProfileSchema
} from "./components/admin/admin.swagger";
export const swaggerJSON = {
  openapi: "3.0.0",
  info: {
    version: "0.1.9",
    title: "Demo App",
    description: "Demo App API",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  servers: [
    {
      url: process.env.BASE_URL,
      description: "Main",
    },
  ],
  tags: [adminTag],
  paths: {
    ...adminJSON,
    ...userJSON,
    ...updateProfileUserJSON,
    ...changePasswordJSON,
    ...updateProfileJSON
  },
  components: {
    // securitySchemes: {
    //   BearerAuth: {
    //     type: 'http',
    //     scheme: 'bearer',
    //     bearerFormat: 'JWT',
    //   },
    // },
    parameters: {},
    schemas: {
      adminEmailPasswordSchema,
      userRegisteredSchema,
      userUpdateSchema,
      changePasswordSchema,
      updateProfileSchema
    },
  },
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};
