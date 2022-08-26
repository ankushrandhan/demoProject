import {adminJSON, adminTag, adminLoginSchema} from './components/admin/admin.swagger';
import {userJSON, userTag, userRegisteredSchema} from './components/users/user.swagger';
export const swaggerJSON = {

    openapi: '3.0.0',
    info: {
      version: '0.1.9',
      title: 'Demo App',
      description: 'Demo App API',
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: process.env.BASE_URL,
        description: 'Main',
      },
    ],
    tags: [
      adminTag,
      userTag
    ],
    paths: {
      ...adminJSON,
      ...userJSON
    },
    components: {
      // securitySchemes: {
      //   BearerAuth: {
      //     type: 'http',
      //     scheme: 'bearer',
      //     bearerFormat: 'JWT',
      //   },
      // },
      parameters: {
        
      },
      schemas: {
        adminLoginSchema,
        userRegisteredSchema
      },
    },
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  };
  